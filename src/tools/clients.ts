import { z } from "zod";
import { apiTool, updateTools, type ToolArgs } from "./api-tool.js";

export const clientTools = [
  apiTool("list_clients", "GET /public/action/clients/list", "List all clients in your Moxie workspace"),
  apiTool("search_clients", "GET /public/action/clients/search", "Search active clients by name/contact information, or retrieve an exact id. The id takes precedence over query."),
  apiTool("create_client", "POST /public/action/clients/create", "Create a client with billing, contacts, and custom fields. Only name is required.", {
    partial: true,
    omit: ["id", "accountId", "created", "activityInitialized", "customValue"],
    fields: {
      name: z.string().min(1).describe("Client/company name"),
      email: z.string().optional().describe("Billing email (supported by the handwritten API reference)"),
      paymentDays: z.number().int().optional().describe("Alias for paymentTerms.paymentDays"),
      whoPaysCardFees: z.enum(["Client", "Freelancer", "Split"]).optional().describe("Alias for paymentTerms.whoPaysCardFees"),
      latePaymentFee: z.number().optional().describe("Alias for paymentTerms.latePaymentFee"),
    },
    transform: args => {
      const { paymentDays, whoPaysCardFees, latePaymentFee, ...body } = args;
      if ([paymentDays, whoPaysCardFees, latePaymentFee].some(value => value !== undefined)) {
        const terms: ToolArgs = { ...(body.paymentTerms as ToolArgs || {}) };
        for (const [key, value] of Object.entries({ paymentDays, whoPaysCardFees, latePaymentFee })) {
          if (value !== undefined) {
            if (terms[key] !== undefined && terms[key] !== value) throw new Error("Conflicting paymentTerms and flattened billing fields");
            terms[key] = value;
          }
        }
        body.paymentTerms = terms;
      }
      return body;
    },
  }),
  ...updateTools("client"),
];
