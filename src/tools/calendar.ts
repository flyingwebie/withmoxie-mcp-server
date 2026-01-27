import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type {
  CalendarEvent,
  CreateCalendarEventInput,
  UpdateCalendarEventInput,
  DeleteCalendarEventInput,
} from "../types/moxie.js";

export function registerCalendarTools(server: McpServer) {
  server.tool(
    "create_calendar_event",
    "Create a new calendar event",
    {
      title: z.string().describe("Title of the event"),
      startTime: z.string().describe("Start time in ISO-8601 format"),
      endTime: z.string().describe("End time in ISO-8601 format"),
      description: z.string().optional().describe("Event description"),
      location: z.string().optional().describe("Event location"),
      clientName: z.string().optional().describe("Client associated with this event"),
      projectName: z.string().optional().describe("Project associated with this event"),
      attendees: z.array(z.string()).optional().describe("List of attendee email addresses"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateCalendarEventInput = {
          title: params.title,
          startTime: params.startTime,
          endTime: params.endTime,
          description: params.description,
          location: params.location,
          clientName: params.clientName,
          projectName: params.projectName,
          attendees: params.attendees,
        };

        const result = await client.post<CalendarEvent>("/action/calendar/create", createInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully created calendar event: ${result.title}\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to create calendar event: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "update_calendar_event",
    "Update an existing calendar event",
    {
      eventId: z.string().describe("ID of the event to update"),
      title: z.string().optional().describe("New title for the event"),
      startTime: z.string().optional().describe("New start time in ISO-8601 format"),
      endTime: z.string().optional().describe("New end time in ISO-8601 format"),
      description: z.string().optional().describe("New event description"),
      location: z.string().optional().describe("New event location"),
      clientName: z.string().optional().describe("Client associated with this event"),
      projectName: z.string().optional().describe("Project associated with this event"),
      attendees: z.array(z.string()).optional().describe("Updated list of attendee email addresses"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const updateInput: UpdateCalendarEventInput = {
          eventId: params.eventId,
          title: params.title,
          startTime: params.startTime,
          endTime: params.endTime,
          description: params.description,
          location: params.location,
          clientName: params.clientName,
          projectName: params.projectName,
          attendees: params.attendees,
        };

        const result = await client.post<CalendarEvent>("/action/calendar/update", updateInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully updated calendar event\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to update calendar event: ${message}` }],
          isError: true,
        };
      }
    }
  );

  server.tool(
    "delete_calendar_event",
    "Delete a calendar event",
    {
      eventId: z.string().describe("ID of the event to delete"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const deleteInput: DeleteCalendarEventInput = {
          eventId: params.eventId,
        };

        await client.delete<void>(`/action/calendar/delete?eventId=${params.eventId}`);
        return {
          content: [
            {
              type: "text",
              text: `Successfully deleted calendar event ${params.eventId}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to delete calendar event: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
