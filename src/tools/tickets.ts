import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type {
  Ticket,
  CreateTicketInput,
  TicketComment,
  CreateTicketCommentInput,
} from "../types/moxie.js";

export function registerTicketTools(server: McpServer) {
  server.tool(
    "create_ticket",
    "Create a new support ticket in your workspace",
    {
      userEmail: z
        .string()
        .describe(
          "Required - Email of a known contact in your workspace. The ticket will be rejected if the email is not found"
        ),
      ticketType: z
        .string()
        .describe(
          "Required - The string value of the ticket type which can be found in Tickets >> Settings"
        ),
      comment: z.string().describe("Required - The initial details/comment of the ticket"),
      subject: z.string().optional().describe("The ticket subject/title"),
      dueDate: z.string().optional().describe("Due date in ISO format (YYYY-MM-DD)"),
      formData: z
        .object({
          answers: z.array(
            z.object({
              fieldKey: z.string().describe("Property key for reporting and token mapping"),
              question: z.string().describe("The question text associated with this answer"),
              answer: z.string().describe("The answer provided"),
            })
          ),
        })
        .optional()
        .describe("Additional structured questions/answers that can be mapped to ticket data"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateTicketInput = {
          userEmail: params.userEmail,
          ticketType: params.ticketType,
          comment: params.comment,
          subject: params.subject,
          dueDate: params.dueDate,
          formData: params.formData,
        };

        const result = await client.post<Ticket>("/action/tickets/create", createInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully created ticket${result.subject ? `: ${result.subject}` : ""}\n\n${JSON.stringify(result, null, 2)}`,
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

        const result = await client.post<TicketComment>(
          "/action/tickets/comment/create",
          createInput
        );
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
