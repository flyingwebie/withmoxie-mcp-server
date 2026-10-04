import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient, type MoxieClient, type HttpMethod, type RequestOptions, type QueryParams } from "../client/moxie-client.js";
import { apiOperations, apiSchemas } from "../types/api-metadata.js";

interface JsonSchema {
  $ref?: string;
  type?: string | string[];
  format?: string;
  description?: string;
  enum?: (string | number | boolean)[];
  required?: string[];
  properties?: Record<string, JsonSchema>;
  items?: JsonSchema;
  additionalProperties?: boolean | JsonSchema;
  allOf?: JsonSchema[];
  oneOf?: JsonSchema[];
  anyOf?: JsonSchema[];
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
}
interface Operation {
  parameters: { name: string; in: string; required: boolean; schema: JsonSchema }[];
  body?: JsonSchema;
  contentType?: string;
  responseContentType?: string;
}
interface SchemaOptions {
  /** Entity models include response-only requirements; callers can supply partial nested records. */
  partial?: boolean;
  nullable?: boolean;
}
const schemas: Record<string, JsonSchema> = apiSchemas;
const referenceSchemas = new Map<string, z.ZodTypeAny>();

function resolve(schema: JsonSchema): JsonSchema {
  if (!schema.$ref) return schema;
  const name = schema.$ref.split("/").at(-1)!;
  if (!schemas[name]) throw new Error(`Unknown API schema: ${name}`);
  return schemas[name];
}

function schemaToZod(schema: JsonSchema, options: SchemaOptions = {}): z.ZodTypeAny {
  let result: z.ZodTypeAny;
  if (schema.$ref) {
    const key = `${schema.$ref}:${!!options.partial}:${!!options.nullable}`;
    if (!referenceSchemas.has(key)) {
      let resolved: z.ZodTypeAny | undefined;
      referenceSchemas.set(key, z.lazy(() => resolved ||= schemaToZod(resolve(schema), options)));
    }
    result = referenceSchemas.get(key)!;
  } else if (schema.enum?.length) {
    if (schema.enum.every(value => typeof value === "string")) {
      result = z.enum(schema.enum as [string, ...string[]]);
    } else {
      const [first, ...rest] = schema.enum.map(value => z.literal(value));
      result = rest.length ? z.union([first, rest[0], ...rest.slice(1)]) : first;
    }
  } else if (Array.isArray(schema.type)) {
    const [first, ...rest] = schema.type.map(type => schemaToZod({ ...schema, type }, options));
    result = rest.length ? z.union([first, rest[0], ...rest.slice(1)]) : first;
  } else if (schema.allOf?.length) {
    result = schema.allOf.map(item => schemaToZod(item, options)).reduce((left, right) => z.intersection(left, right));
  } else if (schema.oneOf || schema.anyOf) {
    const [first, ...rest] = (schema.oneOf || schema.anyOf)!.map(item => schemaToZod(item, options));
    result = rest.length ? z.union([first, rest[0], ...rest.slice(1)]) : first;
  } else if (schema.type === "object" || schema.properties) {
    result = z.object(schemaFields(schema, options)).passthrough();
    if (typeof schema.additionalProperties === "object") {
      result = z.object(schemaFields(schema, options)).catchall(schemaToZod(schema.additionalProperties, options));
    }
  } else if (schema.type === "array") {
    result = z.array(schemaToZod(schema.items || {}, options));
  } else if (schema.type === "string") {
    let stringSchema = z.string();
    if (schema.minLength !== undefined) stringSchema = stringSchema.min(schema.minLength);
    if (schema.maxLength !== undefined) stringSchema = stringSchema.max(schema.maxLength);
    result = stringSchema;
  } else if (schema.type === "integer" || schema.type === "number") {
    let numberSchema = z.number().finite();
    if (schema.type === "integer") numberSchema = numberSchema.int();
    if (schema.minimum !== undefined) numberSchema = numberSchema.min(schema.minimum);
    if (schema.maximum !== undefined) numberSchema = numberSchema.max(schema.maximum);
    result = numberSchema;
  } else if (schema.type === "boolean") result = z.boolean();
  else if (schema.type === "null") result = z.null();
  else result = z.unknown();
  if (options.nullable && !schema.$ref) result = result.nullable();
  const description = schema.description || (schema.format === "date" ? "Date (YYYY-MM-DD)" : schema.format === "date-time" ? "ISO-8601 timestamp" : undefined);
  return description ? result.describe(description) : result;
}

