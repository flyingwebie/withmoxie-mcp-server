import { apiTool } from "./api-tool.js";

export const workspaceTools = [
  apiTool("get_account_info", "GET /public/action/account/{accountId}", "Get supplier/workspace identity, address, tax, and billing information. accountId must match the API key's workspace."),
  apiTool("get_custom_fields", "GET /public/api/customFields", "Get custom field keys and labels for the requested entity type."),
  apiTool("validate_auth", "GET /public/api/auth", "Validate the API key and return the workspace's accountId and accountName."),
];
