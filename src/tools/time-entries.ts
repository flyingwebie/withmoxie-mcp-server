import { apiTool } from "./api-tool.js";

export const timeEntryTools = [
  apiTool("create_time_entry", "POST /public/action/timeWorked/create", "Log time between timerStart and timerEnd, with optional userEmail and automatic creation of named client/project/deliverable records."),
];
