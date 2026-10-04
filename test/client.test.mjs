import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { MoxieClient } from "../build/client/moxie-client.js";
import { httpMock } from "./helpers.mjs";

let mock;
before(async () => { mock = await httpMock(); });
after(async () => { await mock?.close(); });

test("host URLs, legacy pod URLs, trailing slashes, and action prefixes produce correct paths", async () => {
  for (const [suffix, expected] of [
    ["", "/public/action/clients/list"],
    ["/", "/public/action/clients/list"],
    ["/public", "/public/action/clients/list"],
    ["/public/", "/public/action/clients/list"],
    ["/public/action", "/public/action/clients/list"],
    ["/api", "/api/public/action/clients/list"],
    ["/api/public", "/api/public/action/clients/list"],
    ["/api/public/", "/api/public/action/clients/list"],
    ["/api/public/action/", "/api/public/action/clients/list"],
    ["/zapier", "/zapier/action/clients/list"],
    ["/zapier/action", "/zapier/action/clients/list"],
    ["/api/zapier/action/", "/api/zapier/action/clients/list"],
  ]) {
    const client = new MoxieClient({ apiKey: "test-api-key", baseUrl: mock.url + suffix });
    await client.get("/public/action/clients/list");
    assert.equal(mock.requests.at(-1).path, expected, suffix);
    assert.equal(mock.requests.at(-1).headers["x-api-key"], "test-api-key");
    // Existing users calling /action paths get the same normalized route.
    await client.get("/action/clients/list");
    assert.equal(mock.requests.at(-1).path, expected, suffix);
  }
});

test("API and email endpoints are resolved outside /action, including configured Zapier aliases", async () => {
  for (const [suffix, prefix] of [["/public/action", ""], ["/api/public", "/api"], ["/api/zapier", "/api"]]) {
    const client = new MoxieClient({ apiKey: "test-api-key", baseUrl: mock.url + suffix });
    await client.get("/public/api/auth");
    assert.equal(mock.requests.at(-1).path, prefix + "/public/api/auth");
    await client.get("/public/unsubscribe", { token: "a+b &c=?" });
    assert.equal(mock.requests.at(-1).path, prefix + "/public/unsubscribe");
    assert.deepEqual(mock.requests.at(-1).query, { token: "a+b &c=?" });
  }
});

test("HTTP helper methods preserve JSON values and properly serialize query parameters", async () => {
  const client = new MoxieClient({ apiKey: "test-api-key", baseUrl: mock.url });
  await client.post("/public/action/clients/create", { name: "Acme", archive: false });
  assert.equal(mock.requests.at(-1).method, "POST");
  assert.deepEqual(JSON.parse(mock.requests.at(-1).rawBody), { name: "Acme", archive: false });
  await client.patch("/public/action/clients/update", { id: "a", notes: null, defaultTaxRate: 0 });
  assert.equal(mock.requests.at(-1).method, "PATCH");
  assert.deepEqual(JSON.parse(mock.requests.at(-1).rawBody), { id: "a", notes: null, defaultTaxRate: 0 });
  await client.put("/public/action/clients/update", { id: "a", name: "Acme" });
  assert.equal(mock.requests.at(-1).method, "PUT");
  await client.delete("/public/action/calendar/a", { optional: undefined, archived: false, number: 0 });
  assert.equal(mock.requests.at(-1).method, "DELETE");
  assert.deepEqual(mock.requests.at(-1).query, { archived: "false", number: "0" });
});

test("invalid configuration and non-Moxie paths fail locally", async () => {
  assert.throws(() => new MoxieClient({ apiKey: "" }), /MOXIE_API_KEY/);
  assert.throws(() => new MoxieClient({ apiKey: "  " }), /MOXIE_API_KEY/);
  for (const baseUrl of ["not-a-url", "file:///tmp", "https://user:pass@example.com", "https://example.com?token=key", "https://example.com#fragment"]) {
    assert.throws(() => new MoxieClient({ apiKey: "test-api-key", baseUrl }));
  }
  assert.doesNotThrow(() => new MoxieClient({ apiKey: "test-api-key" }));
  const client = new MoxieClient({ apiKey: "test-api-key", baseUrl: mock.url });
  const before = mock.requests.length;
  await assert.rejects(client.get("https://another-host.example"), /Unsupported Moxie API path/);
  assert.equal(mock.requests.length, before);
});

test("connection failures produce a readable error without exposing the API key", async () => {
  const closed = await httpMock();
  const client = new MoxieClient({ apiKey: "do-not-disclose", baseUrl: closed.url });
  await closed.close();
  await assert.rejects(client.get("/public/api/auth"), error => /Network error/.test(error.message) && !error.message.includes("do-not-disclose"));
});