function schemaFields(schema: JsonSchema, options: SchemaOptions = {}): z.ZodRawShape {
  const resolved = resolve(schema);
  return Object.fromEntries(Object.entries(resolved.properties || {}).map(([name, field]) => {
    const value = schemaToZod(field, options);
    return [name, !options.partial && resolved.required?.includes(name) ? value : value.optional()];
  }));
}

export function apiFields(name: keyof typeof apiSchemas, options: SchemaOptions = {}): z.ZodRawShape {
  return schemaFields(schemas[name], options);
}

/** Retain compatible old argument names without sending them to Moxie. */
export function renameFields(args: ToolArgs, mapping: Record<string, string>): ToolArgs {
  const result = { ...args };
  for (const [alias, canonical] of Object.entries(mapping)) {
    if (result[alias] !== undefined) {
      if (result[canonical] !== undefined && result[canonical] !== result[alias]) {
        throw new Error(`Supply either ${canonical} or ${alias}, or use the same value for both`);
      }
      result[canonical] = result[alias];
    }
    delete result[alias];
  }
  return result;
}

export type ApiOperation = keyof typeof apiOperations;
export type ToolArgs = Record<string, unknown>;
export interface ApiTool {
  name: string;
  description: string;
  operation: ApiOperation;
  inputSchema: z.AnyZodObject;
  transform?: (args: ToolArgs) => ToolArgs | Promise<ToolArgs>;
  encoding?: RequestOptions["encoding"];
  bodyField?: string;
  readOnly: boolean;
}
interface ToolOptions extends SchemaOptions {
  fields?: z.ZodRawShape;
  required?: string[];
  omit?: string[];
  passthrough?: boolean;
  transform?: ApiTool["transform"];
  refine?: (args: ToolArgs) => boolean;
  refinementMessage?: string;
  encoding?: ApiTool["encoding"];
  bodyField?: string;
  readOnly?: boolean;
}

export function apiTool(name: string, operation: ApiOperation, description: string, options: ToolOptions = {}): ApiTool {
  const metadata: Operation = apiOperations[operation];
  const fields = metadata.body ? schemaFields(metadata.body, options) : {};
  for (const parameter of metadata.parameters) {
    const value = schemaToZod(parameter.schema);
    fields[parameter.name] = parameter.required ? value : value.optional();
  }
  Object.assign(fields, options.fields);
  for (const field of options.required || []) {
    if (!fields[field]) throw new Error(`Unknown required field ${field} on ${name}`);
    if (fields[field] instanceof z.ZodOptional) fields[field] = fields[field].unwrap();
  }
  for (const field of options.omit || []) delete fields[field];
  const inputSchema = options.passthrough ? z.object(fields).passthrough() : z.object(fields).strict();
  // Check cross-field requirements in the handler; MCP still advertises the object schema.
  const transform = async (args: ToolArgs) => {
    if (options.refine && !options.refine(args)) throw new Error(options.refinementMessage || "Invalid tool arguments");
    return options.transform ? options.transform(args) : args;
  };
  return { name, operation, description, inputSchema, transform, encoding: options.encoding, bodyField: options.bodyField, readOnly: options.readOnly ?? operation.startsWith("GET ") };
}

