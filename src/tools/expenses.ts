import { z } from "zod";
import { apiTool, renameFields, updateTools } from "./api-tool.js";

export const expenseTools = [
  apiTool("create_expense", "POST /public/action/expenses/create", "Record an expense with currency, payment state, markup, vendor, and optional client billing.", {
    fields: {
      vendorName: z.string().optional().describe("Alias for vendor"),
      billable: z.boolean().optional().describe("Alias for reimbursable"),
    },
    transform: args => renameFields(args, { vendorName: "vendor", billable: "reimbursable" }),
  }),
  ...updateTools("expense"),
];
