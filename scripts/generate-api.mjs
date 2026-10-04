import { readFile, writeFile } from "node:fs/promises";
import openapiTS, { astToString } from "openapi-typescript";
import YAML from "yaml";

const root = new URL("../", import.meta.url);
const spec = YAML.parse(await readFile(new URL("openapi.yaml", root), "utf8"));
const header = "// Generated from openapi.yaml by npm run generate:api. Do not edit.\n";
const types = header + astToString(await openapiTS(spec));

// Ship only schema metadata at runtime; YAML parsing and code generation stay in devDependencies.
const schemas = {};
const keys = ["$ref", "type", "format", "description", "enum", "required", "minLength", "maxLength",
  "minimum", "maximum", "properties", "items", "additionalProperties", "allOf", "oneOf", "anyOf"];
function compact(schema) {
  const result = {};
  for (const key of keys) {
    if (!(key in schema)) continue;
    const value = schema[key];
    if (key === "properties") {
      result[key] = Object.fromEntries(Object.entries(value).map(([name, field]) => [name, compact(field)]));
    } else if (["items", "additionalProperties"].includes(key) && typeof value === "object") {
      result[key] = compact(value);
    } else if (["allOf", "oneOf", "anyOf"].includes(key)) {
      result[key] = value.map(compact);
    } else {
      result[key] = value;
    }
  }
  return result;
}
const operations = {};
const referencedSchemas = new Set();
function includeReferences(schema) {
  if (!schema || typeof schema !== "object") return;
  if (schema.$ref) {
    const name = schema.$ref.split("/").at(-1);
    if (!referencedSchemas.has(name)) {
      referencedSchemas.add(name);
      includeReferences(spec.components.schemas[name]);
    }
  }
  for (const value of Object.values(schema)) includeReferences(value);
}
// The PATCH task body is generic in OpenAPI; advertise the documented deliverable fields.
includeReferences({ $ref: "#/components/schemas/ProjectDeliverable" });
for (const [path, methods] of Object.entries(spec.paths)) {
  for (const [method, operation] of Object.entries(methods)) {
    const parameters = (operation.parameters ?? []).filter(p => p.in !== "header").map(p => ({
      name: p.name, in: p.in, required: p.required ?? false, schema: compact(p.schema),
    }));
    const content = Object.entries(operation.requestBody?.content ?? {})[0];
    if (content) includeReferences(content[1].schema);
    const success = Object.entries(operation.responses ?? {}).find(([status]) => /^2\d\d$/.test(status));
    const responseContentType = success && Object.keys(success[1].content ?? {})[0];
    operations[`${method.toUpperCase()} ${path}`] = {
      parameters,
      ...(content && { contentType: content[0], body: compact(content[1].schema) }),
      ...(responseContentType && { responseContentType }),
    };
  }
}
for (const [name, schema] of Object.entries(spec.components.schemas)) {
  if (referencedSchemas.has(name)) schemas[name] = compact(schema);
}
const metadata = header + "export const apiSchemas = " + JSON.stringify(schemas, null, 2)
  + ";\n\nexport const apiOperations = " + JSON.stringify(operations, null, 2) + ";\n";
const files = [["src/types/openapi.ts", types], ["src/types/api-metadata.ts", metadata]];
for (const [path, contents] of files) {
  const url = new URL(path, root);
  if (process.argv.includes("--check")) {
    if (await readFile(url, "utf8") !== contents) throw new Error(`${path} is stale. Run npm run generate:api.`);
  } else {
    await writeFile(url, contents);
  }
}
console.log(`${process.argv.includes("--check") ? "Checked" : "Generated"} API types and schemas for ${Object.keys(operations).length} operations.`);