export function updateTools(entity: "client" | "contact" | "project" | "expense" | "opportunity"): ApiTool[] {
  const path = `/public/action/${entity === "opportunity" ? "opportunities" : entity + "s"}/update`;
  // PATCH's generic object is described by the corresponding PUT entity schema.
  const putOperation = `PUT ${path}` as ApiOperation;
  const metadata: Operation = apiOperations[putOperation];
  const fields = schemaFields(metadata.body!, { partial: true, nullable: true });
  fields.id = z.string().min(1).describe(`Id of the ${entity} to update`);
  const options: ToolOptions = { fields, passthrough: true };
  const projectAlias: ToolOptions = entity === "project" ? {
    fields: { ...fields, id: fields.id.optional(), projectId: z.string().min(1).optional().describe("Alias for id") },
    transform: args => {
      const body = renameFields(args, { projectId: "id" });
      if (!body.id) throw new Error("id (or projectId) is required to update a project");
      return body;
    },
  } : {};
  return [
    apiTool(`update_${entity}`, `PATCH ${path}` as ApiOperation, `Partially update a ${entity} by id. Omitted fields stay unchanged; null clears a field.`, { ...options, ...projectAlias }),
    apiTool(`replace_${entity}`, putOperation, `Replace the entire ${entity} by id. Supply the complete record; omitted fields are cleared or reset.`, { ...options, partial: true, nullable: true }),
  ];
}

export function buildRequest(tool: ApiTool, args: ToolArgs): { method: HttpMethod; path: string; options: RequestOptions } {
  const [method, originalPath] = tool.operation.split(" ") as [HttpMethod, string];
  const metadata: Operation = apiOperations[tool.operation];
  let path = originalPath;
  const params: QueryParams = {};
  const body: ToolArgs = { ...args };
  for (const parameter of metadata.parameters) {
    const value = args[parameter.name];
    delete body[parameter.name];
    if (parameter.required && (value === undefined || value === null || value === "")) {
      throw new Error(`Missing ${parameter.in} parameter: ${parameter.name}`);
    }
    if (value !== undefined) schemaToZod(parameter.schema).parse(value);
    if (parameter.in === "path") {
      if (value === undefined || value === null || value === "") throw new Error(`Missing path parameter: ${parameter.name}`);
      path = path.replace(`{${parameter.name}}`, encodeURIComponent(String(value)));
    } else if (parameter.in === "query" && value !== undefined) {
      if (!["string", "number", "boolean"].includes(typeof value)) throw new Error(`Invalid query parameter: ${parameter.name}`);
      params[parameter.name] = value as string | number | boolean;
    }
  }
  const encoding = tool.encoding || (metadata.contentType === "application/x-www-form-urlencoded" ? "form" : "json");
  let data: unknown = metadata.body ? body : undefined;
  if (tool.bodyField) data = args[tool.bodyField];
  else if (encoding === "form") data = new URLSearchParams(body as Record<string, string>);
  return { method, path, options: { params, body: data, encoding, accept: metadata.responseContentType } };
}

export function registerApiTools(server: McpServer, definitions: ApiTool[], client?: MoxieClient): void {
  for (const tool of definitions) {
    server.registerTool(tool.name, {
      description: tool.description,
      inputSchema: tool.inputSchema,
      annotations: {
        readOnlyHint: tool.readOnly,
        ...(tool.readOnly && { destructiveHint: false }),
        ...((tool.operation.startsWith("DELETE ") || tool.operation.startsWith("PUT ")) && { destructiveHint: true }),
      },
    }, async args => {
      try {
        const input = tool.transform ? await tool.transform(args) : args;
        const request = buildRequest(tool, input);
        const result = await (client || getMoxieClient()).request<unknown>(request.method, request.path, request.options);
        return { content: [{ type: "text", text: result === undefined || result === "" ? "Success" : typeof result === "string" ? result : JSON.stringify(result, null, 2) }] };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return { content: [{ type: "text", text: `Failed to ${tool.name.replaceAll("_", " ")}: ${message}` }], isError: true };
      }
    });
  }
}
