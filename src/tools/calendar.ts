import { z } from "zod";
import { apiTool, renameFields } from "./api-tool.js";

const fields = { title: z.string().optional().describe("Alias for summary") };
const transform = (args: Record<string, unknown>) => renameFields(args, { title: "summary" });

export const calendarTools = [
  apiTool("create_calendar_event", "POST /public/action/calendar/createOrUpdate", "Create a calendar event with summary, times, timezone, userEmail, fullDay, and busy.", {
    fields, omit: ["eventId"], transform,
  }),
  apiTool("update_calendar_event", "POST /public/action/calendar/createOrUpdate", "Update an existing calendar event by eventId using the same fields as creation.", {
    fields: { ...fields, eventId: z.string().min(1) }, transform,
  }),
  apiTool("create_or_update_calendar_event", "POST /public/action/calendar/createOrUpdate", "Create a calendar event, or update it when eventId is supplied.", {
    fields, transform,
  }),
  apiTool("delete_calendar_event", "DELETE /public/action/calendar/{id}", "Delete a calendar event by id (eventId is also accepted).", {
    fields: { id: z.string().min(1).optional(), eventId: z.string().min(1).optional().describe("Alias for id") },
    transform: args => renameFields(args, { eventId: "id" }),
  }),
];
