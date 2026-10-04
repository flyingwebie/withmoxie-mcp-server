import { apiTool } from "./api-tool.js";

export const formTools = [
  apiTool("list_form_names", "GET /public/action/formNames/list", "List available form names (an array of strings)."),
  apiTool("create_form_submission", "POST /public/action/formSubmissions/create", "Submit a form by required formName with lead details, taxId, answers, and optional pipelineStageName."),
];
