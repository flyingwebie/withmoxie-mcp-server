import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getMoxieClient } from "../client/moxie-client.js";
import type { AttachFileFromUrlInput } from "../types/moxie.js";

export function registerFileTools(server: McpServer) {
  server.tool(
    "attach_file_from_url",
    "Attach a file to a Moxie record by providing a URL. The file will be downloaded and attached.",
    {
      url: z.string().describe("URL of the file to attach"),
      fileName: z.string().optional().describe("Name to give the attached file"),
      clientName: z.string().optional().describe("Client to attach the file to"),
      projectName: z.string().optional().describe("Project to attach the file to"),
      entityType: z.string().optional().describe("Type of entity to attach to (e.g., 'client', 'project', 'invoice')"),
      entityId: z.string().optional().describe("ID of the specific entity to attach to"),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const attachInput: AttachFileFromUrlInput = {
          url: params.url,
          fileName: params.fileName,
          clientName: params.clientName,
          projectName: params.projectName,
          entityType: params.entityType,
          entityId: params.entityId,
        };

        const result = await client.post<Record<string, unknown>>("/action/files/attachFromUrl", attachInput);
        return {
          content: [
            {
              type: "text",
              text: `Successfully attached file from URL\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [{ type: "text", text: `Failed to attach file: ${message}` }],
          isError: true,
        };
      }
    }
  );
}
