import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type { Opportunity, CreateOpportunityInput, PipelineStage } from "../types/moxie.js";

export function registerOpportunityTools(server: McpServer) {
  server.tool(
    "list_pipeline_stages",
    "List all pipeline stages for opportunities in your workspace",
    {},
    async () => {
      try {
        const client = getMoxieClient();
        const stages = await client.get<PipelineStage[]>("/action/pipeline/stages/list");
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(stages, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to list pipeline stages: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "create_opportunity",
    "Create a new sales opportunity in the pipeline",
    {
      name: z.string().describe("Name/title of the opportunity"),
      clientName: z.string().optional().describe("Client associated with this opportunity"),
      contactName: z.string().optional().describe("Contact person for this opportunity"),
      stage: z.string().optional().describe("Pipeline stage (use list_pipeline_stages to see available stages)"),
      value: z.number().optional().describe("Estimated value of the opportunity"),
      probability: z.number().optional().describe("Win probability percentage (0-100)"),
      expectedCloseDate: z.string().optional().describe("Expected close date (YYYY-MM-DD format)"),
      description: z.string().optional().describe("Description of the opportunity"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateOpportunityInput = {
          name: params.name,
          clientName: params.clientName,
          contactName: params.contactName,
          stage: params.stage,
          value: params.value,
          probability: params.probability,
          expectedCloseDate: params.expectedCloseDate,
          description: params.description,
        };

        const result = await client.post<Opportunity>("/action/opportunities/create", createInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully created opportunity: ${result.name}\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to create opportunity: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
