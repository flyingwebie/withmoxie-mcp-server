import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { registerClientTools } from "./clients.js";
import { registerContactTools } from "./contacts.js";
import { registerProjectTools } from "./projects.js";
import { registerInvoiceTools } from "./invoices.js";
import { registerTaskTools } from "./tasks.js";
import { registerTimeEntryTools } from "./time-entries.js";
import { registerExpenseTools } from "./expenses.js";
import { registerOpportunityTools } from "./opportunities.js";
import { registerTicketTools } from "./tickets.js";
import { registerFormTools } from "./forms.js";
import { registerFileTools } from "./files.js";
import { registerCalendarTools } from "./calendar.js";
import { registerDeliverableTools } from "./deliverables.js";
import { registerTemplateTools } from "./templates.js";

export function registerTools(server: McpServer) {
  // Client management
  registerClientTools(server);
  registerContactTools(server);

  // Project management
  registerProjectTools(server);
  registerTaskTools(server);
  registerDeliverableTools(server);

  // Financial
  registerInvoiceTools(server);
  registerExpenseTools(server);
  registerTimeEntryTools(server);

  // Sales pipeline
  registerOpportunityTools(server);

  // Support
  registerTicketTools(server);

  // Utilities
  registerFormTools(server);
  registerFileTools(server);
  registerCalendarTools(server);
  registerTemplateTools(server);
}
