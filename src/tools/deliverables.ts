import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type { ApproveDeliverableInput } from "../types/moxie.js";

export function registerDeliverableTools(server: McpServer) {
  server.tool(
    "approve_deliverable",
    "Approve a deliverable/task in a project",
    {
      deliverableId: z.string().describe("ID of the deliverable to approve"),
      projectName: z.string().optional().describe("Project name containing the deliverable"),
      clientName: z.string().optional().describe("Client name for the project"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const approveInput: ApproveDeliverableInput = {
          deliverableId: params.deliverableId,
          projectName: params.projectName,
          clientName: params.clientName,
        };

        const result = await client.post<Record<string, unknown>>("/action/deliverables/approve", approveInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully approved deliverable ${params.deliverableId}\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to approve deliverable: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
