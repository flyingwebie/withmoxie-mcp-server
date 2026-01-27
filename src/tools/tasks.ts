import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type { Task, CreateTaskInput } from "../types/moxie.js";

export function registerTaskTools(server: McpServer) {
  server.tool(
    "create_task",
    "Create a new task/deliverable in a project",
    {
      name: z.string().describe("Name of the task"),
      projectName: z.string().describe("Exact name of the project to add this task to"),
      clientName: z.string().optional().describe("Client name (if needed for project lookup)"),
      description: z.string().optional().describe("Task description"),
      assignedTo: z.string().optional().describe("Email of the user to assign this task to"),
      dueDate: z.string().optional().describe("Task due date (YYYY-MM-DD format)"),
      status: z.string().optional().describe("Task status"),
      priority: z.string().optional().describe("Task priority level"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateTaskInput = {
          name: params.name,
          projectName: params.projectName,
          clientName: params.clientName,
          description: params.description,
          assignedTo: params.assignedTo,
          dueDate: params.dueDate,
          status: params.status,
          priority: params.priority,
        };

        const result = await client.post<Task>("/action/tasks/create", createInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully created task: ${result.name}\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to create task: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
