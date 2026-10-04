import { apiTool } from "./api-tool.js";

export const agreementTools = [
  apiTool("search_agreements", "GET /public/action/agreements/search", "List agreements, optionally filtered by clientId or exact id. The id takes precedence. Agreements are read-only."),
];
