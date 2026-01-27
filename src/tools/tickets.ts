import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type { Ticket, CreateTicketInput, TicketComment, CreateTicketCommentInput } from "../types/moxie.js";

export function registerTicketTools(server: McpServer) {
  server.tool(
    "create_ticket",
    "Create a new support ticket",
    {
      subject: z.string().describe("Subject/title of the ticket"),
      description: z.string().optional().describe("Detailed description of the issue"),
      clientName: z.string().optional().describe("Client associated with this ticket"),
      projectName: z.string().optional().describe("Project associated with this ticket"),
      status: z.string().optional().describe("Ticket status"),
      priority: z.string().optional().describe("Ticket priority level"),
      assignedTo: z.string().optional().describe("Email of the user to assign this ticket to"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateTicketInput = {
          subject: params.subject,
          description: params.description,
          clientName: params.clientName,
          projectName: params.projectName,
          status: params.status,
          priority: params.priority,
          assignedTo: params.assignedTo,
        };

        const result = await client.post<Ticket>("/action/tickets/create", createInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully created ticket: ${result.subject}\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to create ticket: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "create_ticket_comment",
    "Add a comment to an existing ticket",
    {
      ticketId: z.string().describe("ID of the ticket to comment on"),
      content: z.string().describe("Comment content/text"),
      authorEmail: z.string().optional().describe("Email of the comment author"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateTicketCommentInput = {
          ticketId: params.ticketId,
          content: params.content,
          authorEmail: params.authorEmail,
        };

        const result = await client.post<TicketComment>("/action/tickets/comment/create", createInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully added comment to ticket\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to create ticket comment: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
