import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

test("compiled CLI initializes and lists all tools over stdio without credentials or stdout pollution", { timeout: 10_000 }, async () => {
  const client = new Client({ name: "moxie-stdio-test", version: "1.0.0" });
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [fileURLToPath(new URL("../build/index.js", import.meta.url))],
    env: { ...process.env, MOXIE_API_KEY: "", MOXIE_BASE_URL: "" },
    stderr: "pipe",
  });
  try {
    await client.connect(transport);
    const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
    assert.equal(client.getServerVersion().version, pkg.version);
    assert.equal((await client.listTools()).tools.length, 60);
    const result = await client.callTool({ name: "list_clients", arguments: {} });
    assert.equal(result.isError, true);
    assert.match(result.content[0].text, /MOXIE_API_KEY environment variable is required/);
  } finally { await client.close(); }
});
