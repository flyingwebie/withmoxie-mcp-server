import { z } from "zod";
import { apiTool, renameFields, updateTools } from "./api-tool.js";

export const contactTools = [
  apiTool("search_contacts", "GET /public/action/contacts/search", "Search active contacts by email, first name, or last name. Omit query to list all; id takes precedence."),
  apiTool("create_contact", "POST /public/action/contacts/create", "Create a contact attached to a client by exact name. The API uses first and last for names.", {
    fields: {
      clientName: z.string().min(1).describe("Exact name of the client"),
      firstName: z.string().optional().describe("Alias for first"),
      lastName: z.string().optional().describe("Alias for last"),
    },
    transform: args => renameFields(args, { firstName: "first", lastName: "last" }),
  }),
  ...updateTools("contact"),
];
