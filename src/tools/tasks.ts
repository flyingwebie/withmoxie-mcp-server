import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type { Task, CreateTaskInput } from "../types/moxie.js";

export function registerTaskTools(server: McpServer) {
  server.tool(
    "search_tasks",
    "Search for tasks in your Moxie workspace, optionally filtered by project or client name. Note: This endpoint follows the Moxie API convention but may not be officially documented.",
    {
      query: z.string().optional().describe("Search query to filter tasks"),
      projectName: z.string().optional().describe("Filter tasks by exact project name"),
      clientName: z.string().optional().describe("Filter tasks by exact client name"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const queryParams: Record<string, string> = {};
        if (params.query) queryParams.query = params.query;
        if (params.projectName) queryParams.projectName = params.projectName;
        if (params.clientName) queryParams.clientName = params.clientName;

        const tasks = await client.get<Task[]>("/action/tasks/search", queryParams);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(tasks, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to search tasks: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "create_task",
    "Create a new task/deliverable in a project",
    {
      name: z.string().describe("Name of the task"),
      projectName: z.string().describe("Exact name of the project to add this task to"),
      clientName: z.string().optional().describe("Exact match of a client record in your CRM"),
      description: z.string().optional().describe("Task description"),
      assignedTo: z
        .array(z.string())
        .optional()
        .describe("Email addresses of users in the workspace to assign this task to"),
      dueDate: z.string().optional().describe("Task due date (YYYY-MM-DD format)"),
      startDate: z.string().optional().describe("Task start date (YYYY-MM-DD format)"),
      status: z
        .string()
        .optional()
        .describe("Task status - must match exactly a status in your kanban if provided"),
      priority: z.number().optional().describe("Numeric priority for sorting in kanban"),
      tasks: z
        .array(z.string())
        .optional()
        .describe("Array of subtask names to create under this task"),
      customValues: z
        .record(z.string(), z.string())
        .optional()
        .describe(
          "Map of custom fields. Keys must match exactly the fields specified in your project settings custom fields setup"
        ),
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
          startDate: params.startDate,
          status: params.status,
          priority: params.priority,
          tasks: params.tasks,
          customValues: params.customValues,
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

  server.tool(
    "delete_task",
    "Delete a task from a project. Note: This endpoint follows the Moxie API convention but may not be officially documented.",
    {
      taskId: z.string().describe("ID of the task to delete"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        await client.delete<void>(`/action/tasks/delete?taskId=${params.taskId}`);
        return {
          content: [
            {
              type: "text",
              text: `Successfully deleted task ${params.taskId}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to delete task: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
