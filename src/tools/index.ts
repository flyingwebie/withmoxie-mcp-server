import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { MoxieClient } from "../client/moxie-client.js";
import { registerApiTools } from "./api-tool.js";
import { clientTools } from "./clients.js";
import { contactTools } from "./contacts.js";
import { projectTools } from "./projects.js";
import { taskTools } from "./tasks.js";
import { deliverableTools } from "./deliverables.js";
import { invoiceTools } from "./invoices.js";
import { expenseTools } from "./expenses.js";
import { timeEntryTools } from "./time-entries.js";
import { opportunityTools } from "./opportunities.js";
import { ticketTools } from "./tickets.js";
import { formTools } from "./forms.js";
import { calendarTools } from "./calendar.js";
import { fileTools } from "./files.js";
import { templateTools } from "./templates.js";
import { workspaceTools } from "./workspace.js";
import { agreementTools } from "./agreements.js";
import { webhookTools } from "./webhooks.js";

export const toolDefinitions = [
  ...clientTools, ...contactTools, ...projectTools, ...taskTools, ...deliverableTools,
  ...invoiceTools, ...expenseTools, ...timeEntryTools, ...opportunityTools,
  ...ticketTools, ...formTools, ...calendarTools, ...fileTools, ...templateTools,
  ...workspaceTools, ...agreementTools, ...webhookTools,
];

export function registerTools(server: McpServer, client?: MoxieClient): void {
  registerApiTools(server, toolDefinitions, client);
}
