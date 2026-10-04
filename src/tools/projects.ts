import { z } from "zod";
import { apiTool, updateTools, type ToolArgs } from "./api-tool.js";

const feeAliases = {
  feeType: z.enum(["Hourly", "Fixed Price", "Retainer", "Per Item", "HOURLY", "FIXED", "RETAINER"]).optional().describe("Alias for feeSchedule.feeType; legacy uppercase values are normalized"),
  amount: z.number().optional().describe("Alias for feeSchedule.amount"),
};

function normalizeFeeSchedule(args: ToolArgs, requireType: boolean): ToolArgs {
  const { feeType, amount, ...body } = args;
  if (feeType !== undefined || amount !== undefined) {
    const aliases: Record<string, string> = { HOURLY: "Hourly", FIXED: "Fixed Price", RETAINER: "Retainer" };
    const schedule: ToolArgs = { ...(body.feeSchedule as ToolArgs || {}) };
    const normalizedType = feeType === undefined ? undefined : aliases[String(feeType)] || feeType;
    if (normalizedType !== undefined) {
      if (schedule.feeType !== undefined && schedule.feeType !== normalizedType) throw new Error("Conflicting fee schedule types");
      schedule.feeType = normalizedType;
    }
    if (amount !== undefined) {
      if (schedule.amount !== undefined && schedule.amount !== amount) throw new Error("Conflicting fee schedule amounts");
      schedule.amount = amount;
    }
    if (requireType && !schedule.feeType) throw new Error("feeType is required when specifying a fee schedule amount");
    body.feeSchedule = schedule;
  }
  return body;
}

const projectUpdates = updateTools("project").map(tool => {
  if (tool.name !== "update_project") return tool;
  const identifyProject = tool.transform!;
  return {
    ...tool,
    inputSchema: tool.inputSchema.extend(feeAliases),
    transform: async (args: ToolArgs) => normalizeFeeSchedule(await identifyProject(args), false),
  };
});

export const projectTools = [
  apiTool("search_projects", "GET /public/action/projects/search", "List active projects. query is an exact client name; an unknown client returns 404. id takes precedence."),
  apiTool("create_project", "POST /public/action/projects/create", "Create a project for a client, optionally from a template, with a fee schedule and custom fields.", {
    fields: feeAliases,
    transform: args => normalizeFeeSchedule(args, true),
  }),
  ...projectUpdates,
  apiTool("list_project_types", "GET /public/action/projectTypes/list", "List project types, including custom field definitions and task stages."),
  apiTool("list_project_task_stages", "GET /public/action/taskStages/list", "List task stages for projectTypeId, or the workspace's default project type when omitted."),
];
