import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type { FormName, FormSubmission, CreateFormSubmissionInput } from "../types/moxie.js";

export function registerFormTools(server: McpServer) {
  server.tool(
    "list_form_names",
    "List all available form names in your workspace",
    {},
    async () => {
      try {
        const client = getMoxieClient();
        const forms = await client.get<FormName[]>("/action/forms/list");
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(forms, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to list form names: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "create_form_submission",
    "Submit a form with provided field values",
    {
      formName: z.string().describe("Exact name of the form to submit"),
      fields: z.record(z.unknown()).describe("Object containing field names and their values"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateFormSubmissionInput = {
          formName: params.formName,
          fields: params.fields,
        };

        const result = await client.post<FormSubmission>("/action/forms/submit", createInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully submitted form: ${params.formName}\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to submit form: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
