# Moxie CRM MCP Server

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)

An MCP (Model Context Protocol) server that enables LLMs to interact with [Moxie CRM](https://withmoxie.com). Provides comprehensive tools for managing clients, contacts, projects, invoices, time tracking, and more.

## Features

- **Client Management**: List, search, and create clients with full contact information
- **Contact Management**: Search and create contacts associated with clients
- **Project Management**: Search projects, create/update projects, and manage task stages
- **Task Management**: Create tasks with subtasks, custom fields, and multi-assignee support
- **Invoice Operations**: Search invoices, create new invoices, and apply payments
- **Time Tracking**: Create time entries with optional auto-creation of clients/projects
- **Expense Tracking**: Record and categorize business expenses
- **Sales Pipeline**: Create opportunities and manage pipeline stages
- **Support Tickets**: Create tickets with structured form data and add comments
- **Calendar Events**: Create, update, and delete calendar events
- **Form Submissions**: Submit lead capture forms with pipeline opportunity creation
- **File Attachments**: Attach files from URLs to various entities
- **Templates**: Access email and invoice templates, vendor names, and workspace users

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
        "MOXIE_BASE_URL": "https://pod01.withmoxie.com/api/public",
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
        "MOXIE_BASE_URL": "https://pod01.withmoxie.com/api/public",
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
        "MOXIE_BASE_URL": "https://pod01.withmoxie.com/api/public",
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
        "MOXIE_BASE_URL": "https://pod01.withmoxie.com/api/public",
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
        "MOXIE_BASE_URL": "https://pod01.withmoxie.com/api/public",
        "MOXIE_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### MCP Inspector (Testing)

```bash
MOXIE_API_KEY=your_key MOXIE_BASE_URL=https://pod01.withmoxie.com/api/public npx @modelcontextprotocol/inspector npx -y withmoxie-mcp-server
```

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

> "Apply a payment of $500 to invoice ID abc123"

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

> "Add a comment to ticket ID xyz789"

### Calendar Events

> "Create a meeting titled 'Project Kickoff' tomorrow from 2pm to 3pm"

> "Update the calendar event to change the location to 'Conference Room A'"

### Templates and Settings

> "List all email templates"

> "Show me the invoice templates available"

> "Who are the users in my workspace?"

## Available Tools

### Client Tools (3)

| Tool             | Description                                         |
| ---------------- | --------------------------------------------------- |
| `list_clients`   | List all clients in your Moxie workspace            |
| `search_clients` | Search for clients by name or contact information   |
| `create_client`  | Create a new client with contacts and payment terms |

### Contact Tools (2)

| Tool              | Description                                   |
| ----------------- | --------------------------------------------- |
| `search_contacts` | Search for contacts by name, email, or phone  |
| `create_contact`  | Create a new contact associated with a client |

### Project Tools (4)

| Tool                       | Description                                    |
| -------------------------- | ---------------------------------------------- |
| `search_projects`          | Search projects, optionally filtered by client |
| `create_project`           | Create a new project for a client              |
| `update_project`           | Update an existing project's details           |
| `list_project_task_stages` | List all available task stages                 |

### Invoice Tools (3)

| Tool                      | Description                            |
| ------------------------- | -------------------------------------- |
| `search_payable_invoices` | Search for invoices in your workspace  |
| `create_invoice`          | Create a new invoice with line items   |
| `apply_payment`           | Apply a payment to an existing invoice |

### Task Tools (1)

| Tool          | Description                                                                      |
| ------------- | -------------------------------------------------------------------------------- |
| `create_task` | Create a task with subtasks, multi-assignee, custom fields, and numeric priority |

### Time Entry Tools (1)

| Tool                | Description                                     |
| ------------------- | ----------------------------------------------- |
| `create_time_entry` | Create a time entry with optional auto-creation |

### Expense Tools (1)

| Tool             | Description                 |
| ---------------- | --------------------------- |
| `create_expense` | Create a new expense record |

### Opportunity Tools (2)

| Tool                   | Description                                |
| ---------------------- | ------------------------------------------ |
| `list_pipeline_stages` | List all pipeline stages for opportunities |
| `create_opportunity`   | Create a new sales opportunity             |

### Ticket Tools (2)

| Tool                    | Description                                                        |
| ----------------------- | ------------------------------------------------------------------ |
| `create_ticket`         | Create a ticket (requires contact email, ticket type, and comment) |
| `create_ticket_comment` | Add a comment to an existing ticket                                |

### Form Tools (2)

| Tool                     | Description                                                          |
| ------------------------ | -------------------------------------------------------------------- |
| `list_form_names`        | List all available forms                                             |
| `create_form_submission` | Submit a lead capture form with optional pipeline opportunity creation |

### File Tools (1)

| Tool                   | Description                                |
| ---------------------- | ------------------------------------------ |
| `attach_file_from_url` | Attach a file from a URL to a Moxie record |

### Calendar Tools (3)

| Tool                    | Description                       |
| ----------------------- | --------------------------------- |
| `create_calendar_event` | Create a new calendar event       |
| `update_calendar_event` | Update an existing calendar event |
| `delete_calendar_event` | Delete a calendar event           |

### Deliverable Tools (1)

| Tool                  | Description                             |
| --------------------- | --------------------------------------- |
| `approve_deliverable` | Approve a deliverable/task in a project |

### Template & Reference Tools (4)

| Tool                     | Description                        |
| ------------------------ | ---------------------------------- |
| `list_email_templates`   | List all email templates           |
| `list_invoice_templates` | List all invoice templates         |
| `list_vendor_names`      | List all vendor names for expenses |
| `list_workspace_users`   | List all users in your workspace   |

## Configuration

| Variable         | Required | Description                                                              |
| ---------------- | -------- | ------------------------------------------------------------------------ |
| `MOXIE_API_KEY`  | Yes      | Your Moxie API key                                                       |
| `MOXIE_BASE_URL` | Yes      | Your Moxie API base URL (e.g., `https://pod01.withmoxie.com/api/public`) |

### Finding Your Base URL

Your base URL depends on which Moxie pod your workspace is on. When you enable custom integration in Moxie, you'll see your specific base URL. Common formats:

- `https://pod01.withmoxie.com/api/public`
- `https://pod00.withmoxie.dev/api/public`

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Development mode (watch)
npm run dev

# Test with MCP Inspector
MOXIE_API_KEY=your_key MOXIE_BASE_URL=your_url npx @modelcontextprotocol/inspector npx -y withmoxie-mcp-server
```

## Project Structure

```
withmoxie-mcp-server/
├── src/
│   ├── index.ts              # Server entry point
│   ├── server.ts             # MCP server setup
│   ├── client/
│   │   └── moxie-client.ts   # API client with auth
│   ├── types/
│   │   └── moxie.ts          # TypeScript interfaces
│   └── tools/
│       ├── index.ts          # Tool registration
│       ├── clients.ts        # Client tools
│       ├── contacts.ts       # Contact tools
│       ├── projects.ts       # Project tools
│       ├── invoices.ts       # Invoice tools
│       ├── tasks.ts          # Task tools
│       ├── time-entries.ts   # Time entry tools
│       ├── expenses.ts       # Expense tools
│       ├── opportunities.ts  # Opportunity tools
│       ├── tickets.ts        # Ticket tools
│       ├── forms.ts          # Form tools
│       ├── files.ts          # File tools
│       ├── calendar.ts       # Calendar tools
│       ├── deliverables.ts   # Deliverable tools
│       └── templates.ts      # Template tools
├── build/                    # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

## API Rate Limits

Moxie has a rate limit of **100 requests per 5 minutes**. If exceeded, you'll receive an HTTP 429 response. The server will return a helpful error message when this occurs.

## Error Handling

The server provides actionable error messages for common issues:

| Code | Description         | Solution                                                  |
| ---- | ------------------- | --------------------------------------------------------- |
| 401  | Unauthorized        | Check your `MOXIE_API_KEY`                                |
| 404  | Resource not found  | Verify the resource exists (exact name matching required) |
| 429  | Rate limit exceeded | Wait and retry (100 requests per 5 minutes)               |

### Important Notes

- **Exact Name Matching**: Many Moxie API endpoints require exact name matches for clients, projects, templates, ticket types, and pipeline stages. Make sure to use the exact names as they appear in Moxie.
- **Draft Invoices**: When creating an invoice without the `sendTo` parameter, the invoice is created in DRAFT status.
- **Auto-Creation**: Time entries support auto-creation of clients, projects, and deliverables via boolean flags.
- **Tickets Require Contact Email**: The `create_ticket` tool requires `userEmail` to be an existing contact in your workspace. The ticket will be rejected if the email is not found.
- **Form Submissions Create Opportunities**: Use `create_form_submission` with `pipelineStageName` to automatically create pipeline opportunities from lead data.
- **Speculative Endpoints**: The `create_opportunity` and `update_project` tools use endpoints that follow the Moxie API convention but may not be officially documented. Test them against your workspace.

### Known Limitations

- **No Task/Deliverable Listing**: The Moxie Public API does not expose any endpoint to list, search, or retrieve tasks (deliverables) for a project. Tasks can only be **created** (`create_task`) and **approved** (`approve_deliverable`), but not read back via the API.
- **Empty Deliverables in Projects**: The `deliverables` array returned by `search_projects` is always empty by design — Moxie does not populate it in API responses.
- **Task Data via Webhooks Only**: To track task changes, use Moxie's webhook events (`DeliverableCreate`, `DeliverableUpdate`, `DeliverableDelete`) which include the full task payload.

## License

MIT
