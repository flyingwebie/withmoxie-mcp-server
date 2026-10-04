import { z } from "zod";
import { apiTool } from "./api-tool.js";

export const ticketTools = [
  apiTool("list_tickets", "GET /public/action/tickets/list", "List tickets filtered by open state, archived (defaults to false), and clientId."),
  apiTool("search_tickets", "GET /public/action/tickets/search", "Search tickets by query, exact id, or ticketNumber."),
  apiTool("update_ticket_status", "PATCH /public/action/tickets/status", "Change a ticket's workflow status by id or ticketNumber. The id takes precedence; status must be configured for the ticket type.", {
    fields: { id: z.string().min(1).optional(), status: z.string().min(1) },
    refine: args => args.id !== undefined || args.ticketNumber !== undefined,
    refinementMessage: "Supply id or ticketNumber to change a ticket's status",
  }),
  apiTool("create_ticket", "POST /public/action/tickets/create", "Create a ticket for a known contact email and configured ticket type. Returns a ticket and comments wrapper.", {
    required: ["userEmail", "ticketType", "comment"],
  }),
  apiTool("create_ticket_comment", "POST /public/action/tickets/comments/create", "Add a comment by ticketNumber with userEmail and optional privateComment. Returns the updated ticket and comments wrapper."),
];
