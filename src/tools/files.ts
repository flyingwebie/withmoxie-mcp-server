import { readFile } from "node:fs/promises";
import { basename } from "node:path";
import { z } from "zod";
import { apiTool, renameFields } from "./api-tool.js";

const attachmentType = z.enum(["CLIENT", "PROJECT", "DELIVERABLE", "OPPORTUNITY", "EXPENSE", "TICKET"]);
export const fileTools = [
  apiTool("attach_file", "POST /public/action/attachments/create", "Upload a local file as multipart/form-data and attach it to a record by id and type.", {
    omit: ["file"],
    fields: {
      filePath: z.string().min(1).describe("Local path to the file to upload"),
      fileName: z.string().min(1).optional().describe("Stored filename; defaults to the local filename"),
      contentType: z.string().optional().describe("MIME type, such as application/pdf"),
    },
    encoding: "multipart",
    bodyField: "upload",
    transform: async args => {
      const bytes = await readFile(String(args.filePath));
      const form = new FormData();
      form.append("file", new Blob([new Uint8Array(bytes)], { type: String(args.contentType || "application/octet-stream") }), String(args.fileName || basename(String(args.filePath))));
      return { id: args.id, type: args.type, upload: form };
    },
  }),
  apiTool("attach_file_from_url", "POST /public/action/attachments/createFromUrl", "Fetch a publicly reachable fileUrl and attach it by id, type, and required fileName. All fields are query parameters.", {
    fields: {
      id: z.string().min(1).optional(), type: attachmentType.optional(), fileUrl: z.string().url().optional(),
      entityId: z.string().min(1).optional().describe("Alias for id"),
      entityType: z.string().optional().describe("Alias for type; uppercase/lowercase accepted"),
      url: z.string().url().optional().describe("Alias for fileUrl"),
    },
    transform: args => {
      const normalized = { ...args };
      if (typeof normalized.entityType === "string") normalized.entityType = normalized.entityType.toUpperCase();
      const result = renameFields(normalized, { entityId: "id", entityType: "type", url: "fileUrl" });
      if (typeof result.fileUrl !== "string" || !/^https?:\/\//i.test(result.fileUrl)) throw new Error("fileUrl must be an HTTP(S) URL");
      return result;
    },
  }),
];
