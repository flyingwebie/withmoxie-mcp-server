import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type { Invoice, CreateInvoiceInput, ApplyPaymentInput } from "../types/moxie.js";

export function registerInvoiceTools(server: McpServer) {
  server.tool(
    "search_payable_invoices",
    "Search for payable invoices in your Moxie workspace",
    {
      query: z.string().optional().describe("Search query to filter invoices"),
    },
    async ({ query }) => {
      try {
        const client = getMoxieClient();
        const params = query ? { query } : undefined;
        const invoices = await client.get<Invoice[]>("/action/payableInvoices/search", params);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(invoices, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to search invoices: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "create_invoice",
    "Create a new invoice in Moxie CRM. If sendTo is not provided, the invoice will be created as a draft.",
    {
      clientName: z.string().describe("Exact name of the client (must match existing client record)"),
      invoiceNumber: z.string().optional().describe("Invoice number/identifier"),
      templateName: z.string().optional().describe("Invoice template name (must match existing template)"),
      dueDate: z.string().optional().describe("Payment due date (YYYY-MM-DD format)"),
      taxRate: z.number().optional().describe("Tax rate as decimal (e.g., 0.08 for 8%)"),
      discountPercent: z.number().optional().describe("Discount percentage as decimal"),
      paymentInstructions: z.string().optional().describe("Payment instructions text"),
      items: z
        .array(
          z.object({
            description: z.string().optional().describe("Line item description"),
            quantity: z.number().optional().describe("Quantity"),
            rate: z.number().optional().describe("Unit rate/price"),
            taxable: z.boolean().optional().describe("Whether this item is taxable"),
            projectName: z.string().optional().describe("Project name to associate this line item with"),
          })
        )
        .describe("Array of invoice line items"),
      sendInvoice: z.boolean().optional().describe("Set to true to send the invoice immediately upon creation"),
      sendToContacts: z.array(z.string()).optional().describe("Email addresses to send the invoice to"),
      emailTemplateName: z.string().optional().describe("Email template name for sending the invoice"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateInvoiceInput = {
          clientName: params.clientName,
          invoiceNumber: params.invoiceNumber,
          templateName: params.templateName,
          dueDate: params.dueDate,
          taxRate: params.taxRate,
          discountPercent: params.discountPercent,
          paymentInstructions: params.paymentInstructions,
          items: params.items,
        };

        if (params.sendInvoice || params.sendToContacts || params.emailTemplateName) {
          createInput.sendTo = {
            send: params.sendInvoice,
            contacts: params.sendToContacts,
            emailTemplateName: params.emailTemplateName,
          };
        }

        const result = await client.post<Invoice>("/action/invoices/create", createInput);
        const status = params.sendInvoice ? "sent" : "created as draft";
        return {
          content: [
            {
              type: "text",
              text: `Successfully ${status} invoice for ${params.clientName}\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to create invoice: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "apply_payment",
    "Apply a payment to an existing invoice",
    {
      invoiceId: z.string().describe("ID of the invoice to apply payment to"),
      amount: z.number().describe("Payment amount"),
      paymentDate: z.string().optional().describe("Date of payment (YYYY-MM-DD format)"),
      paymentMethod: z.string().optional().describe("Payment method (e.g., 'check', 'cash', 'bank transfer')"),
      notes: z.string().optional().describe("Notes about the payment"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const paymentInput: ApplyPaymentInput = {
          invoiceId: params.invoiceId,
          amount: params.amount,
          paymentDate: params.paymentDate,
          paymentMethod: params.paymentMethod,
          notes: params.notes,
        };

        const result = await client.post<Invoice>("/action/invoices/applyPayment", paymentInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully applied payment of ${params.amount} to invoice\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to apply payment: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
