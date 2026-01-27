import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type { TimeEntry, CreateTimeEntryInput } from "../types/moxie.js";

export function registerTimeEntryTools(server: McpServer) {
  server.tool(
    "create_time_entry",
    "Create a time entry to track work. Can optionally auto-create client, project, or deliverable if they don't exist.",
    {
      timerStart: z.string().describe("Start time in ISO-8601 format (e.g., 2024-01-15T09:00:00Z)"),
      timerEnd: z.string().describe("End time in ISO-8601 format (must be after start time)"),
      userEmail: z.string().describe("Email of the workspace user who owns this time entry"),
      clientName: z.string().optional().describe("Exact name of the client"),
      projectName: z.string().optional().describe("Exact name of the project"),
      deliverableName: z.string().optional().describe("Exact name of the task/deliverable"),
      createClient: z.boolean().optional().describe("Auto-create client if not found"),
      createProject: z.boolean().optional().describe("Auto-create project if not found"),
      createDeliverable: z.boolean().optional().describe("Auto-create task/deliverable if not found"),
      notes: z.string().optional().describe("Notes about the time entry"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateTimeEntryInput = {
          timerStart: params.timerStart,
          timerEnd: params.timerEnd,
          userEmail: params.userEmail,
          clientName: params.clientName,
          projectName: params.projectName,
          deliverableName: params.deliverableName,
          createClient: params.createClient,
          createProject: params.createProject,
          createDeliverable: params.createDeliverable,
          notes: params.notes,
        };

        const result = await client.post<TimeEntry>("/action/timeWorked/create", createInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully created time entry\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to create time entry: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
