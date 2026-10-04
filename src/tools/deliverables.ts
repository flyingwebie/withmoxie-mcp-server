import { apiTool } from "./api-tool.js";

export const deliverableTools = [
  apiTool("approve_deliverable", "POST /public/action/deliverable/approve", "Approve a deliverable by exact clientName, projectName, and deliverableName."),
];
