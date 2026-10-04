# Moxie CRM MCP Server

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)

An MCP (Model Context Protocol) server that enables LLMs to interact with [Moxie CRM](https://withmoxie.com). Provides comprehensive tools for managing clients, contacts, projects, invoices, time tracking, and more.

## Version 2.0.0

This major release updates every route to the current Moxie API, covering 57 documented operations through 60 MCP tools. It adds missing search, update, workspace, agreement, upload, and webhook tools, with generated schemas and request contract tests.

Before upgrading from 1.x, review [Updated API Arguments](#updated-api-arguments). Existing tool names and compatible aliases remain available, but some required arguments and response shapes have changed, and unsupported legacy fields now produce argument errors. In particular, payments require `invoiceNumber`, `clientName`, and `amount`; file uploads use `id`, uppercase `type`, and `filePath`.

## Features

- **60 MCP tools covering all 57 documented operations** in the [current Moxie API](https://api-docs.withmoxie.com/).
- List/search clients, contacts, projects, tasks, tickets, payable invoices, and agreements, including exact-id lookups.
- Create records and use PATCH for partial updates; explicit `replace_*` tools expose full PUT replacements.
- Invoice creation, payment recording, time tracking, expenses, pipeline opportunities, and form submissions.
- Calendar creation/updates, ticket status changes, deliverable approvals, multipart uploads, and URL attachments.
- Workspace identity, custom fields, project types, task stages, email template content, webhook subscriptions, and samples.
- Generated API types/schemas, endpoint coverage checks, and MCP-to-HTTP contract tests.

## Quick Start

### Clone and Build

```bash
git clone https://github.com/flyingwebie/withmoxie-mcp-server.git
cd withmoxie-mcp-server
npm install
npm run build
```

### Get Your API Key

1. Log into your [Moxie](https://withmoxie.com) account
2. Navigate to **Workspace Settings** → **Connected Apps** → **Integrations**
3. Click **Enable Custom Integration**
4. Copy your **API Key** and **Base Endpoint URL**

## IDE Integration Guides

### Claude Code

Add to `~/.claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "moxie": {
      "command": "npx",
      "args": ["-y", "withmoxie-mcp-server"],
      "env": {
        "MOXIE_BASE_URL": "https://api.withmoxie.com",
        "MOXIE_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Claude Desktop

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "moxie": {
      "command": "npx",
      "args": ["-y", "withmoxie-mcp-server"],
      "env": {
        "MOXIE_BASE_URL": "https://api.withmoxie.com",
        "MOXIE_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Cursor

Add to `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "moxie": {
      "command": "npx",
      "args": ["-y", "withmoxie-mcp-server"],
      "env": {
        "MOXIE_BASE_URL": "https://api.withmoxie.com",
        "MOXIE_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### VS Code with Cline Extension

Add to your VS Code `settings.json`:

```json
{
  "cline.mcpServers": {
    "moxie": {
      "command": "npx",
      "args": ["-y", "withmoxie-mcp-server"],
      "env": {
        "MOXIE_BASE_URL": "https://api.withmoxie.com",
        "MOXIE_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Windsurf

Add to your Windsurf MCP configuration:

```json
{
  "mcpServers": {
    "moxie": {
      "command": "npx",
      "args": ["-y", "withmoxie-mcp-server"],
      "env": {
        "MOXIE_BASE_URL": "https://api.withmoxie.com",
        "MOXIE_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### MCP Inspector (Testing)

Use Node.js 22.19+ or 24+ and run from the repository root:

```bash
npm ci
npm run build
npx --yes @modelcontextprotocol/inspector@2.9.0
```

Open the browser URL printed in the terminal. Choose **Add Servers → Add manually** and configure:

| Field | Value |
| --- | --- |
| Server ID | `moxie` |
| Transport | `stdio (local process)` |
| Command | `node` |
| Arguments | The absolute path to this repository's `build/index.js` (one argument per line). |
| Working directory | The absolute path to this repository. |

Enter your credentials in **Environment**, with one `KEY=VALUE` pair per line:

```text
MOXIE_API_KEY=your_api_key_here
MOXIE_BASE_URL=https://your-base-endpoint
```

Use the API key and Base Endpoint URL from your Moxie workspace's integration settings. Click **Add**, enable the connection for **moxie**, and open **Tools**. Expect 60 tools. Start with `validate_auth` and `list_clients`, both with `{}` arguments. For create/update/delete checks, use disposable test records.

Alternatively, pass the environment variables directly when launching the local build:

```bash
npm run inspect -- \
  -e "MOXIE_API_KEY=your_api_key_here" \
  -e "MOXIE_BASE_URL=https://your-base-endpoint"
```

The `-e` arguments explicitly pass credentials to the MCP server. Launching with a server command uses an ad-hoc configuration; launch Inspector without server arguments to edit the server configuration in the web UI.

Run `npm test` for automated checks without credentials. Those checks use a local mock API and do not change your Moxie workspace.

## Example Prompts

Once configured, you can use natural language to interact with Moxie:

### Managing Clients

> "List all my clients"

> "Search for clients named 'Acme'"

> "Create a new client called 'Tech Startup Inc' with USD currency"

### Managing Contacts

> "Search for contacts with email containing 'john'"

> "Add a new contact Jane Smith to the client 'Acme Corp'"

### Project Operations

> "Show me all projects for client 'Web Agency'"

> "Create a new project called 'Website Redesign' for client 'Tech Startup Inc'"

> "What are the available task stages?"

### Invoice Management

> "Search for unpaid invoices"

> "Create an invoice for 'Acme Corp' with a line item for 10 hours of consulting at $150/hour"

> "Apply a bank-transfer payment of $500 to invoice E-2026-042 for client Acme Corp"

### Time Tracking

> "Log 2 hours of work from 9am to 11am today for project 'Website Redesign' for user john@company.com"

> "Create a time entry for client 'Acme Corp' and auto-create the project if it doesn't exist"

### Expense Tracking

> "Record a $50 expense for 'Office Supplies' from today"

> "Create a billable expense for client 'Tech Startup Inc' for $200 software subscription"

### Sales Pipeline

> "List all pipeline stages"

> "Create a new opportunity called 'Enterprise Deal' worth $50,000"

### Task Management

> "Create a task called 'Design Homepage' in project 'Website Redesign' for client 'Acme Corp' with subtasks 'Header', 'Footer', 'Hero Section'"

### Support Tickets

> "Create a support ticket for contact john@acme.com with ticket type 'Support Request' and comment 'Login page is broken'"

> "Add a comment to ticket number 1042"

### Calendar Events

> "Create a meeting titled 'Project Kickoff' tomorrow from 2pm to 3pm"

> "Update the calendar event to change the location to 'Conference Room A'"

### Templates and Settings

> "List all email templates"

> "Show me the invoice templates available"

> "Who are the users in my workspace?"

## Available Tools

The [endpoint coverage table](docs/api-coverage.md) maps every HTTP method/path to its tools.

| Resource | Tools |
| --- | --- |
| Clients | `list_clients`, `search_clients`, `create_client`, `update_client`, `replace_client` |
| Contacts | `search_contacts`, `create_contact`, `update_contact`, `replace_contact` |
| Projects | `search_projects`, `create_project`, `update_project`, `replace_project`, `list_project_types`, `list_project_task_stages` |
| Tasks/deliverables | `list_tasks`, `search_tasks`, `create_task`, `update_task`, `approve_deliverable` |
| Invoices/payments | `search_payable_invoices`, `create_invoice`, `create_simple_invoice`, `apply_payment` |
| Time | `create_time_entry` |
| Expenses | `create_expense`, `update_expense`, `replace_expense` |
| Pipeline | `list_pipeline_stages`, `create_opportunity`, `update_opportunity`, `replace_opportunity` |
| Tickets | `list_tickets`, `search_tickets`, `update_ticket_status`, `create_ticket`, `create_ticket_comment` |
| Forms | `list_form_names`, `create_form_submission` |
| Agreements | `search_agreements` |
| Calendar | `create_calendar_event`, `update_calendar_event`, `create_or_update_calendar_event`, `delete_calendar_event` |
| Attachments | `attach_file`, `attach_file_from_url` |
| Templates/reference | `list_email_templates`, `list_email_template_details`, `get_email_template`, `list_invoice_templates`, `list_vendor_names`, `list_workspace_users` |
| Workspace | `get_account_info`, `get_custom_fields`, `validate_auth` |
| Integration utilities | `subscribe_webhook`, `unsubscribe_webhook`, `get_webhook_sample`, `preview_email_unsubscribe`, `unsubscribe_email` |

## Updated API Arguments

Existing tool names remain available. These arguments follow the current API:

| Tool | Current arguments/behavior |
| --- | --- |
| `create_client` | Only `name` is required. Accepts nested `paymentTerms`, contacts, tax defaults, and custom values. |
| `create_contact` | `clientName`, `first`, `last`, email/phone/notes, and contact flags. `firstName`/`lastName` remain aliases. |
| `update_*` | `id` plus changed entity fields, including explicit `null` to clear values. `update_project` also accepts `projectId`. |
| `replace_*` | `id` and the complete entity for a PUT replacement; omitted fields are reset or cleared. |
| `create_project` | Optional `templateName`, `feeSchedule`, portal settings, and custom values. Fee types are `Hourly`, `Fixed Price`, `Retainer`, and `Per Item`. |
| `create_invoice` | `clientName`, optional `items`, `description`, and `sendTo`. Tax/discount rates are percentages: `27` means 27%. |
| `create_simple_invoice` | Alternative invoice shape: `clientId`, `amount`, `dateDue`, `description`, `notes`, and `sendTo`. |
| `apply_payment` | Required `invoiceNumber`, `clientName`, and `amount`; optional `date`, `paymentType`, `referenceNumber`, and `memo`. Invoice id alone is no longer used. |
| `create_expense` | `amount`, optional date/currency/paid/markup fields, `vendor`, `reimbursable`, and `clientName`. |
| `create_opportunity` | `name`, optional `stageName`, `estCloseDate`, `leadInfo`, `toDos`, and custom values. Updates move stages with `statusId`. |
| `create_ticket_comment` | `ticketNumber`, `comment`, optional `userEmail` and `privateComment`; returns a ticket/comments wrapper. |
| `update_ticket_status` | `status` and either `id` or `ticketNumber`. |
| `create_form_submission` | `formName` is required; includes `taxId`, lead details, answers, and optional pipeline stage. |
| `approve_deliverable` | Required exact `clientName`, `projectName`, and `deliverableName`. |
| Calendar tools | `summary`, times, timezone, `userEmail`, `fullDay`, and `busy`; `title` remains an alias. Updating requires `eventId`; deletion accepts `id` or `eventId`. |
| `attach_file` | Required `id`, uppercase `type`, and local `filePath`; optional `fileName` and `contentType`. Uploads a multipart `file` part. |
| `attach_file_from_url` | Required `id`, uppercase `type`, `fileUrl`, and `fileName`, sent as query parameters. `entityId`, `entityType`, and `url` remain aliases. |
| `list_project_task_stages` | Optional `projectTypeId`; omitted means the default project type. |

Flattened billing, fee, invoice-send, payment, vendor, and opportunity arguments remain supported where they map to documented fields. Conflicting aliases produce an error. Name-based project updates require an id. Unsupported old fields such as contact creation `role`/`mobile`, opportunity `probability`/`contactName`, expense creation `projectName`, and calendar `attendees` produce argument errors. Entity updates/replacements accept additional record fields for complete round trips.

Searches accept optional `id` and `query` where documented. For projects and payable invoices, `query` means an **exact client name**. Vendor, form, invoice-template, and email-template name lists return arrays of strings. Use `list_email_template_details` and `get_email_template` for template ids and content.

## Configuration

| Variable | Required | Description |
| --- | --- | --- |
| `MOXIE_API_KEY` | Yes | Your workspace API key, sent in the `X-API-KEY` header. |
| `MOXIE_BASE_URL` | No | API host or Base Endpoint URL. Defaults to `https://api.withmoxie.com`. |

Use the endpoint shown in your workspace's integration settings when it differs from the default. Supported formats include:

- `https://api.withmoxie.com`
- `https://api.withmoxie.com/public`
- `https://pod01.withmoxie.com/api/public`
- `https://pod00.withmoxie.dev/api/public`

Trailing slashes and `/action` suffixes are normalized. A configured `/zapier` base uses the equivalent Zapier prefix for action endpoints. Integration and email routes use their documented `/public/api/*` and `/public/unsubscribe` paths.

## Development

The server runs on Node.js 18 or newer. Use Node.js 22.19+ or 24+ for development with the current lint tooling and Inspector.

```bash
npm ci
npm test                 # Generated-file checks, build, coverage, MCP/HTTP contracts, stdio startup
npm run lint
npm run typecheck
npm run dev
```

The [API update plan](docs/api-update-plan.md) records scope, documentation discrepancies, and verification. `openapi.yaml` is the official downloaded specification; generated files live in `src/types/openapi.ts` and `src/types/api-metadata.ts`.

To update the API reference in the future:

```bash
curl -fsSL https://api-docs.withmoxie.com/openapi/openapi.yml -o openapi.yaml
npm run generate:api
# Update tool registrations and independent request fixtures for changed operations.
npm run docs:coverage
npm test
npm run lint
```

`src/tools/api-tool.ts` converts request schemas to Zod, registers tools, and places path/query/body parameters. Resource modules define tool names and compatibility mappings. API calls remain lazy so tool discovery works before credentials are configured.

## Error Handling

HTTP 400, 401, 403, 404, 412, 429, and server errors become MCP tool errors. Status details are preserved; 429 reports `Retry-After` when supplied. Network failures and request timeouts produce readable messages. Failed searches remain errors.

Verification uses a local mock API and makes no changes to a Moxie workspace. Live behavior requires testing with your workspace API key and endpoint.

## License

MIT
