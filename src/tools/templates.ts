import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getMoxieClient } from "../client/moxie-client.js";
import type { EmailTemplate, InvoiceTemplate, VendorName, WorkspaceUser } from "../types/moxie.js";

export function registerTemplateTools(server: McpServer) {
  server.tool(
    "list_email_templates",
    "List all email templates in your workspace",
    {},
    async () => {
      try {
        const client = getMoxieClient();
        const templates = await client.get<EmailTemplate[]>("/action/emailTemplates/list");
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(templates, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to list email templates: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "list_invoice_templates",
    "List all invoice templates in your workspace",
    {},
    async () => {
      try {
        const client = getMoxieClient();
        const templates = await client.get<InvoiceTemplate[]>("/action/invoiceTemplates/list");
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(templates, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to list invoice templates: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "list_vendor_names",
    "List all vendor names for expense tracking",
    {},
    async () => {
      try {
        const client = getMoxieClient();
        const vendors = await client.get<VendorName[]>("/action/vendors/list");
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(vendors, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to list vendor names: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "list_workspace_users",
    "List all users in your Moxie workspace",
    {},
    async () => {
      try {
        const client = getMoxieClient();
        const users = await client.get<WorkspaceUser[]>("/action/users/list");
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(users, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to list workspace users: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
