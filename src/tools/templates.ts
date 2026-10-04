import { apiTool } from "./api-tool.js";

export const templateTools = [
  apiTool("list_email_templates", "GET /public/action/emailTemplates/list", "List email template names (an array of strings)."),
  apiTool("list_email_template_details", "GET /public/action/emailTemplates", "List email template ids and names, for use with get_email_template."),
  apiTool("get_email_template", "GET /public/action/emailTemplates/{templateId}", "Get an email template's subject and HTML content by templateId."),
  apiTool("list_invoice_templates", "GET /public/action/invoiceTemplates/list", "List invoice template names (an array of strings)."),
  apiTool("list_vendor_names", "GET /public/action/vendors/list", "List vendor names (an array of strings)."),
  apiTool("list_workspace_users", "GET /public/action/users/list", "List users in the API key's workspace."),
];
