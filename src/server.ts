import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerTools } from "./tools/index.js";
import { MoxieClient, type MoxieConfig } from "./client/moxie-client.js";

export function createServer(config?: MoxieConfig) {
  const server = new McpServer({
    name: "withmoxie-mcp-server",
    version: "2.0.0",
  });

  registerTools(server, config ? new MoxieClient(config) : undefined);

  return server;
}
