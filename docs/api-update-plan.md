# Moxie API update plan

Source: [Moxie API documentation](https://api-docs.withmoxie.com/) and its
[downloadable OpenAPI specification](https://api-docs.withmoxie.com/openapi/openapi.yml),
reviewed on 2026-10-03. The site sitemap contains 101 pages, including the
handwritten reference and the generated API reference. The specification exposes
**57 operations across 51 paths**.

## Implementation and verification

- [x] Inspect every documented route and compare the existing server with the current API.
- [x] Replace the outdated local OpenAPI reference with the official specification.
- [x] Generate request schemas and TypeScript types from the local specification.
- [x] Normalize host URLs and existing `/api/public` URLs; support JSON, query,
  multipart, URL-encoded, PATCH, PUT, and DELETE requests.
- [x] Update all existing tools and add every missing operation.
- [x] Update the README and generate an endpoint-to-tool coverage table.
- [x] Verify all operations through MCP against a local HTTP mock, check required
  fields and parameter placement, and exercise error responses.
- [x] Double-check generated files, build, packaged startup, and the final diff.

## Scope

Clients, contacts, projects, tasks/deliverables, invoices/payments, expenses,
opportunities/forms, tickets/comments/status, agreements, calendar, attachments,
workspace identity/users/vendors, templates, project types/task stages, custom
fields, authentication, webhook subscriptions/samples, and email unsubscribe.

Existing tool names remain available. Partial updates use PATCH; explicit
`replace_*` tools expose the documented PUT operations. The server does not
perform CRM writes during verification.

## Documentation discrepancies to account for

- The generated attachment upload operation labels the body `application/json`,
  but the handwritten reference explicitly requires a `multipart/form-data`
  file part. Implement multipart and keep the downloaded specification intact.
- Generated entity schemas require workspace fields such as `accountId`; these
  are supplied by Moxie when creating or updating records. Do not require callers
  to provide them. Client creation needs a name; nested payment terms can be
  supplied partially, as in the handwritten reference.
- PATCH accepts an entity id and any subset of fields, including explicit nulls
  to clear values. Do not enforce full response-model requirements on patches.
- Invoice creation accepts an additional simple `clientId`/`amount`/`dateDue`
  shape in the handwritten reference. Expose it alongside the documented
  name/line-item shape.
- Several generated operations omit their success response, and some generated
  operation ids are misleading. Use the HTTP method and path as the operation
  identity, and use the handwritten reference for missing response types.
- Handwritten examples use legacy enum spellings such as `FULL` and `TEXT`;
  the current specification enumerates portal access as `Full access` and custom
  field types as `Text`. Advertise the current enum values.


## Verification results

- All 57 official method/path combinations are represented; all 60 tools have
  independent request fixtures executed through MCP and a local HTTP server.
- **79 tests pass**, including required/unsupported arguments, current enum
  spellings, null clearing, zero values, false filters, aliases, binary multipart
  uploads, URL/form encoding, HTML negotiation, response shapes, and HTTP errors.
- Generated API types/schemas and the endpoint coverage table are current.
- Build, TypeScript checks, ESLint, and `git diff --check` pass.
- The full dependency audit reports **0 vulnerabilities**.
- A packed npm artifact was installed with production dependencies only; its
  stdio server initialized and exposed all 60 tools. No dev tooling is required
  at runtime.
- A second download of the upstream specification matches `openapi.yaml` byte
  for byte. SHA-256:
  `856bc6b1ed83b1b7b2f44d9cd48a6384eed6661251df3f3d733bc1ac980483bd`.

Live workspace verification was not run because `MOXIE_API_KEY` is not configured
in this environment. Tests made no changes to a Moxie workspace. The README
records changed arguments and compatible aliases.
