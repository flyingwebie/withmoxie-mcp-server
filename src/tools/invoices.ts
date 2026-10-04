import { z } from "zod";
import { apiTool, renameFields, type ToolArgs } from "./api-tool.js";

function mergeSendTo(args: ToolArgs): ToolArgs {
  const { sendInvoice, sendToContacts, emailTemplateName, ...body } = args;
  if ([sendInvoice, sendToContacts, emailTemplateName].some(value => value !== undefined)) {
    const sendTo: ToolArgs = { ...(body.sendTo as ToolArgs || {}) };
    for (const [key, value] of Object.entries({ send: sendInvoice, contacts: sendToContacts, emailTemplateName })) {
      if (value !== undefined) {
        if (sendTo[key] !== undefined && JSON.stringify(sendTo[key]) !== JSON.stringify(value)) throw new Error("Conflicting sendTo and flattened send fields");
        sendTo[key] = value;
      }
    }
    body.sendTo = sendTo;
  }
  return body;
}
const sendAliases = {
  sendInvoice: z.boolean().optional().describe("Alias for sendTo.send"),
  sendToContacts: z.array(z.string()).optional().describe("Alias for sendTo.contacts"),
  emailTemplateName: z.string().optional().describe("Alias for sendTo.emailTemplateName"),
};

export const invoiceTools = [
  apiTool("search_payable_invoices", "GET /public/action/payableInvoices/search", "List outstanding invoices. query is an exact client name, not free text; id takes precedence. Includes tax rules, tax breakdown, payments, and line items."),
  apiTool("create_invoice", "POST /public/action/invoices/create", "Create an invoice for a client by exact name. taxRate and discountPercent are percentages (27 means 27%). sendTo.send sends it; otherwise it stays a draft.", {
    fields: sendAliases,
    transform: mergeSendTo,
  }),
  apiTool("create_simple_invoice", "POST /public/action/invoices/create", "Create an invoice using the documented clientId/amount shape instead of named client and line items.", {
    omit: ["clientName", "invoiceNumber", "templateName", "dueDate", "taxRate", "discountPercent", "paymentInstructions", "items"],
    fields: {
      clientId: z.string().min(1), amount: z.number().finite(),
      dateDue: z.string().optional().describe("Due date (YYYY-MM-DD)"),
      notes: z.string().optional(), ...sendAliases,
    },
    transform: mergeSendTo,
  }),
  apiTool("apply_payment", "POST /public/action/payment/create", "Apply a payment matched by formatted invoiceNumber and exact clientName. Returns the updated invoice.", {
    fields: {
      paymentDate: z.string().optional().describe("Alias for date"),
      paymentMethod: z.string().optional().describe("Alias for paymentType; labels such as bank transfer are normalized"),
      notes: z.string().optional().describe("Alias for memo"),
    },
    transform: args => {
      const body = renameFields(args, { paymentDate: "date", notes: "memo" });
      if (body.paymentMethod !== undefined) {
        const normalized = String(body.paymentMethod).toUpperCase().replace(/[ -]+/g, "_");
        const allowed = ["STRIPE", "CHECK", "BANK_TRANSFER", "CASH", "VENMO", "PAYPAL", "ZELLE", "APP_PAYOUT", "CREDIT_CARD", "OTHER"];
        if (!allowed.includes(normalized)) throw new Error("paymentMethod must be a documented payment type");
        if (body.paymentType !== undefined && body.paymentType !== normalized) throw new Error("Conflicting payment types");
        body.paymentType = normalized;
      }
      delete body.paymentMethod;
      return body;
    },
  }),
];
