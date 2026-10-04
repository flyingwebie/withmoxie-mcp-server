import { z } from "zod";
import { apiTool } from "./api-tool.js";

export const webhookTools = [
  apiTool("subscribe_webhook", "POST /public/api/subscribe", "Register a RestHook subscription by event type and hookUrl, with optional filters."),
  apiTool("unsubscribe_webhook", "POST /public/api/unsubscribe", "Remove a RestHook subscription using its type, hookUrl, and optional id."),
  apiTool("get_webhook_sample", "POST /public/api/sample", "Get sample payloads for a RestHook event type.", { readOnly: true }),
  apiTool("preview_email_unsubscribe", "GET /public/unsubscribe", "Get the email unsubscribe confirmation page for a token.", {
    fields: { token: z.string().min(1) },
  }),
  apiTool("unsubscribe_email", "POST /public/unsubscribe", "Submit an email unsubscribe token as application/x-www-form-urlencoded.", {
    fields: { token: z.string().min(1) },
  }),
];
