import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { readFile, mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import YAML from "yaml";
import { toolDefinitions } from "../build/tools/index.js";
import { httpMock, mcpHarness } from "./helpers.mjs";
import { routeFixtures } from "./route-fixtures.mjs";

let mock, harness, directory, filePath;
before(async () => {
  mock = await httpMock();
  harness = await mcpHarness(mock.url);
  directory = await mkdtemp(join(tmpdir(), "moxie-contract-"));
  filePath = join(directory, "local-file.pdf");
  await writeFile(filePath, Buffer.from("%PDF-test\n\x00binary-content"));
});
after(async () => {
  await harness?.close();
  await mock?.close();
  if (directory) await rm(directory, { recursive: true, force: true });
});

test("all 57 official operations are covered and all 60 tools have independent request fixtures", async () => {
  const spec = YAML.parse(await readFile(new URL("../openapi.yaml", import.meta.url), "utf8"));
  const official = new Set(Object.entries(spec.paths).flatMap(([path, methods]) => Object.keys(methods).map(method => method.toUpperCase() + " " + path)));
  const implemented = new Set(toolDefinitions.map(tool => tool.operation));
  assert.equal(official.size, 57);
  assert.deepEqual(implemented, official);
  assert.equal(new Set(toolDefinitions.map(tool => tool.name)).size, toolDefinitions.length);
  assert.deepEqual(new Set(routeFixtures.map(fixture => fixture.name)), new Set(toolDefinitions.map(tool => tool.name)));
  const { tools } = await harness.client.listTools();
  assert.equal(tools.length, 60);
  assert.deepEqual(new Set(tools.map(tool => tool.name)), new Set(routeFixtures.map(fixture => fixture.name)));
});

test("MCP schemas expose current required fields, enum spellings, and operation hints", async () => {
  const { tools } = await harness.client.listTools();
  const byName = Object.fromEntries(tools.map(tool => [tool.name, tool]));
  assert.deepEqual(byName.create_client.inputSchema.required, ["name"]);
  assert.ok(byName.create_form_submission.inputSchema.required.includes("formName"));
  assert.deepEqual(byName.create_project.inputSchema.properties.portalAccess.enum, ["Full access", "Read only", "Overview", "None"]);
  assert.ok(byName.apply_payment.inputSchema.properties.paymentType.enum.includes("BANK_TRANSFER"));
  assert.equal(byName.get_webhook_sample.annotations.readOnlyHint, true);
  assert.equal(byName.subscribe_webhook.annotations.readOnlyHint, false);
  assert.equal(byName.replace_client.annotations.destructiveHint, true);
  assert.equal(byName.create_contact.inputSchema.additionalProperties, false);
});

test("every tool sends the documented HTTP method, path, query, body, and API key", async t => {
  for (const fixture of routeFixtures) {
    await t.test(fixture.name, async () => {
      const before = mock.requests.length;
      const args = { ...fixture.args, ...(fixture.multipart && { filePath }) };
      const result = await harness.client.callTool({ name: fixture.name, arguments: args });
      assert.equal(result.isError, undefined, JSON.stringify(result));
      assert.equal(mock.requests.length, before + 1);
      const request = mock.requests.at(-1);
      assert.equal(request.method, fixture.method);
      assert.equal(request.path, fixture.path);
      assert.deepEqual(request.query, Object.fromEntries(Object.entries(fixture.query || {}).map(([key, value]) => [key, String(value)])));
      assert.equal(request.headers["x-api-key"], "test-api-key");
      assert.equal(request.query["X-API-KEY"], undefined);
      assert.equal(request.headers.accept, fixture.path === "/public/unsubscribe" ? "text/html" : "application/json");
      if (fixture.multipart) {
        assert.match(request.headers["content-type"], /^multipart\/form-data; boundary=/);
        assert.match(request.rawBody.toString(), /name="file"; filename="report.pdf"/);
        assert.match(request.rawBody.toString(), /Content-Type: application\/pdf/);
        assert.ok(request.rawBody.includes(Buffer.from("%PDF-test\n\x00binary-content")));
        assert.doesNotMatch(request.rawBody.toString(), /name="(?:id|type|filePath)"/);
      } else if (fixture.form) {
        assert.match(request.headers["content-type"], /^application\/x-www-form-urlencoded/);
        assert.deepEqual(Object.fromEntries(new URLSearchParams(request.rawBody.toString())), fixture.body);
      } else if (fixture.body) {
        assert.match(request.headers["content-type"], /^application\/json/);
        assert.deepEqual(JSON.parse(request.rawBody), fixture.body);
      } else assert.equal(request.rawBody.length, 0);
    });
  }
});

test("searches and filtered lists accept no filters without adding a query or request body", async () => {
  for (const name of ["search_clients", "search_contacts", "search_projects", "search_tasks", "search_tickets", "search_payable_invoices", "search_agreements", "list_tasks", "list_tickets", "list_project_task_stages"]) {
    const result = await harness.client.callTool({ name, arguments: {} });
    assert.equal(result.isError, undefined, name);
    assert.deepEqual(mock.requests.at(-1).query, {});
    assert.equal(mock.requests.at(-1).rawBody.length, 0);
  }
});

test("PATCH preserves arbitrary custom values, explicit nulls, false, zero, and additional entity fields", async () => {
  const body = { id: "client-1", notes: null, archive: false, defaultTaxRate: 0, newServerField: { nested: null }, customValues: [{ fieldId: "field-1", mappingKey: "flags", type: "Text", value: { active: false, count: 0, tags: ["a"] } }] };
  const result = await harness.client.callTool({ name: "update_client", arguments: body });
  assert.equal(result.isError, undefined);
  assert.deepEqual(JSON.parse(mock.requests.at(-1).rawBody), body);
});

test("canonical API argument names work without the compatibility aliases", async () => {
  const examples = [
    ["create_client", { name: "Acme", paymentTerms: { paymentDays: 0 }, contacts: [{ email: "jane@acme.example" }] }],
    ["create_contact", { clientName: "Acme", first: "Jane", last: "Doe" }],
    ["create_project", { clientName: "Acme", name: "Site", feeSchedule: { feeType: "Per Item", amount: 0 } }],
    ["create_invoice", { clientName: "Acme", sendTo: { send: false, contacts: [] } }],
    ["apply_payment", { invoiceNumber: "I-1", clientName: "Acme", amount: 0, paymentType: "CASH", date: "2026-10-03", memo: "Paid" }],
    ["create_expense", { amount: 0, vendor: "Adobe", reimbursable: false }],
    ["create_opportunity", { name: "Deal", stageName: "New", estCloseDate: "2026-10-31" }],
    ["create_calendar_event", { summary: "Call", userEmail: "jane@acme.example" }],
    ["update_ticket_status", { id: "ticket-1", status: "Open" }],
  ];
  for (const [name, body] of examples) {
    const result = await harness.client.callTool({ name, arguments: body });
    assert.equal(result.isError, undefined, JSON.stringify(result));
    assert.deepEqual(JSON.parse(mock.requests.at(-1).rawBody), body);
  }
  const args = { id: "client-1", type: "CLIENT", fileUrl: "https://example.com/report.pdf", fileName: "report.pdf" };
  const result = await harness.client.callTool({ name: "attach_file_from_url", arguments: args });
  assert.equal(result.isError, undefined);
  assert.deepEqual(mock.requests.at(-1).query, args);
  assert.equal(mock.requests.at(-1).rawBody.length, 0);
});

test("legacy flat project fee fields become a partial feeSchedule without dropping zero amounts", async () => {
  const result = await harness.client.callTool({ name: "update_project", arguments: { projectId: "project-1", feeType: "HOURLY", amount: 0 } });
  assert.equal(result.isError, undefined);
  assert.deepEqual(JSON.parse(mock.requests.at(-1).rawBody), { id: "project-1", feeSchedule: { feeType: "Hourly", amount: 0 } });
  const amountOnly = await harness.client.callTool({ name: "update_project", arguments: { id: "project-1", amount: 0 } });
  assert.equal(amountOnly.isError, undefined);
  assert.deepEqual(JSON.parse(mock.requests.at(-1).rawBody), { id: "project-1", feeSchedule: { amount: 0 } });
});

test("invalid required fields, enum values, and identifiers fail before making an API request", async () => {
  const examples = [
    ["create_client", {}], ["create_client", { name: "" }],
    ["create_contact", { clientName: "Acme", role: "Unsupported creation field" }],
    ["create_calendar_event", { summary: "Call", attendees: ["jane@acme.example"] }],
    ["create_project", { name: "Site" }],
    ["update_client", { name: "Acme" }], ["replace_contact", { id: "" }],
    ["update_project", { projectName: "Site", clientName: "Acme" }],
    ["update_task", { statusId: "done" }],
    ["create_task", { name: "Task", priority: 1.5 }],
    ["create_project", { name: "Site", clientName: "Acme", portalAccess: "FULL" }],
    ["apply_payment", { invoiceId: "old-id", amount: 100 }],
    ["apply_payment", { invoiceNumber: "I-1", clientName: "Acme", amount: 100, paymentType: "invalid" }],
    ["create_ticket", { ticketType: "Support", comment: "Error" }],
    ["create_ticket_comment", { ticketId: "old-id", content: "Old format" }],
    ["update_ticket_status", { status: "Closed" }],
    ["update_ticket_status", { id: "ticket-1" }],
    ["update_ticket_status", { ticketNumber: 1.5, status: "Closed" }],
    ["create_form_submission", { email: "jane@acme.example" }],
    ["create_time_entry", { timerStart: "2026-10-03T09:00:00Z" }],
    ["approve_deliverable", { deliverableId: "old-id" }],
    ["update_calendar_event", { summary: "Meeting" }],
    ["delete_calendar_event", {}],
    ["get_account_info", { accountId: "10016" }],
    ["get_custom_fields", {}],
    ["get_email_template", {}],
    ["attach_file", { id: "client-1", type: "INVOICE", filePath }],
    ["attach_file_from_url", { id: "client-1", type: "CLIENT", fileUrl: "https://example.com/a" }],
    ["attach_file_from_url", { fileName: "a.pdf", fileUrl: "https://example.com/a" }],
    ["attach_file_from_url", { id: "client-1", type: "CLIENT", fileName: "a.pdf", fileUrl: "file:///tmp/a" }],
    ["subscribe_webhook", { type: "UnrecognizedEvent", hookUrl: "https://example.com" }],
    ["unsubscribe_email", {}],
  ];
  for (const [name, args] of examples) {
    const before = mock.requests.length;
    let failed;
    try { failed = (await harness.client.callTool({ name, arguments: args })).isError === true; }
    catch { failed = true; }
    assert.ok(failed, name + " must reject " + JSON.stringify(args));
    assert.equal(mock.requests.length, before, name + " should not reach the HTTP API");
  }
});

test("conflicting canonical fields and aliases fail without silently overwriting values", async () => {
  for (const [name, args] of [
    ["create_contact", { clientName: "Acme", first: "Jane", firstName: "John" }],
    ["create_client", { name: "Acme", paymentDays: 0, paymentTerms: { paymentDays: 30 } }],
    ["create_project", { name: "Site", clientName: "Acme", feeType: "FIXED", feeSchedule: { feeType: "Hourly" } }],
    ["create_invoice", { clientName: "Acme", sendInvoice: true, sendTo: { send: false } }],
    ["create_expense", { amount: 100, vendor: "Adobe", vendorName: "Other" }],
    ["delete_calendar_event", { id: "a", eventId: "b" }],
  ]) {
    const before = mock.requests.length;
    const result = await harness.client.callTool({ name, arguments: args });
    assert.equal(result.isError, true, name);
    assert.equal(mock.requests.length, before);
  }
});

test("invoice responses retain tax rules, tax breakdown, payments, line items, and statuses", async () => {
  const invoices = [{ id: "invoice-1", accountId: 10016, invoiceNumber: 1042, invoiceNumberFormatted: "E-2026-042", status: "WRITE-OFF", currency: "EUR", tax: 15.47, taxPercentage: 15.47375, taxRule: { id: "gst-pst", source: "MOXIE", components: [{ name: "GST", rate: 5, compound: false }, { name: "PST", rate: 9.975, compound: true }] }, taxBreakdown: [{ name: "GST", taxableAmount: 100, amount: 5 }, { name: "PST", taxableAmount: 105, amount: 10.47 }], lineItems: [{ unitPrice: 100, lineTotal: 100, taxable: true }], payments: [], amountDue: 0 }];
  mock.reply({ body: invoices });
  const result = await harness.client.callTool({ name: "search_payable_invoices", arguments: {} });
  assert.deepEqual(JSON.parse(result.content[0].text), invoices);
  mock.reply({ body: { ok: true } });
});

test("ticket wrappers, string lists, file references, HTML, and empty responses are returned accurately", async () => {
  for (const [name, args, body] of [
    ["create_ticket_comment", { ticketNumber: 1042, comment: "Test" }, { ticket: { ticketNumber: 1042 }, comments: [{ comment: "Test" }] }],
    ["list_vendor_names", {}, ["Adobe", "Figma"]],
    ["list_email_templates", {}, ["Welcome"]],
    ["list_invoice_templates", {}, ["Standard"]],
    ["list_form_names", {}, ["Contact"]],
    ["attach_file_from_url", { id: "client-1", type: "CLIENT", fileUrl: "https://example.com/a", fileName: "a.pdf" }, "https://files.example/a.pdf"],
    ["preview_email_unsubscribe", { token: "token-1" }, "<html>Confirm unsubscribe</html>"],
    ["delete_calendar_event", { id: "event-1" }, ""],
  ]) {
    mock.reply({ body, headers: { "Content-Type": typeof body === "string" ? "text/plain" : "application/json" } });
    const result = await harness.client.callTool({ name, arguments: args });
    assert.equal(result.isError, undefined);
    if (typeof body === "string") assert.equal(result.content[0].text, body || "Success");
    else assert.deepEqual(JSON.parse(result.content[0].text), body);
  }
  mock.reply({ body: { ok: true }, headers: { "Content-Type": "application/json" } });
});

test("API errors retain meaningful status/details and never become successful search results", async () => {
  for (const [status, expected] of [[400, /400/], [401, /Unauthorized/], [403, /Forbidden/], [404, /Resource not found/], [412, /precondition failed/], [429, /Retry after 120/], [500, /500/]]) {
    mock.reply({ status, body: { message: "api-detail" }, headers: { "Content-Type": "application/json", "Retry-After": "120" } });
    const result = await harness.client.callTool({ name: "search_projects", arguments: { query: "Acme" } });
    assert.equal(result.isError, true);
    assert.match(result.content[0].text, expected);
    if (status !== 429) assert.match(result.content[0].text, /api-detail/);
    assert.doesNotMatch(result.content[0].text, /test-api-key/);
  }
  mock.reply({ status: 404, body: "Missing template", headers: { "Content-Type": "text/plain" } });
  const result = await harness.client.callTool({ name: "get_email_template", arguments: { templateId: "missing" } });
  assert.equal(result.isError, true);
  assert.match(result.content[0].text, /Missing template/);
  mock.reply({ status: 200, body: { ok: true }, headers: { "Content-Type": "application/json" } });
});

test("missing local upload files produce a tool error without sending an API request", async () => {
  const before = mock.requests.length;
  const result = await harness.client.callTool({ name: "attach_file", arguments: { id: "client-1", type: "CLIENT", filePath: join(directory, "missing.pdf") } });
  assert.equal(result.isError, true);
  assert.match(result.content[0].text, /ENOENT/);
  assert.equal(mock.requests.length, before);
});
