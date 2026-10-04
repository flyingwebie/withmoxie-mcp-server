import { createServer as createHttpServer } from "node:http";
import { once } from "node:events";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { createServer } from "../build/server.js";

export async function httpMock() {
  const requests = [];
  let reply = { status: 200, body: { ok: true }, headers: { "Content-Type": "application/json" } };
  const server = createHttpServer(async (req, res) => {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const url = new URL(req.url, "http://localhost");
    const rawBody = Buffer.concat(chunks);
    requests.push({ method: req.method, path: url.pathname, query: Object.fromEntries(url.searchParams), headers: req.headers, rawBody });
    res.writeHead(reply.status, reply.headers);
    res.end(typeof reply.body === "string" ? reply.body : JSON.stringify(reply.body));
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  return {
    url: "http://127.0.0.1:" + server.address().port,
    requests,
    reply(value) { reply = { ...reply, ...value }; },
    async close() { server.close(); server.closeAllConnections(); await once(server, "close"); },
  };
}

export async function mcpHarness(baseUrl) {
  const server = createServer({ apiKey: "test-api-key", baseUrl });
  const client = new Client({ name: "moxie-contract-tests", version: "1.0.0" });
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  await server.connect(serverTransport);
  await client.connect(clientTransport);
  return {
    client,
    async close() { await client.close(); await server.close(); },
  };
}
