import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type { Client, CreateClientInput } from "../types/moxie.js";

export function registerClientTools(server: McpServer) {
  server.tool(
    "list_clients",
    "List all clients in your Moxie workspace",
    {},
    async () => {
      try {
        const client = getMoxieClient();
        const clients = await client.get<Client[]>("/action/clients/list");
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(clients, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to list clients: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "search_clients",
    "Search for clients by name or contact information",
    {
      query: z.string().describe("Search query to find clients by name or contact info"),
    },
    async ({ query }) => {
      try {
        const client = getMoxieClient();
        const clients = await client.get<Client[]>("/action/clients/search", { query });
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(clients, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to search clients: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "create_client",
    "Create a new client in Moxie CRM",
    {
      name: z.string().describe("Business name of the client"),
      clientType: z.enum(["Client", "Prospect"]).describe("Type of client record"),
      currency: z.string().describe("ISO 4217 currency code (e.g., USD, EUR, GBP)"),
      initials: z.string().optional().describe("3-4 character initials for avatar and invoice sequences"),
      address1: z.string().optional().describe("Street address line 1"),
      address2: z.string().optional().describe("Street address line 2"),
      city: z.string().optional().describe("City"),
      locality: z.string().optional().describe("State/Province/Region"),
      postal: z.string().optional().describe("Postal/ZIP code"),
      country: z.string().optional().describe("Country"),
      website: z.string().optional().describe("Website URL"),
      phone: z.string().optional().describe("Phone number"),
      color: z.string().optional().describe("Client color designation"),
      taxId: z.string().optional().describe("Tax identification number"),
      leadSource: z.string().optional().describe("Lead source tracking"),
      hourlyAmount: z.number().optional().describe("Default hourly rate"),
      notes: z.string().optional().describe("General notes about the client"),
      paymentDays: z.number().optional().describe("Payment terms in days"),
      whoPaysCardFees: z.enum(["Client", "Freelancer", "Split"]).optional().describe("Who pays Stripe credit card fees"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateClientInput = {
          name: params.name,
          clientType: params.clientType,
          currency: params.currency,
          initials: params.initials,
          address1: params.address1,
          address2: params.address2,
          city: params.city,
          locality: params.locality,
          postal: params.postal,
          country: params.country,
          website: params.website,
          phone: params.phone,
          color: params.color,
          taxId: params.taxId,
          leadSource: params.leadSource,
          hourlyAmount: params.hourlyAmount,
          notes: params.notes,
        };

        if (params.paymentDays || params.whoPaysCardFees) {
          createInput.paymentTerms = {
            paymentDays: params.paymentDays,
            whoPaysCardFees: params.whoPaysCardFees,
          };
        }

        const result = await client.post<Client>("/action/clients/create", createInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully created client: ${result.name}\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to create client: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
