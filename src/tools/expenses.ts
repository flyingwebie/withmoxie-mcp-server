import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type { Expense, CreateExpenseInput } from "../types/moxie.js";

export function registerExpenseTools(server: McpServer) {
  server.tool(
    "create_expense",
    "Create a new expense record in Moxie",
    {
      description: z.string().describe("Description of the expense"),
      amount: z.number().describe("Expense amount"),
      date: z.string().describe("Expense date (YYYY-MM-DD format)"),
      vendorName: z.string().optional().describe("Vendor/merchant name"),
      clientName: z.string().optional().describe("Client to associate this expense with"),
      projectName: z.string().optional().describe("Project to associate this expense with"),
      category: z.string().optional().describe("Expense category"),
      billable: z.boolean().optional().describe("Whether the expense is billable to client"),
      reimbursable: z.boolean().optional().describe("Whether the expense is reimbursable"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateExpenseInput = {
          description: params.description,
          amount: params.amount,
          date: params.date,
          vendorName: params.vendorName,
          clientName: params.clientName,
          projectName: params.projectName,
          category: params.category,
          billable: params.billable,
          reimbursable: params.reimbursable,
        };

        const result = await client.post<Expense>("/action/expenses/create", createInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully created expense: ${result.description}\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to create expense: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
