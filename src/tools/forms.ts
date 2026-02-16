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
        const forms = await client.get<FormName[]>("/action/formNames/list");
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
    "Create a new form submission with lead information and custom answers. Can optionally create a pipeline opportunity by providing pipelineStageName.",
    {
      formName: z
        .string()
        .optional()
        .describe("Associate the submission with an existing form template for reporting purposes"),
      firstName: z.string().optional().describe("Lead's first name"),
      lastName: z.string().optional().describe("Lead's last name"),
      email: z.string().optional().describe("Lead's email address"),
      phone: z.string().optional().describe("Lead's phone number"),
      role: z.string().optional().describe("Lead's role/title"),
      businessName: z.string().optional().describe("Lead's business/company name"),
      website: z.string().optional().describe("Lead's website URL"),
      address1: z.string().optional().describe("Street address line 1"),
      address2: z.string().optional().describe("Street address line 2"),
      city: z.string().optional().describe("City"),
      locality: z.string().optional().describe("State/Province/Region"),
      postal: z.string().optional().describe("Postal/ZIP code"),
      country: z.string().optional().describe("Country"),
      sourceUrl: z.string().optional().describe("Source URL where the form was submitted"),
      leadSource: z.string().optional().describe("Lead source tracking"),
      notes: z.string().optional().describe("General notes about the submission"),
      pipelineStageName: z
        .string()
        .optional()
        .describe(
          "If provided, automatically creates an Opportunity in your pipeline. Must match exactly one of your pipeline stage names"
        ),
      answers: z
        .array(
          z.object({
            fieldKey: z
              .string()
              .describe("Property key used for reporting and token mapping"),
            question: z.string().describe("The question text associated with this answer"),
            answer: z.string().describe("The answer the person provided"),
          })
        )
        .optional()
        .describe("Array of structured question/answer objects for custom form fields"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateFormSubmissionInput = {
          formName: params.formName,
          firstName: params.firstName,
          lastName: params.lastName,
          email: params.email,
          phone: params.phone,
          role: params.role,
          businessName: params.businessName,
          website: params.website,
          address1: params.address1,
          address2: params.address2,
          city: params.city,
          locality: params.locality,
          postal: params.postal,
          country: params.country,
          sourceUrl: params.sourceUrl,
          leadSource: params.leadSource,
          notes: params.notes,
          pipelineStageName: params.pipelineStageName,
          answers: params.answers,
        };

        const result = await client.post<FormSubmission>(
          "/action/formSubmissions/create",
          createInput
        );
        return {
          content: [
            {
              type: "text",
              text: `Successfully submitted form${params.formName ? `: ${params.formName}` : ""}\n\n${JSON.stringify(result, null, 2)}`,
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
