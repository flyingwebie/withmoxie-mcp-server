import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerTools } from "./tools/index.js";

export function createServer() {
  const server = new McpServer({
    name: "withmoxie-mcp-server",
    version: "1.0.0",
  });

  registerTools(server);

  return server;
}
