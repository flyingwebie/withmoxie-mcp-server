import { z } from "zod";
import { apiFields, apiTool } from "./api-tool.js";

export const taskTools = [
  apiTool("list_tasks", "GET /public/action/tasks/list", "List tasks, optionally filtered by projectId, clientId, statusId, and archived (defaults to false)."),
  apiTool("search_tasks", "GET /public/action/tasks/search", "Search tasks by query or retrieve an exact id. The id takes precedence."),
  apiTool("create_task", "POST /public/action/tasks/create", "Create a project task/deliverable with subtasks, assignee emails, task stage, and custom fields."),
  apiTool("update_task", "PATCH /public/action/tasks/update", "Partially update a task by id. Use statusId for its stage and assignedToList for numeric user ids; null clears a field.", {
    fields: { ...apiFields("ProjectDeliverable", { partial: true, nullable: true }), id: z.string().min(1) },
    passthrough: true,
  }),
];
