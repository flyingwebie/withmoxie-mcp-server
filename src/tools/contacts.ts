import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type { Contact, CreateContactInput } from "../types/moxie.js";

export function registerContactTools(server: McpServer) {
  server.tool(
    "search_contacts",
    "Search for contacts in your Moxie workspace",
    {
      query: z.string().describe("Search query to find contacts by name, email, or phone"),
    },
    async ({ query }) => {
      try {
        const client = getMoxieClient();
        const contacts = await client.get<Contact[]>("/action/contacts/search", { query });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(contacts, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to search contacts: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "create_contact",
    "Create a new contact associated with a client",
    {
      clientName: z.string().describe("Exact name of the client to associate this contact with"),
      firstName: z.string().optional().describe("Contact's first name"),
      lastName: z.string().optional().describe("Contact's last name"),
      role: z.string().optional().describe("Contact's role/title"),
      phone: z.string().optional().describe("Phone number"),
      email: z.string().optional().describe("Email address"),
      mobile: z.string().optional().describe("Mobile phone number"),
      notes: z.string().optional().describe("Notes about the contact"),
      defaultContact: z.boolean().optional().describe("Set as default contact (receives all notifications)"),
      invoiceContact: z.boolean().optional().describe("Set as invoice contact (receives invoice notifications)"),
      portalAccess: z.boolean().optional().describe("Grant client portal access"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateContactInput = {
          clientName: params.clientName,
          firstName: params.firstName,
          lastName: params.lastName,
          role: params.role,
          phone: params.phone,
          email: params.email,
          mobile: params.mobile,
          notes: params.notes,
          defaultContact: params.defaultContact,
          invoiceContact: params.invoiceContact,
          portalAccess: params.portalAccess,
        };

        const result = await client.post<Contact>("/action/contacts/create", createInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully created contact: ${result.firstName || ""} ${result.lastName || ""}\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to create contact: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
