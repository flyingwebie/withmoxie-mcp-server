# Moxie endpoint coverage

Generated from the local copy of the [official OpenAPI specification](https://api-docs.withmoxie.com/openapi/openapi.yml). **57 operations across 51 paths are covered by 60 tools.**

Regenerate with `npm run docs:coverage`. HTTP method and path identify an operation; several upstream operation ids are misleading.

| Resource | Method | Path | MCP tools |
| --- | --- | --- | --- |
| Agreements | GET | `/public/action/agreements/search` | `search_agreements` |
| api-hook-controller | GET | `/public/api/auth` | `validate_auth` |
| api-hook-controller | GET | `/public/api/customFields` | `get_custom_fields` |
| api-hook-controller | POST | `/public/api/sample` | `get_webhook_sample` |
| api-hook-controller | POST | `/public/api/subscribe` | `subscribe_webhook` |
| api-hook-controller | POST | `/public/api/unsubscribe` | `unsubscribe_webhook` |
| Attachments | POST | `/public/action/attachments/create` | `attach_file` |
| Attachments | POST | `/public/action/attachments/createFromUrl` | `attach_file_from_url` |
| Calendar | DELETE | `/public/action/calendar/{id}` | `delete_calendar_event` |
| Calendar | POST | `/public/action/calendar/createOrUpdate` | `create_calendar_event`, `update_calendar_event`, `create_or_update_calendar_event` |
| Clients | GET | `/public/action/clients/list` | `list_clients` |
| Clients | GET | `/public/action/clients/search` | `search_clients` |
| Clients | PATCH | `/public/action/clients/update` | `update_client` |
| Clients | POST | `/public/action/clients/create` | `create_client` |
| Clients | PUT | `/public/action/clients/update` | `replace_client` |
| Contacts | GET | `/public/action/contacts/search` | `search_contacts` |
| Contacts | PATCH | `/public/action/contacts/update` | `update_contact` |
| Contacts | POST | `/public/action/contacts/create` | `create_contact` |
| Contacts | PUT | `/public/action/contacts/update` | `replace_contact` |
| Expenses | PATCH | `/public/action/expenses/update` | `update_expense` |
| Expenses | POST | `/public/action/expenses/create` | `create_expense` |
| Expenses | PUT | `/public/action/expenses/update` | `replace_expense` |
| Invoices & Payments | GET | `/public/action/payableInvoices/search` | `search_payable_invoices` |
| Invoices & Payments | POST | `/public/action/invoices/create` | `create_invoice`, `create_simple_invoice` |
| Invoices & Payments | POST | `/public/action/payment/create` | `apply_payment` |
| Pipeline & Forms | PATCH | `/public/action/opportunities/update` | `update_opportunity` |
| Pipeline & Forms | POST | `/public/action/formSubmissions/create` | `create_form_submission` |
| Pipeline & Forms | POST | `/public/action/opportunities/create` | `create_opportunity` |
| Pipeline & Forms | PUT | `/public/action/opportunities/update` | `replace_opportunity` |
| Projects & Tasks | GET | `/public/action/projects/search` | `search_projects` |
| Projects & Tasks | GET | `/public/action/tasks/list` | `list_tasks` |
| Projects & Tasks | GET | `/public/action/tasks/search` | `search_tasks` |
| Projects & Tasks | PATCH | `/public/action/projects/update` | `update_project` |
| Projects & Tasks | PATCH | `/public/action/tasks/update` | `update_task` |
| Projects & Tasks | POST | `/public/action/deliverable/approve` | `approve_deliverable` |
| Projects & Tasks | POST | `/public/action/projects/create` | `create_project` |
| Projects & Tasks | POST | `/public/action/tasks/create` | `create_task` |
| Projects & Tasks | PUT | `/public/action/projects/update` | `replace_project` |
| public-unsubscribe-controller | GET | `/public/unsubscribe` | `preview_email_unsubscribe` |
| public-unsubscribe-controller | POST | `/public/unsubscribe` | `unsubscribe_email` |
| Tickets | GET | `/public/action/tickets/list` | `list_tickets` |
| Tickets | GET | `/public/action/tickets/search` | `search_tickets` |
| Tickets | PATCH | `/public/action/tickets/status` | `update_ticket_status` |
| Tickets | POST | `/public/action/tickets/comments/create` | `create_ticket_comment` |
| Tickets | POST | `/public/action/tickets/create` | `create_ticket` |
| Time Tracking | POST | `/public/action/timeWorked/create` | `create_time_entry` |
| Workspace & Reference Data | GET | `/public/action/account/{accountId}` | `get_account_info` |
| Workspace & Reference Data | GET | `/public/action/emailTemplates` | `list_email_template_details` |
| Workspace & Reference Data | GET | `/public/action/emailTemplates/{templateId}` | `get_email_template` |
| Workspace & Reference Data | GET | `/public/action/emailTemplates/list` | `list_email_templates` |
| Workspace & Reference Data | GET | `/public/action/formNames/list` | `list_form_names` |
| Workspace & Reference Data | GET | `/public/action/invoiceTemplates/list` | `list_invoice_templates` |
| Workspace & Reference Data | GET | `/public/action/pipelineStages/list` | `list_pipeline_stages` |
| Workspace & Reference Data | GET | `/public/action/projectTypes/list` | `list_project_types` |
| Workspace & Reference Data | GET | `/public/action/taskStages/list` | `list_project_task_stages` |
| Workspace & Reference Data | GET | `/public/action/users/list` | `list_workspace_users` |
| Workspace & Reference Data | GET | `/public/action/vendors/list` | `list_vendor_names` |
