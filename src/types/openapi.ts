// Generated from openapi.yaml by npm run generate:api. Do not edit.
export interface paths {
    "/public/action/projects/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update project (full replace)
         * @description Replaces the project identified by id with the request body. Omitted fields are overwritten.
         */
        put: operations["updateProject"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update project (partial)
         * @description Merges the given fields into the project identified by id.
         */
        patch: operations["patchProject"];
        trace?: never;
    };
    "/public/action/opportunities/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update opportunity (full replace)
         * @description Replaces the opportunity identified by id with the request body. Omitted fields are overwritten.
         */
        put: operations["updateOpportunity"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update opportunity (partial)
         * @description Merges the given fields into the opportunity identified by id. Moving pipeline stage is a patch of statusId.
         */
        patch: operations["patchOpportunity"];
        trace?: never;
    };
    "/public/action/expenses/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update expense (full replace)
         * @description Replaces the expense identified by id with the request body. Omitted fields are overwritten.
         */
        put: operations["updateExpense"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update expense (partial)
         * @description Merges the given fields into the expense identified by id.
         */
        patch: operations["patchExpense"];
        trace?: never;
    };
    "/public/action/contacts/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update contact (full replace)
         * @description Replaces the contact identified by id with the request body. Omitted fields are overwritten.
         */
        put: operations["updateContact"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update contact (partial)
         * @description Merges the given fields into the contact identified by id.
         */
        patch: operations["patchContact"];
        trace?: never;
    };
    "/public/action/clients/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update client (full replace)
         * @description Replaces the client identified by id with the request body. Omitted fields are overwritten. accountId is always forced to the caller's workspace.
         */
        put: operations["updateClient"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update client (partial)
         * @description Merges the given fields into the client identified by id. Omitted fields keep their current values.
         */
        patch: operations["patchClient"];
        trace?: never;
    };
    "/public/unsubscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["confirm"];
        put?: never;
        post: operations["unsubscribe"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/api/unsubscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["unsubscribeHook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/api/subscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["subscribeHook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/api/sample": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["getSampleData"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/timeWorked/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create time entry
         * @description Logs a time-worked entry; can create the client, project or deliverable on the fly via the create* flags.
         */
        post: operations["createTimerEvent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/tickets/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create ticket */
        post: operations["createTicket"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/tickets/comments/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add comment to ticket */
        post: operations["createTicketComment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/tasks/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create task
         * @description Creates a task (deliverable) inside a project, resolved by client and project name.
         */
        post: operations["creteTask"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/projects/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create project */
        post: operations["crateProject"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/payment/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Apply payment to invoice
         * @description Applies a payment to an open invoice matched by invoiceNumber and clientName.
         */
        post: operations["createInvoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/opportunities/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create opportunity */
        post: operations["createOpportunity"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/invoices/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create invoice
         * @description Creates and optionally sends an invoice with line items. When sendTo.send is false or omitted the invoice stays in DRAFT.
         */
        post: operations["createInvoice_1"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/formSubmissions/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create form submission
         * @description Submits a lead or discovery form by name, creating a pipeline entry.
         */
        post: operations["crateFormSubmission"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/expenses/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create expense */
        post: operations["createExpense"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/deliverable/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Approve deliverable
         * @description Approves a project deliverable identified by client, project and deliverable name.
         */
        post: operations["createTimerEvent_1"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/contacts/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create contact */
        post: operations["createContact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/clients/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create client */
        post: operations["searchClients"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/calendar/createOrUpdate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create or update calendar event
         * @description Creates a calendar event, or updates it when eventId is supplied.
         */
        post: operations["createOrUpdateCalendarEvent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/attachments/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach file (multipart upload)
         * @description Uploads a file (multipart/form-data) and attaches it to a record.
         */
        post: operations["uploadAttachment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/attachments/createFromUrl": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Attach file from URL
         * @description Fetches a file from a public URL and attaches it to a record.
         */
        post: operations["uploadAttachment_1"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/tickets/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update ticket status
         * @description Changes only the workflow status of the ticket identified by id or number.
         */
        patch: operations["updateTicketStatus"];
        trace?: never;
    };
    "/public/action/tasks/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update task (partial)
         * @description Merges the given fields into the task identified by id.
         */
        patch: operations["patchTask"];
        trace?: never;
    };
    "/public/api/customFields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getCustomFields"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/api/auth": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["validateZapierAuth"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/vendors/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List vendor names */
        get: operations["getVendorNames"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/users/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List workspace users */
        get: operations["getPayableInvoices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/tickets/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search tickets
         * @description Case-insensitive matching on ticket subject, status, summary, and number. Pass id or ticketNumber for an exact lookup.
         */
        get: operations["searchTickets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/tickets/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List tickets
         * @description Lists tickets, optionally filtered by client, open state, or archive state.
         */
        get: operations["listTickets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/tasks/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search tasks
         * @description Case-insensitive matching on task name and description. Pass id for an exact lookup.
         */
        get: operations["searchTasks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/tasks/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List tasks
         * @description Lists tasks, optionally filtered by project, client, status, or archive state.
         */
        get: operations["listTasks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/taskStages/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project task stages
         * @description Lists task stages for the requested project type, or for the default project type when projectTypeId is omitted.
         */
        get: operations["getTaskStages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/projects/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search projects
         * @description query is an exact client name and returns that client's projects (404 if no such client). Pass id for an exact single-record lookup. Omit both to list all projects.
         */
        get: operations["searchProjects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/projectTypes/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project types
         * @description Lists the workspace's project types, including their project fields, task fields, and task stages.
         */
        get: operations["getProjectTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/pipelineStages/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List pipeline stages */
        get: operations["getPipelineStages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/payableInvoices/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search payable invoices
         * @description Lists outstanding invoices including line items. query is an exact client name (empty array if no such client). Pass id for an exact single-record lookup.
         */
        get: operations["getPayableInvoices_1"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/invoiceTemplates/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List invoice templates */
        get: operations["getInvoiceTemplates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/formNames/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List form names */
        get: operations["getFormNames"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/emailTemplates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List email template IDs and names
         * @description Returns workspace email template IDs and names. Use an id with GET /public/action/emailTemplates/{templateId} to retrieve raw content. The legacy /emailTemplates/list endpoint continues to return names only.
         */
        get: operations["listEmailTemplateDetails"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/emailTemplates/{templateId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get raw email template content
         * @description Returns the template id, name, subject, and htmlContent from the API key's workspace. Tokens are returned unchanged; this endpoint does not render tokens or send email.
         */
        get: operations["getEmailTemplate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/emailTemplates/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List email templates */
        get: operations["getEmailTemplates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/contacts/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search contacts
         * @description Term is matched (contains, case-insensitive) against email, first name and last name. Pass id for an exact single-record lookup. Omit both to list all active contacts.
         */
        get: operations["searchContacts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/clients/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search clients
         * @description Case-insensitive matching: client name and phone (starts-with), contact email and phone (starts-with), contact full name (contains). Pass id for an exact single-record lookup.
         */
        get: operations["searchClients_1"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/clients/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List clients
         * @description Lists all active clients in the workspace.
         */
        get: operations["getClientList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/agreements/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search agreements
         * @description Read-only. Lists agreements, optionally filtered by clientId. Pass id for an exact single-record lookup.
         */
        get: operations["searchAgreements"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/account/{accountId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get account (supplier) info
         * @description Returns the workspace identity (name, address, taxId, tax label, currency) for the given accountId. The accountId must match the API key's workspace. No bank details or payment-processor ids are returned.
         */
        get: operations["getAccountInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/action/calendar/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete calendar event */
        delete: operations["deleteCalendarEvent"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AccountingIntegrationKeys: {
            quickbooksId?: string;
            xeroId?: string;
        };
        ClientInfo: {
            id?: string;
            name?: string;
            initials?: string;
            address1?: string;
            address2?: string;
            city?: string;
            locality?: string;
            postal?: string;
            country?: string;
            phone?: string;
            color?: string;
            taxId?: string;
            website?: string;
            contact?: components["schemas"]["Contact"];
            /** Format: int64 */
            roundingIncrement?: number;
            /** Format: double */
            depositBalance?: number;
            customInfo?: boolean;
            customValues?: components["schemas"]["CustomValue"][];
        };
        ClientMicro: {
            /** Format: int64 */
            accountId?: number;
            id?: string;
            name?: string;
            initials?: string;
            s3LogoFile?: string;
            logo?: string;
            color?: string;
        };
        ClientMini: {
            /** Format: int64 */
            accountId?: number;
            sampleData?: boolean;
            id?: string;
            /** @enum {string} */
            clientType?: "Client" | "Prospect";
            name?: string;
            initials?: string;
            locality?: string;
            country?: string;
            color?: string;
            address1?: string;
            address2?: string;
            city?: string;
            postal?: string;
            website?: string;
            phone?: string;
            s3LogoFile?: string;
            taxId?: string;
            projects?: components["schemas"]["ProjectMini"][];
            /** Format: double */
            hourlyAmount?: number;
            archive?: boolean;
            currency?: string;
            logo?: string;
            leadSource?: string;
            /** Format: double */
            defaultTaxRate?: number;
            defaultTaxRuleId?: string;
            /** @enum {string} */
            whoPaysCardFees?: "Client" | "Freelancer" | "Split";
            customValues?: components["schemas"]["CustomValue"][];
            contact?: components["schemas"]["Contact"];
        };
        Comment: {
            id?: string;
            author?: string;
            authorId?: string;
            comment?: string;
            /** @enum {string} */
            format?: "Markdown" | "HTML";
            clientComment?: boolean;
            edited?: boolean;
            privateComment?: boolean;
            sendEmail?: boolean;
            /** Format: date-time */
            timestamp?: string;
        };
        Contact: {
            id?: string;
            /** Format: int64 */
            accountId: number;
            clientId?: string;
            firstName?: string;
            lastName?: string;
            role?: string;
            phone?: string;
            email?: string;
            mobile?: string;
            notes?: string;
            defaultContact?: boolean;
            invoiceContact?: boolean;
            portalAccess?: boolean;
            /** @description Custom-field values */
            customValues?: components["schemas"]["CustomValue"][];
            searchObject?: components["schemas"]["SearchObject"];
            emulated?: boolean;
        };
        CurrencyRate: {
            currency?: string;
            /** Format: double */
            rate?: number;
        };
        CustomValue: {
            /** @description Id of the custom field definition */
            fieldId?: string;
            /**
             * @description Stable key used to match the field
             * @example account_manager
             */
            mappingKey?: string;
            /**
             * @description Human-readable field name
             * @example Account Manager
             */
            fieldName?: string;
            /** @description The value (string, number, boolean, ...) */
            value?: unknown;
            /**
             * @description The custom field data type
             * @enum {string}
             */
            type?: "Text" | "Numeric" | "Currency" | "Date" | "Select" | "Radio" | "Checkbox" | "Link" | "Phone" | "Email";
            valueAsString?: string;
        };
        EventLog: {
            user?: string;
            events?: string[];
            clientEvent?: boolean;
            /** Format: date-time */
            timestamp?: string;
        };
        FeeSchedule: {
            /** @enum {string} */
            feeType: "Hourly" | "Fixed Price" | "Retainer" | "Per Item";
            /** Format: double */
            amount?: number;
            /** @enum {string} */
            retainerSchedule?: "Weekly" | "Bi-Weekly" | "Monthly" | "Quarterly" | "Bi-Annually" | "Annually" | "As Needed";
            /** Format: double */
            estimateMax?: number;
            /** Format: double */
            estimateMin?: number;
            /** Format: date */
            retainerStart?: string;
            /** @enum {string} */
            retainerTiming?: "Advanced" | "Arrears";
            /** Format: int32 */
            retainerPeriods?: number;
            /** Format: double */
            retainerOverageRate?: number;
            taxable?: boolean;
            fromProposalId?: string;
            /** Format: date-time */
            fromProposalSignedDate?: string;
            /** Format: date-time */
            updatedDate?: string;
            updatedBy?: string;
            retainerActive?: boolean;
        };
        PaymentHistory: {
            invoiceId?: string;
            clientId?: string;
            /** Format: int64 */
            invoiceNumber?: number;
            invoiceNumberFormatted?: string;
            /** @enum {string} */
            invoiceStatus?: "INIT" | "DRAFT" | "SENT" | "PARTIAL" | "PAID" | "PENDING" | "VOIDED" | "WRITE-OFF";
            /** @enum {string} */
            status?: "INIT" | "DRAFT" | "SENT" | "PARTIAL" | "PAID" | "PENDING" | "VOIDED" | "WRITE-OFF";
            clientInfo?: components["schemas"]["ClientInfo"];
            /** Format: date */
            invoiceDate?: string;
            /** Format: date */
            dateCreated?: string;
            /** Format: date */
            dateSent?: string;
            /** Format: date */
            dateDue?: string;
            /** Format: double */
            amount?: number;
            /** Format: double */
            localAmount?: number;
            description?: string;
            currency?: string;
            retainerPeriod?: components["schemas"]["RetainerPeriod"];
            integrationKeys?: components["schemas"]["AccountingIntegrationKeys"];
        };
        Product: {
            id?: string;
            /** Format: int64 */
            accountId: number;
            productName?: string;
            description?: string;
            unit?: string;
            /** Format: double */
            rate?: number;
            hourly?: boolean;
            taxable?: boolean;
            deposit?: boolean;
            /** @enum {string} */
            descriptionFormat?: "Markdown" | "HTML";
            folder?: string;
            currencyRates?: components["schemas"]["CurrencyRate"][];
        };
        Project: {
            id?: string;
            /** Format: int64 */
            accountId: number;
            clientId: string;
            projectTypeId?: string;
            name: string;
            description?: string;
            /** @enum {string} */
            portalAccess?: "Full access" | "Read only" | "Overview" | "None";
            portalAccessAssignedOnly?: boolean;
            showTimeWorkedInPortal?: boolean;
            projectOwners?: number[];
            /** Format: date-time */
            dateCreated: string;
            /** Format: date-time */
            dateCompleted?: string;
            proposalId?: string;
            proposalName?: string;
            /** Format: int32 */
            proposalVersion?: number;
            active?: boolean;
            /** Format: date */
            startDate?: string;
            /** Format: date */
            dueDate?: string;
            hexColor?: string;
            feeSchedule?: components["schemas"]["FeeSchedule"];
            clientMini?: components["schemas"]["ClientMini"];
            /** @description Custom-field values */
            customValues?: components["schemas"]["CustomValue"][];
        };
        ProjectDeliverableMini: {
            id?: string;
            clientId?: string;
            projectId?: string;
            projectTypeId?: string;
            parentTaskId?: string;
            /** Format: int32 */
            subTaskSort?: number;
            project?: components["schemas"]["ProjectMicro"];
            client?: components["schemas"]["ClientMicro"];
            name?: string;
            statusId?: string;
            status?: string;
            /** @enum {string} */
            descriptionFormat?: "Markdown" | "HTML";
            /** Format: int32 */
            priority?: number;
            /** @enum {string} */
            taskPriority?: "Low" | "Normal" | "Medium" | "High" | "Urgent";
            description?: string;
            /** Format: int64 */
            assignedTo?: number;
            assignedToList?: number[];
            approvalRequired?: boolean;
            product?: components["schemas"]["Product"];
            /** Format: double */
            quantity?: number;
            invoiceId?: string;
            invoiceNumber?: string;
            ticketId?: string;
            initialWorkflowComplete?: boolean;
            customValues?: components["schemas"]["CustomValue"][];
            comments?: components["schemas"]["Comment"][];
            events?: components["schemas"]["EventLog"][];
            /** Format: date */
            startDate?: string;
            /** Format: date */
            dueDate?: string;
            /** Format: date-time */
            created?: string;
            /** Format: date-time */
            completed?: string;
            tasks?: components["schemas"]["Task"][];
            archived?: boolean;
            /** Format: int32 */
            kanbanSort?: number;
            isSubTask?: boolean;
        };
        ProjectMicro: {
            /** Format: int64 */
            accountId?: number;
            id?: string;
            clientId?: string;
            projectTypeId?: string;
            name?: string;
            active?: boolean;
            hexColor?: string;
        };
        ProjectMini: {
            id?: string;
            /** Format: int64 */
            accountId?: number;
            projectTypeId?: string;
            sampleData?: boolean;
            clientId?: string;
            name?: string;
            active?: boolean;
            /** Format: date */
            startDate?: string;
            /** Format: date */
            dueDate?: string;
            /** Format: date-time */
            dateCreated?: string;
            client?: unknown;
            leadGenArchived?: boolean;
            feeSchedule?: components["schemas"]["FeeSchedule"];
            proposalId?: string;
            proposalName?: string;
            hexColor?: string;
            /** @enum {string} */
            portalAccess?: "Full access" | "Read only" | "Overview" | "None";
            showTimeWorkedInPortal?: boolean;
            portalAccessAssignedOnly?: boolean;
            projectOwners?: number[];
            customValues?: components["schemas"]["CustomValue"][];
            paymentHistory?: components["schemas"]["PaymentHistory"][];
            files?: components["schemas"]["S3File"][];
            deliverables?: components["schemas"]["ProjectDeliverableMini"][];
        };
        RetainerPeriod: {
            /** Format: date */
            start?: string;
            /** Format: date */
            end?: string;
        };
        S3File: {
            region?: string;
            bucket?: string;
            path?: string;
            fileName?: string;
            /** @enum {string} */
            fileType?: "SVG" | "JPG" | "GIF" | "JSON" | "AI" | "INDD" | "JS" | "CSV" | "TXT" | "AVI" | "HTML" | "MP3" | "MP4" | "RTF" | "XML" | "CSS" | "PSD" | "PNG" | "PDF" | "DOC" | "XLS" | "PPT" | "ZIP" | "EML" | "FILE";
            /** Format: date-time */
            timestamp?: string;
            signedUrl?: string;
            fileIconUrl?: string;
        };
        SearchObject: {
            id?: string;
            /** Format: int64 */
            accountId?: number;
            /** @enum {string} */
            type?: "CLIENT" | "CONTACT" | "PROJECT" | "AGREEMENT" | "OPPORTUNITY" | "INVOICE" | "TICKET" | "FORM" | "MEETING" | "TASK" | "FILE";
            clientId?: string;
            archived?: boolean;
            /** Format: int32 */
            priority?: number;
            label?: string;
            /** Format: date-time */
            timestamp?: string;
            /** Format: date */
            date?: string;
            metaData?: {
                [key: string]: string;
            };
            vector_search?: number[];
            content?: string;
        };
        Task: {
            id: string;
            description?: string;
            complete?: boolean;
        };
        ErrorDetails: {
            /** Format: int32 */
            status?: number;
            error?: string;
            /** Format: date-time */
            timestamp?: string;
            message?: string;
            path?: string;
            detail?: string;
        };
        Answer: {
            id?: string;
            fieldKey?: string;
            fieldType?: string;
            question?: string;
            answer?: unknown;
        };
        FormData: {
            firstName?: string;
            lastName?: string;
            email?: string;
            phone?: string;
            role?: string;
            businessName?: string;
            website?: string;
            address1?: string;
            address2?: string;
            city?: string;
            locality?: string;
            postal?: string;
            country?: string;
            taxId?: string;
            sourceUrl?: string;
            opportunityId?: string;
            templateId?: string;
            cardTokenId?: string;
            leadSource?: string;
            clientId?: string;
            answers?: components["schemas"]["Answer"][];
            contactIfNull?: components["schemas"]["Contact"];
        };
        LongDuration: {
            /** Format: int64 */
            duration?: number;
            /** @enum {string} */
            timeUnit?: "HOURS" | "DAYS" | "WEEKS" | "MONTHS" | "YEARS";
        };
        Opportunity: {
            id?: string;
            /** Format: int64 */
            accountId?: number;
            clientId?: string;
            /** @description Pipeline stage id (see List Pipeline Stages) */
            statusId?: string;
            name?: string;
            description?: string;
            assignedTo?: number[];
            /** @enum {string} */
            format?: "Markdown" | "HTML";
            /** Format: int32 */
            sentiment?: number;
            /** Format: double */
            value?: number;
            /** @enum {string} */
            timePeriod?: "OneTime" | "Day" | "Week" | "Month" | "Quarter" | "SemiAnnual" | "Year";
            /** Format: int64 */
            periods?: number;
            /** Format: date */
            estCloseDate?: string;
            /** Format: date */
            actualCloseDate?: string;
            formData?: components["schemas"]["FormData"];
            archive?: boolean;
            toDos?: components["schemas"]["ToDoItem"][];
            /** @description Custom-field values */
            customValues?: components["schemas"]["CustomValue"][];
            /** Format: date-time */
            created?: string;
            /** Format: date-time */
            wonOn?: string;
            client?: components["schemas"]["ClientMini"];
            statusLabel?: string;
        };
        ToDoItem: {
            id?: string;
            item?: string;
            complete?: boolean;
            /** Format: date */
            dueDate?: string;
            /** Format: date-time */
            dateCompleted?: string;
            relativeDueDate?: components["schemas"]["LongDuration"];
            scopeId?: string;
        };
        Expense: {
            id?: string;
            recurringRunKey?: string;
            /** Format: int64 */
            accountId: number;
            vendorId?: string;
            clientId?: string;
            projectId?: string;
            /** Format: double */
            amount: number;
            /** Format: double */
            taxRate?: number;
            taxInclusive?: boolean;
            billNo?: string;
            category?: string;
            /** Format: date-time */
            dateCreated?: string;
            /** Format: date */
            paidDate?: string;
            /** Format: date */
            dueDate?: string;
            currency?: string;
            exchangeRate?: number;
            paid?: boolean;
            description?: string;
            notes?: string;
            reimbursable?: boolean;
            /** Format: double */
            markupPercent?: number;
            invoiceId?: string;
            invoiceNumber?: string;
            integrationKeys?: components["schemas"]["AccountingIntegrationKeys"];
            sampleData?: boolean;
            vendor?: components["schemas"]["Vendor"];
            client?: components["schemas"]["ClientMini"];
            project?: components["schemas"]["ProjectMini"];
            /** Format: double */
            localAmount?: number;
            /** Format: double */
            localTax?: number;
            /** Format: double */
            localPreTax?: number;
            /** Format: double */
            localTotalWithMarkup?: number;
            /** Format: double */
            tax?: number;
            /** Format: double */
            markupAmount?: number;
            expenseLabel?: string;
            /** Format: double */
            total?: number;
            /** Format: double */
            totalPreTax?: number;
            integrationExpense?: boolean;
            /** Format: double */
            totalWithMarkup?: number;
        };
        Vendor: {
            id?: string;
            /** Format: int64 */
            accountId: number;
            sampleData?: boolean;
            name?: string;
            contact?: components["schemas"]["Contact"];
            address1?: string;
            address2?: string;
            city?: string;
            locality?: string;
            postal?: string;
            country?: string;
            website?: string;
            notes?: string;
            /** @enum {string} */
            format?: "Markdown" | "HTML";
            taxId?: string;
            track1099?: boolean;
            importRecordId?: string;
            attachments?: components["schemas"]["S3File"][];
            /** Format: double */
            balanceDue?: number;
        };
        Client: {
            id?: string;
            /** Format: int64 */
            accountId: number;
            name: string;
            /**
             * @description Client or Prospect
             * @enum {string}
             */
            clientType?: "Client" | "Prospect";
            initials?: string;
            address1?: string;
            address2?: string;
            city?: string;
            locality?: string;
            postal?: string;
            country?: string;
            website?: string;
            phone?: string;
            color?: string;
            logo?: string;
            /** @description Client tax identifier */
            taxId?: string;
            leadSource?: string;
            archive?: boolean;
            paymentTerms?: components["schemas"]["PaymentTerms"];
            payInstructions?: string;
            /** Format: double */
            hourlyAmount?: number;
            /** Format: double */
            defaultTaxRate?: number;
            defaultTaxRuleId?: string;
            /** Format: int64 */
            roundingIncrement?: number;
            currency?: string;
            activityInitialized?: boolean;
            /** @description Custom-field values */
            customValues?: components["schemas"]["CustomValue"][];
            /** Format: date-time */
            created?: string;
            peppolCompliant?: boolean;
            notes?: string;
            /** @description Request-only flag: notify the workspace owner after create */
            notifyOnCreate?: boolean;
            contacts?: components["schemas"]["Contact"][];
            customValue?: components["schemas"]["CustomValue"];
        };
        PaymentTerms: {
            /** Format: int32 */
            paymentDays?: number;
            /** Format: double */
            latePaymentFee: number;
            /** Format: double */
            depositAmount?: number;
            /** @enum {string} */
            depositType?: "No deposit" | "Fixed amount" | "Percentage";
            /** Format: double */
            hourlyAmount?: number;
            /** @enum {string} */
            whoPaysCardFees?: "Client" | "Freelancer" | "Split";
            fromProposalId?: string;
            /** Format: date-time */
            fromProposalSignedDate?: string;
            /** Format: date-time */
            updatedDate?: string;
            updatedBy?: string;
        };
        RestHook: {
            id?: string;
            /** @enum {string} */
            type: "ClientCreate" | "ClientUpdate" | "ClientDelete" | "InvoiceSent" | "InvoiceVoided" | "InvoiceWriteOff" | "PaymentReceived" | "AgreementSent" | "AgreementViewed" | "AgreementSigned" | "ProposalSent" | "ProposalViewed" | "ProposalSigned" | "ProjectCreate" | "ProjectUpdate" | "ProjectComplete" | "TimerCreate" | "TimerUpdate" | "TimerDelete" | "FormCompleted" | "MeetingScheduled" | "MeetingUpdated" | "MeetingCancelled" | "DeliverableApproval" | "DeliverableCreate" | "DeliverableUpdate" | "DeliverableDelete" | "OpportunityCreate" | "OpportunityUpdate" | "OpportunityDelete" | "TicketCreate" | "TicketUpdate" | "TicketDelete" | "TicketClose" | "TicketComment";
            hookUrl: string;
            filters?: {
                [key: string]: string;
            };
            enabled?: boolean;
            /** Format: date-time */
            statusTime?: string;
            statusMessage?: string;
        };
        TimerCreate: {
            /**
             * Format: date-time
             * @description Start timestamp
             * @example 2026-07-08T09:00:00Z
             */
            timerStart: string;
            /**
             * Format: date-time
             * @description End timestamp
             * @example 2026-07-08T10:30:00Z
             */
            timerEnd: string;
            /** @description Client name, exact match */
            clientName?: string;
            /** @description Project name, exact match */
            projectName?: string;
            /** @description Deliverable name, exact match */
            deliverableName?: string;
            /** @description Free-text notes */
            notes?: string;
            /** @description User the time is logged for */
            userEmail?: string;
            /** @description Create the client if it does not exist */
            createClient?: boolean;
            /** @description Create the project if it does not exist */
            createProject?: boolean;
            /** @description Create the deliverable if it does not exist */
            createDeliverable?: boolean;
        };
        TimerEvent: {
            id?: string;
            /** Format: int64 */
            accountId: number;
            sampleData?: boolean;
            /** Format: int64 */
            userId: number;
            /** Format: date-time */
            timerStart?: string;
            /** Format: date-time */
            timerEnd?: string;
            /** Format: date-time */
            pausedAt?: string;
            userFullName?: string;
            notes?: string;
            /** @enum {string} */
            format?: "Markdown" | "HTML";
            clientId?: string;
            projectId?: string;
            deliverableId?: string;
            ticketId?: string;
            clientName?: string;
            projectName?: string;
            deliverableName?: string;
            ticketName?: string;
            /** Format: date-time */
            timestamp?: string;
            /** Format: date-time */
            timestampUpdated?: string;
            billable?: boolean;
            /** Format: int64 */
            pausedSeconds?: number;
            invoiceId?: string;
            invoiceNumber?: string;
            importRecordId?: string;
            feeSchedule?: components["schemas"]["FeeSchedule"];
            customGroupFieldValue?: string;
            wasRounded?: boolean;
            /** Format: int64 */
            duration?: number;
        };
        TicketCreate: {
            /**
             * @description Email of the requesting user
             * @example jane@acme.example
             */
            userEmail?: string;
            /** @description Ticket type label */
            ticketType?: string;
            /**
             * @description Ticket subject
             * @example Cannot log in
             */
            subject?: string;
            /** @description Initial comment / body */
            comment?: string;
            /**
             * Format: date
             * @description Optional due date
             */
            dueDate?: string;
            /** @description Structured form data attached to the ticket */
            formData?: components["schemas"]["FormData"];
        };
        Ticket: {
            id?: string;
            /** Format: int64 */
            accountId?: number;
            clientId?: string;
            /** Format: int64 */
            clientContactId?: number;
            /** Format: int64 */
            ticketNumber?: number;
            ccList?: string[];
            assignedTo?: number[];
            mergedTickets?: string[];
            /** Format: date */
            dueDate?: string;
            subject?: string;
            open?: boolean;
            type?: string;
            status?: string;
            unread?: boolean;
            unreadClient?: boolean;
            lastComment?: string;
            formData?: components["schemas"]["FormData"];
            summary?: string;
            /** Format: date-time */
            created?: string;
            /** Format: date-time */
            updated?: string;
            /** Format: date-time */
            closed?: string;
            /** Format: date-time */
            snoozedUntil?: string;
            archived?: boolean;
            client?: components["schemas"]["ClientMini"];
        };
        TicketComment: {
            id?: string;
            /** Format: int64 */
            accountId?: number;
            ticketId?: string;
            clientId?: string;
            /** @enum {string} */
            commentType?: "PUBLIC" | "PRIVATE";
            /** Format: int64 */
            commentBy?: number;
            commentUserEmail?: string;
            commentUserName?: string;
            attachments?: components["schemas"]["S3File"][];
            comment?: string;
            fromEmail?: boolean;
            /** Format: date-time */
            created?: string;
            /** Format: date-time */
            updated?: string;
            /** @enum {string} */
            commentFormat?: "PlainText" | "HTML";
        };
        TicketWrapper: {
            ticket?: components["schemas"]["Ticket"];
            comments?: components["schemas"]["TicketComment"][];
        };
        TicketCommentCreate: {
            /**
             * Format: int64
             * @description Number of the ticket to comment on
             * @example 1042
             */
            ticketNumber: number;
            /** @description Email of the commenting user */
            userEmail?: string;
            /** @description If true the comment is internal-only */
            privateComment?: boolean;
            /** @description Comment body */
            comment: string;
        };
        TaskCreate: {
            /**
             * @description Task name
             * @example Design homepage
             */
            name: string;
            /** @description Client name, exact match */
            clientName?: string;
            /** @description Project the task belongs to, by exact name */
            projectName?: string;
            /** @description Task stage label (see List Project Task Stages) */
            status?: string;
            /** @description Task description */
            description?: string;
            /**
             * Format: date
             * @description Due date
             */
            dueDate?: string;
            /**
             * Format: date
             * @description Start date
             */
            startDate?: string;
            /**
             * Format: int32
             * @description Priority
             */
            priority?: number;
            /** @description Sub-task names */
            tasks?: string[];
            /** @description Emails of the users to assign */
            assignedTo?: string[];
            /** @description Custom-field values keyed by field name */
            customValues?: {
                [key: string]: string;
            };
        };
        DeliverableApproval: {
            id?: string;
            approvalStatus?: string;
            /** Format: date-time */
            approvedAt?: string;
            approverName?: string;
            approverEmail?: string;
        };
        ProjectDeliverable: {
            id?: string;
            recurringRunKey?: string;
            /** Format: int64 */
            accountId: number;
            sampleData?: boolean;
            clientId?: string;
            projectId?: string;
            projectTypeId?: string;
            name?: string;
            statusId?: string;
            ticketId?: string;
            description?: string;
            /** @enum {string} */
            descriptionFormat?: "Markdown" | "HTML";
            /** @enum {string} */
            type?: "Primary" | "SubTask";
            parentTaskId?: string;
            /** Format: int32 */
            subTaskSort?: number;
            /** Format: date */
            startDate?: string;
            /** Format: date */
            dueDate?: string;
            /**
             * Format: int64
             * @deprecated
             */
            assignedTo?: number;
            assignedToList?: number[];
            tasks?: components["schemas"]["Task"][];
            comments?: components["schemas"]["Comment"][];
            events?: components["schemas"]["EventLog"][];
            files?: components["schemas"]["S3File"][];
            approvals?: components["schemas"]["DeliverableApproval"][];
            customValues?: components["schemas"]["CustomValue"][];
            archived?: boolean;
            approvalRequired?: boolean;
            /** Format: date-time */
            approvalRequestedAt?: string;
            product?: components["schemas"]["Product"];
            /** Format: double */
            quantity?: number;
            /** Format: int32 */
            kanbanSort?: number;
            /** Format: int32 */
            priority?: number;
            /** @enum {string} */
            taskPriority?: "Low" | "Normal" | "Medium" | "High" | "Urgent";
            isDeleted?: boolean;
            invoiceId?: string;
            invoiceNumber?: string;
            importRecordId?: string;
            initialSetupTask?: boolean;
            initialWorkflowComplete?: boolean;
            /** Format: date-time */
            created?: string;
            /** Format: date-time */
            completed?: string;
            isSubTask?: boolean;
        };
        ProjectCreate: {
            /**
             * @description Project name
             * @example Website Redesign
             */
            name: string;
            /**
             * @description Client the project belongs to, by exact name
             * @example Acme Kft.
             */
            clientName: string;
            /**
             * Format: date
             * @description Project start date
             * @example 2026-07-15
             */
            startDate?: string;
            /**
             * Format: date
             * @description Project due date
             */
            dueDate?: string;
            /**
             * @description Client-portal visibility
             * @enum {string}
             */
            portalAccess?: "Full access" | "Read only" | "Overview" | "None";
            /** @description Fee schedule configuration */
            feeSchedule?: components["schemas"]["FeeSchedule"];
            /** @description Show logged time in the client portal */
            showTimeWorkedInPortal?: boolean;
            /** @description Project template to apply, by name */
            templateName?: string;
            /** @description Custom-field values keyed by field name */
            customValues?: {
                [key: string]: string;
            };
        };
        PaymentCreate: {
            /**
             * @description Formatted invoice number to apply the payment to
             * @example E-2026-042
             */
            invoiceNumber: string;
            /**
             * @description Client name, exact match
             * @example Acme Kft.
             */
            clientName: string;
            /**
             * Format: date
             * @description Payment date
             * @example 2026-08-05
             */
            date?: string;
            /**
             * Format: double
             * @description Payment amount
             * @example 1270
             */
            amount: number;
            /**
             * @description Informational payment method label
             * @enum {string}
             */
            paymentType?: "STRIPE" | "CHECK" | "BANK_TRANSFER" | "CASH" | "VENMO" | "PAYPAL" | "ZELLE" | "APP_PAYOUT" | "CREDIT_CARD" | "OTHER";
            /** @description External reference number */
            referenceNumber?: string;
            /** @description Free-text memo */
            memo?: string;
        };
        OpportunityCreate: {
            /**
             * @description Opportunity name
             * @example Acme retainer
             */
            name: string;
            /** @description Description */
            description?: string;
            /** @description Associated client, by exact name */
            clientName?: string;
            /**
             * @description Pipeline stage name (see List Pipeline Stages)
             * @example Proposal
             */
            stageName?: string;
            /**
             * Format: double
             * @description Estimated value
             * @example 12000
             */
            value?: number;
            /**
             * Format: date
             * @description Estimated close date
             */
            estCloseDate?: string;
            /** @description Structured lead information */
            leadInfo?: components["schemas"]["FormData"];
            /** @description Associated to-do items */
            toDos?: components["schemas"]["ToDoItem"][];
            /** @description Custom-field values keyed by field name */
            customValues?: {
                [key: string]: string;
            };
        };
        InvoiceCreate: {
            /**
             * @description Optional explicit invoice number
             * @example E-2026-042
             */
            invoiceNumber?: string;
            /**
             * @description Client to bill, matched by exact name
             * @example Acme Kft.
             */
            clientName: string;
            /** @description Invoice template to apply (see List Invoice Templates) */
            templateName?: string;
            /** @description Invoice description */
            description?: string;
            /**
             * Format: date
             * @description Due date
             * @example 2026-08-01
             */
            dueDate?: string;
            /**
             * Format: double
             * @description Flat tax rate percentage applied to taxable items
             * @example 27
             */
            taxRate?: number;
            /**
             * Format: double
             * @description Discount percentage
             */
            discountPercent?: number;
            /** @description Payment instructions shown on the invoice */
            paymentInstructions?: string;
            /** @description Invoice line items */
            items?: components["schemas"]["LineItem"][];
            /** @description Send configuration. When send is false or omitted the invoice stays in DRAFT */
            sendTo?: components["schemas"]["SendTo"];
        };
        LineItem: {
            /**
             * @description Line description
             * @example Website design
             */
            description?: string;
            /**
             * Format: double
             * @description Quantity
             * @example 1
             */
            quantity?: number;
            /**
             * Format: double
             * @description Price per unit
             * @example 1000
             */
            rate?: number;
            /** @description Whether the line is taxable */
            taxable?: boolean;
            /** @description Project to associate the line with, by exact name */
            projectName?: string;
        };
        SendTo: {
            send?: boolean;
            contacts?: string[];
            emailTemplateName?: string;
        };
        FormSubmissionCreate: {
            /**
             * @description Name of the form being submitted (see List Form Names)
             * @example Contact Us
             */
            formName: string;
            firstName?: string;
            lastName?: string;
            /**
             * @description Submitter email
             * @example jane@acme.example
             */
            email?: string;
            phone?: string;
            role?: string;
            businessName?: string;
            website?: string;
            address1?: string;
            address2?: string;
            city?: string;
            locality?: string;
            postal?: string;
            country?: string;
            sourceUrl?: string;
            /** @description Attribution / lead source */
            leadSource?: string;
            notes?: string;
            /** @description Pipeline stage to place the lead in */
            pipelineStageName?: string;
            /** @description Tax identifier */
            taxId?: string;
            /** @description Structured question and answer pairs */
            answers?: components["schemas"]["Answer"][];
        };
        BaseDiscovery: {
            name: string;
            font?: string;
            accentColor?: string;
            buttonText?: string;
            showLogo?: boolean;
            /** Format: int32 */
            schemaVersion?: number;
            formSettingsV2?: components["schemas"]["FormSettingsV2"];
            schema?: components["schemas"]["SchemaItem"][];
            schemaV2?: (components["schemas"]["Button"] | components["schemas"]["Checkbox"] | components["schemas"]["Container"] | components["schemas"]["DateInput"] | components["schemas"]["Divider"] | components["schemas"]["FileInput"] | components["schemas"]["Html"] | components["schemas"]["ImageBlock"] | components["schemas"]["Logo"] | components["schemas"]["NewPage"] | components["schemas"]["Radio"] | components["schemas"]["Select"] | components["schemas"]["Spacer"] | components["schemas"]["TextArea"] | components["schemas"]["TextBlock"] | components["schemas"]["TextInput"])[];
            confirmationEmailTemplate?: string;
            confirmationRedirect?: string;
            confirmationText?: string;
            pipelineStageId?: string;
            ticketTypeId?: string;
            sendResultsInEmail?: boolean;
            reCaptchaEnabled?: boolean;
            accountLogo?: string;
            accountLogoDark?: string;
        };
        Button: {
            type: "Button";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            redirectUrl?: string;
            text?: string;
            alignment?: string;
            style?: string;
            size?: string;
            color?: string;
            textColor?: string;
        });
        Checkbox: {
            type: "Checkbox";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            question?: string;
            options?: string[];
            formatVertically?: boolean;
        });
        Column: {
            /** Format: int32 */
            pt?: number;
            /** Format: int32 */
            pb?: number;
            /** Format: int32 */
            pr?: number;
            /** Format: int32 */
            pl?: number;
            items?: (components["schemas"]["Button"] | components["schemas"]["Checkbox"] | components["schemas"]["Container"] | components["schemas"]["DateInput"] | components["schemas"]["Divider"] | components["schemas"]["FileInput"] | components["schemas"]["Html"] | components["schemas"]["ImageBlock"] | components["schemas"]["Logo"] | components["schemas"]["NewPage"] | components["schemas"]["Radio"] | components["schemas"]["Select"] | components["schemas"]["Spacer"] | components["schemas"]["TextArea"] | components["schemas"]["TextBlock"] | components["schemas"]["TextInput"])[];
        };
        Condition: {
            fieldName?: string;
            operation?: string;
            answer?: string;
        };
        Container: {
            type: "Container";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            /** Format: int32 */
            columnCount?: number;
            columns?: components["schemas"]["Column"][];
        });
        DateInput: {
            type: "DateInput";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            question?: string;
            placeholder?: string;
        });
        Divider: {
            type: "Divider";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            style?: string;
            color?: string;
            /** Format: int32 */
            weight?: number;
            /** Format: int32 */
            width?: number;
            /** Format: int32 */
            pt?: number;
            /** Format: int32 */
            pb?: number;
        });
        FileInput: {
            type: "FileInput";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            question?: string;
            placeholder?: string;
            multi?: boolean;
            fileTypes?: string[];
        });
        FormSettingsV2: {
            /** Format: int32 */
            fontSize?: number;
            inputStyle?: string;
            fontColor?: string;
            formInputColor?: string;
            backgroundColor?: string;
            /** Format: int32 */
            maxWidth?: number;
            enableDraftSave?: boolean;
            submitText?: string;
            saveDraftText?: string;
            submitIcon?: string;
            draftIcon?: string;
            nextPageText?: string;
            prevPageText?: string;
            nextPageIcon?: string;
            prevPageIcon?: string;
            submitAlignment?: string;
            buttonColor?: string;
            buttonTextColor?: string;
            buttonStyle?: string;
            buttonSize?: string;
            customCss?: string;
        };
        FormSubmission: {
            id?: string;
            /** Format: int64 */
            accountId: number;
            clientId?: string;
            formName?: string;
            /** Format: date-time */
            submittedAt?: string;
            ipLookup?: components["schemas"]["IpLookup"];
            formData?: components["schemas"]["FormData"];
            notes?: string;
            summary?: string;
            leadGenArchived?: boolean;
            isDiscovery?: boolean;
            privateSubmission?: boolean;
            opportunityId?: string;
            files?: components["schemas"]["S3File"][];
            baseDiscovery?: components["schemas"]["BaseDiscovery"];
            submissionToken?: string;
        };
        Html: {
            type: "Html";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            html?: string;
        });
        ImageBlock: {
            type: "ImageBlock";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            /** Format: int32 */
            pt?: number;
            /** Format: int32 */
            pb?: number;
            /** Format: int32 */
            br?: number;
            /** Format: int32 */
            scale?: number;
            alignment?: string;
            url?: string;
        });
        IpLookup: {
            ip?: string;
            city?: string;
            region?: string;
            country?: string;
            countryFlag?: string;
        };
        Logo: {
            type: "Logo";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            /** Format: int32 */
            width?: number;
            alignment?: string;
        });
        NewPage: {
            type: "NewPage";
        } & Omit<components["schemas"]["SchemaItemV2"], "type">;
        Radio: {
            type: "Radio";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            question?: string;
            options?: string[];
            formatVertically?: boolean;
        });
        SchemaItem: {
            id?: string;
            fieldType?: string;
            fieldKey?: string;
            options?: string[];
            hasOther?: boolean;
            htmlHeader?: string;
            htmlText?: string;
            placeHolder?: string;
            response?: string;
            required?: boolean;
        };
        SchemaItemV2: {
            id?: string;
            required?: boolean;
            fieldName?: string;
            /** @enum {string} */
            schemaMapping?: "firstName" | "lastName" | "email" | "phone" | "role" | "businessName" | "website" | "address1" | "address2" | "city" | "locality" | "postal" | "country" | "leadSource" | "taxId";
            conditions?: components["schemas"]["Condition"][];
            conditionalType?: string;
            conditionsEnabled?: boolean;
            type: string;
        };
        Select: {
            type: "Select";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            question?: string;
            placeholder?: string;
            options?: string[];
        });
        Spacer: {
            type: "Spacer";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            /** Format: int32 */
            height?: number;
        });
        TextArea: {
            type: "TextArea";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            question?: string;
            placeholder?: string;
            /** Format: int32 */
            rows?: number;
        });
        TextBlock: {
            type: "TextBlock";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            text?: string;
        });
        TextInput: {
            type: "TextInput";
        } & (Omit<components["schemas"]["SchemaItemV2"], "type"> & {
            question?: string;
            placeholder?: string;
            /** @enum {string} */
            validateFor?: "Email" | "Phone";
        });
        ExpenseCreate: {
            /**
             * Format: date-time
             * @description Expense date
             */
            date?: string;
            /**
             * Format: double
             * @description Amount
             * @example 120
             */
            amount: number;
            /**
             * Format: double
             * @description Markup applied when billed to a client
             */
            markupPercentage?: number;
            /**
             * @description Currency code
             * @example EUR
             */
            currency?: string;
            /** @description Whether the expense is paid */
            paid?: boolean;
            /** @description Whether it is reimbursable / billable */
            reimbursable?: boolean;
            /**
             * @description Expense category
             * @example Software
             */
            category?: string;
            /** @description Bill / receipt number */
            billNo?: string;
            /** @description Short description */
            description?: string;
            /** @description Free-text notes */
            notes?: string;
            /** @description Vendor name */
            vendor?: string;
            /** @description Client to bill, by exact name (optional) */
            clientName?: string;
        };
        ApproveDeliverable: {
            /** @description Client name, exact match */
            clientName: string;
            /** @description Project name, exact match */
            projectName: string;
            /** @description Deliverable to approve, exact match */
            deliverableName: string;
        };
        ContactCreate: {
            /**
             * @description First name
             * @example Jane
             */
            first?: string;
            /**
             * @description Last name
             * @example Doe
             */
            last?: string;
            /**
             * @description Email address
             * @example jane@acme.example
             */
            email?: string;
            /** @description Phone number */
            phone?: string;
            /** @description Free-text notes */
            notes?: string;
            /**
             * @description Client to attach the contact to, by exact name
             * @example Acme Kft.
             */
            clientName?: string;
            /** @description Mark as the client's default contact */
            defaultContact?: boolean;
            /** @description Grant client-portal access */
            portalAccess?: boolean;
            /** @description Include this contact on invoices */
            invoiceContact?: boolean;
        };
        CalendarEvent: {
            /** @description Existing event id to update; omit to create */
            eventId?: string;
            /**
             * Format: date-time
             * @description Event start
             * @example 2026-07-15T14:00:00
             */
            startTime?: string;
            /**
             * Format: date-time
             * @description Event end
             * @example 2026-07-15T15:00:00
             */
            endTime?: string;
            /**
             * @description IANA timezone
             * @example Europe/Budapest
             */
            timezone?: string;
            /** @description All-day event */
            fullDay?: boolean;
            /** @description Mark the time as busy */
            busy?: boolean;
            /**
             * @description Event title
             * @example Kickoff call
             */
            summary?: string;
            /** @description Event description */
            description?: string;
            /** @description Location */
            location?: string;
            /** @description Owner of the event */
            userEmail?: string;
        };
        NativeCalendarEvent: {
            id?: string;
            /** Format: int64 */
            accountId?: number;
            sampleData?: boolean;
            /** Format: int64 */
            userId: number;
            externalId?: string;
            /** Format: date */
            startDate: string;
            startTime?: string;
            /** Format: date */
            endDate: string;
            endTime?: string;
            timezone?: string;
            summary?: string;
            description?: string;
            location?: string;
            dateOnly?: boolean;
            sharedEvent?: boolean;
            busyEvent?: boolean;
            /** @enum {string} */
            format?: "HTML" | "Markdown";
            reminder?: boolean;
            /** Format: int32 */
            remindTime?: number;
            /** @enum {string} */
            remindTimeUnit?: "None" | "Minutes" | "Hours" | "Days";
        };
        TicketStatusUpdate: {
            /** @description Exact ticket id; takes precedence over ticketNumber */
            id?: string;
            /**
             * Format: int64
             * @description Ticket number used when id is omitted
             * @example 1001
             */
            ticketNumber?: number;
            /**
             * @description Workflow status configured for the ticket type
             * @example In Progress
             */
            status: string;
        };
        DynamicField: {
            key?: string;
            label?: string;
        };
        SimpleAccount: {
            /** Format: int64 */
            accountId?: number;
            accountName?: string;
        };
        AuthAccount: {
            /** Format: int64 */
            accountId?: number;
            accountName?: string;
            accountLogo?: string;
            accountLogoDark?: string;
            /** @enum {string} */
            subscriptionState?: "ACTIVE" | "PAUSED" | "EXPIRED" | "CANCELED" | "INACTIVE";
            /** @enum {string} */
            subscriptionType?: "FREE" | "STARTER" | "PAID" | "TEAM" | "NONE";
            /** @enum {string} */
            subscriptionProvider?: "APP_SUMO" | "WEB" | "APPLE" | "GOOGLE" | "NONE";
            pod?: components["schemas"]["Pod"];
            sampleMode?: boolean;
            /** Format: int32 */
            pricingVersion?: number;
            /** Format: date-time */
            trialEndsAt?: string;
            /** Format: date-time */
            created?: string;
            paid?: boolean;
            ltd?: boolean;
            free?: boolean;
            disabled?: boolean;
            inTrial?: boolean;
            restricted?: boolean;
            starter?: boolean;
        };
        ClientAccess: {
            clients?: components["schemas"]["Client"][];
        };
        FeatureAccess: {
            projects?: boolean;
            invoices?: boolean;
            accounting?: boolean;
            pipeline?: boolean;
            agreements?: boolean;
            settings?: boolean;
            timesheets?: boolean;
            tickets?: boolean;
            manageTeamCapacity?: boolean;
        };
        Pod: {
            podId?: string;
            podUrl?: string;
        };
        PortalFeatures: {
            /** Format: int64 */
            accountId?: number;
            projectsEnabled?: boolean;
            invoicesEnabled?: boolean;
            proposalsEnabled?: boolean;
            timeEnabled?: boolean;
            meetingsEnabled?: boolean;
            formsEnabled?: boolean;
            ticketsEnabled?: boolean;
            filesEnabled?: boolean;
        };
        ProjectAccess: {
            /** Format: date-time */
            grantedAt?: string;
            projectId?: string;
        };
        ProjectAccessList: {
            projects?: components["schemas"]["ProjectAccess"][];
        };
        User: {
            /** Format: int64 */
            userId?: number;
            firstName?: string;
            lastName?: string;
            email?: string;
            phone?: string;
            phoneVerified?: boolean;
            uuid?: string;
            profilePicture?: string;
            uploadedPicture?: boolean;
            /** Format: int32 */
            pricingVersion?: number;
            userAccounts?: components["schemas"]["UserAccount"][];
        };
        UserAccount: {
            account?: components["schemas"]["AuthAccount"];
            /** @enum {string} */
            userType?: "OWNER" | "IMPLEMENTER" | "COLLABORATOR" | "AUTH_SERVER" | "FULL_USER" | "RESTRICTED_USER" | "CLIENT_PORTAL";
            projectAccess?: components["schemas"]["ProjectAccessList"];
            clientAccess?: components["schemas"]["ClientAccess"];
            portalFeatures?: components["schemas"]["PortalFeatures"];
            featureAccess?: components["schemas"]["FeatureAccess"];
            clientFeatureMap?: {
                [key: string]: components["schemas"]["PortalFeatures"];
            };
        };
        UserAccountMini: {
            /** Format: int64 */
            accountId?: number;
            /** @enum {string} */
            userType?: "OWNER" | "IMPLEMENTER" | "COLLABORATOR" | "AUTH_SERVER" | "FULL_USER" | "RESTRICTED_USER" | "CLIENT_PORTAL";
            user?: components["schemas"]["User"];
            projectAccess?: components["schemas"]["ProjectAccessList"];
            featureAccess?: components["schemas"]["FeatureAccess"];
            clientAccess?: components["schemas"]["ClientAccess"];
        };
        DeliverableStatus: {
            id: string;
            label: string;
            hexColor: string;
            complete?: boolean;
            clientApproval?: boolean;
            /** Format: int32 */
            clientApprovalReminderDays?: number;
        };
        CustomField: {
            id?: string;
            name?: string;
            mappingKey?: string;
            icon?: string;
            /** @enum {string} */
            type?: "Text" | "Numeric" | "Currency" | "Date" | "Select" | "Radio" | "Checkbox" | "Link" | "Phone" | "Email";
            showOnCard?: boolean;
            options?: string[];
        };
        ProjectType: {
            id?: string;
            /** Format: int64 */
            accountId?: number;
            name?: string;
            isDefaultProjectType?: boolean;
            /** Format: date-time */
            created?: string;
            /** Format: date-time */
            updated?: string;
            deliverableFields?: components["schemas"]["CustomField"][];
            projectFields?: components["schemas"]["CustomField"][];
            statusList?: components["schemas"]["DeliverableStatus"][];
            notifications?: components["schemas"]["ProjectTypeNotifications"];
        };
        ProjectTypeNotifications: {
            deliverableApproval?: string;
            deliverableApprovalReminder?: string;
            deliverableAssigned?: string;
            deliverableComment?: string;
        };
        Stage: {
            id: string;
            label: string;
            hexColor: string;
            /** @enum {string} */
            stageType: "New" | "InProgress" | "OnHold" | "ClosedWon" | "ClosedLost" | "Complete";
            automations?: string[];
        };
        InvoiceLineItem: {
            id?: string;
            description?: string;
            /**
             * Format: double
             * @description Quantity
             * @example 1
             */
            quantity?: number;
            /**
             * Format: double
             * @description Price per unit
             * @example 1000
             */
            unitPrice?: number;
            /**
             * @description Unit label from the linked product, if any
             * @example project
             */
            unit?: string;
            /** @description Whether this line contributes to the invoice-level taxable amount */
            taxable?: boolean;
            /**
             * Format: double
             * @description quantity x unitPrice
             * @example 1000
             */
            lineTotal?: number;
            /** @enum {string} */
            type?: "DEPOSIT" | "HOURS" | "RETAINER" | "OVERAGE" | "ADHOC" | "PROJECT" | "EXPENSE" | "TAX" | "DEPOSIT_APPLIED" | "LATE_FEE" | "SUBSCRIPTION" | "DELIVERABLE" | "CREDIT" | "CONVENIENCE";
            /** @description Whether the line is shown on the rendered invoice */
            visible?: boolean;
            projectId?: string;
            projectName?: string;
            deliverableName?: string;
        };
        InvoiceMini: {
            /** @description Immutable invoice id (use for matching) */
            id?: string;
            /**
             * Format: int64
             * @description Sequential invoice number
             * @example 1042
             */
            invoiceNumber?: number;
            /**
             * @description Human-facing formatted number
             * @example E-2026-042
             */
            invoiceNumberFormatted?: string;
            description?: string;
            /** Format: int64 */
            accountId?: number;
            clientId?: string;
            /** Format: date */
            dateCreated?: string;
            /** Format: date */
            dateSent?: string;
            /** Format: date */
            dateDue?: string;
            /** Format: date */
            dateDueCalculated?: string;
            /** Format: date */
            datePaid?: string;
            clientInfo?: components["schemas"]["ClientInfo"];
            /**
             * @description DRAFT, SENT, PARTIAL, PAID, PENDING, VOIDED or WRITE-OFF
             * @enum {string}
             */
            status?: "INIT" | "DRAFT" | "SENT" | "PARTIAL" | "PAID" | "PENDING" | "VOIDED" | "WRITE-OFF";
            /** @enum {string} */
            invoiceType?: "STANDARD" | "DEPOSIT";
            /** Format: double */
            subTotal?: number;
            /** Format: double */
            convenienceFee?: number;
            /** Format: double */
            lateFee?: number;
            /** Format: double */
            discountAmount?: number;
            /** Format: double */
            creditApplied?: number;
            /**
             * Format: double
             * @description Calculated invoice-level tax amount
             */
            tax?: number;
            /**
             * Format: double
             * @description Effective invoice tax rate, including compounding
             */
            taxPercentage?: number;
            /** @description Selected advanced tax rule; null for a manual percentage */
            taxRule?: {
                id?: string;
                name?: string;
                /** @enum {string} */
                source?: "MOXIE" | "QUICKBOOKS" | "XERO";
                providerId?: string | null;
                components?: components["schemas"]["TaxComponent"][];
                /** Format: double */
                effectiveRate?: number;
            } | null;
            /** @description Calculated invoice-level tax components */
            taxBreakdown?: components["schemas"]["TaxBreakdown"][];
            /** Format: double */
            total?: number;
            /** Format: double */
            localTotal?: number;
            /** Format: double */
            paymentTotal?: number;
            /** Format: double */
            localPaymentTotal?: number;
            /**
             * Format: double
             * @description Remaining amount due
             */
            amountDue?: number;
            /** Format: double */
            localAmountDue?: number;
            currency?: string;
            integrationKeys?: components["schemas"]["AccountingIntegrationKeys"];
            /** @description Public pay/view link for the invoice */
            viewOnlineUrl?: string;
            payments?: components["schemas"]["Payment"][];
            /** @description Invoice line items */
            lineItems?: components["schemas"]["InvoiceLineItem"][];
        };
        Payment: {
            id?: string;
            /** Format: double */
            amount?: number;
            pending?: boolean;
            paidBy?: string;
            /** @enum {string} */
            paymentProvider?: "STRIPE" | "CHECK" | "BANK_TRANSFER" | "CASH" | "VENMO" | "PAYPAL" | "ZELLE" | "APP_PAYOUT" | "CREDIT_CARD" | "OTHER";
            currency?: string;
            exchangeRate?: number;
            referenceNumber?: string;
            memo?: string;
            /** Format: date */
            datePaid?: string;
            /** Format: date-time */
            timestamp?: string;
            integratedPayment?: boolean;
            forcePaidInFull?: boolean;
            integrationKeys?: components["schemas"]["AccountingIntegrationKeys"];
            isFailedPayment?: boolean;
            /** Format: double */
            localAmount?: number;
        };
        TaxBreakdown: {
            id?: string;
            name?: string;
            /** Format: double */
            rate?: number;
            /** Format: int32 */
            order?: number;
            compound?: boolean;
            /** Format: double */
            taxableAmount?: number;
            /** Format: double */
            amount?: number;
        };
        TaxComponent: {
            id?: string;
            providerId?: string | null;
            name?: string;
            /** Format: double */
            rate?: number;
            /** Format: int32 */
            order?: number;
            compound?: boolean;
            /** Format: int32 */
            compoundOnOrder?: number | null;
        };
        AccountMini: {
            /** Format: int64 */
            accountId?: number;
            accountName?: string;
            accountLogo?: string;
            accountLogoDark?: string;
            currency?: string;
            country?: string;
            taxLabel?: string;
            stripeAccountId?: string;
            /** Format: double */
            defaultTaxRate?: number;
            uniqueUrlPath?: string;
            address1?: string;
            address2?: string;
            city?: string;
            locality?: string;
            postal?: string;
            website?: string;
            phone?: string;
            payInstructions?: string;
            taxId?: string;
            enableGeoLocationOnSignature?: boolean;
            /** Format: double */
            baseCardFeeRate?: number;
            /** Format: double */
            splitCardFeeRate?: number;
            timeZone?: string;
        };
        AgreementMini: {
            id?: string;
            /** Format: int64 */
            accountId?: number;
            name?: string;
            client?: components["schemas"]["ClientMini"];
            account?: components["schemas"]["AccountMini"];
            /**
             * @description DRAFT, FINALIZED, DECLINED, VOID or ARCHIVED
             * @enum {string}
             */
            status?: "Draft" | "Finalized" | "Declined" | "Void" | "Archived";
            /** Format: date-time */
            statusTime?: string;
            currency?: string;
            /** Format: date-time */
            dateCreated?: string;
            /**
             * Format: date-time
             * @description When the agreement was fully executed
             */
            dateCompleted?: string;
            lastEvent?: components["schemas"]["EventLog"];
            /** @description True when all parties have signed */
            fullyExecuted?: boolean;
            /** @description Workspace user has signed */
            userSigned?: boolean;
            /** @description Client has signed */
            clientSigned?: boolean;
        };
        ApiEmailTemplateSummary: {
            id?: string;
            name?: string;
        };
        ApiEmailTemplate: {
            id?: string;
            name?: string;
            subject?: string;
            htmlContent?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    updateProject: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Project"];
            };
        };
        responses: {
            /** @description No project with that id exists in the workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
            /** @description The id field is missing from the request body */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    patchProject: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Any subset of the entity fields to change, plus the required id */
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description No project with that id exists in the workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
            /** @description The id field is missing from the request body */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    updateOpportunity: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Opportunity"];
            };
        };
        responses: {
            /** @description No opportunity with that id exists in the workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
            /** @description The id field is missing from the request body */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    patchOpportunity: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Any subset of the entity fields to change, plus the required id */
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description No opportunity with that id exists in the workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
            /** @description The id field is missing from the request body */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    updateExpense: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Expense"];
            };
        };
        responses: {
            /** @description No expense with that id exists in the workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
            /** @description The id field is missing from the request body */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    patchExpense: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Any subset of the entity fields to change, plus the required id */
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description No expense with that id exists in the workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
            /** @description The id field is missing from the request body */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    updateContact: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Contact"];
            };
        };
        responses: {
            /** @description No contact with that id exists in the workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
            /** @description The id field is missing from the request body */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    patchContact: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Any subset of the entity fields to change, plus the required id */
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description No contact with that id exists in the workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
            /** @description The id field is missing from the request body */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    updateClient: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Client"];
            };
        };
        responses: {
            /** @description No client with that id exists in the workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
            /** @description The id field is missing from the request body */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    patchClient: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Any subset of the entity fields to change, plus the required id */
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description No client with that id exists in the workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
            /** @description The id field is missing from the request body */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    confirm: {
        parameters: {
            query?: {
                token?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/html": string;
                };
            };
        };
    };
    unsubscribe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/x-www-form-urlencoded": {
                    token?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/html": string;
                };
            };
        };
    };
    unsubscribeHook: {
        parameters: {
            query?: never;
            header: {
                "X-API-KEY": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RestHook"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    subscribeHook: {
        parameters: {
            query?: never;
            header: {
                "X-API-KEY": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RestHook"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    getSampleData: {
        parameters: {
            query?: never;
            header: {
                "X-API-KEY": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RestHook"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown[];
                };
            };
        };
    };
    createTimerEvent: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TimerCreate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TimerEvent"];
                };
            };
        };
    };
    createTicket: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TicketCreate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TicketWrapper"];
                };
            };
        };
    };
    createTicketComment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TicketCommentCreate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TicketWrapper"];
                };
            };
        };
    };
    creteTask: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TaskCreate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProjectDeliverable"];
                };
            };
        };
    };
    crateProject: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProjectCreate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Project"];
                };
            };
        };
    };
    createInvoice: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PaymentCreate"];
            };
        };
        responses: {
            /** @description Invoice, client or contact could not be located */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    createOpportunity: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OpportunityCreate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Opportunity"];
                };
            };
        };
    };
    createInvoice_1: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InvoiceCreate"];
            };
        };
        responses: {
            /** @description Client, email template or send contacts could not be located */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    crateFormSubmission: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FormSubmissionCreate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FormSubmission"];
                };
            };
        };
    };
    createExpense: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ExpenseCreate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Expense"];
                };
            };
        };
    };
    createTimerEvent_1: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ApproveDeliverable"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProjectDeliverableMini"];
                };
            };
        };
    };
    createContact: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ContactCreate"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Contact"];
                };
            };
        };
    };
    searchClients: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Client"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Client"];
                };
            };
        };
    };
    createOrUpdateCalendarEvent: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CalendarEvent"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NativeCalendarEvent"];
                };
            };
        };
    };
    uploadAttachment: {
        parameters: {
            query: {
                /** @description Id of the object to attach the file to */
                id: string;
                /** @description CLIENT, PROJECT, DELIVERABLE, OPPORTUNITY, EXPENSE or TICKET */
                type: "CLIENT" | "PROJECT" | "DELIVERABLE" | "OPPORTUNITY" | "EXPENSE" | "TICKET";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** Format: binary */
                    file: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    uploadAttachment_1: {
        parameters: {
            query: {
                /** @description Id of the object to attach the file to */
                id: string;
                /** @description CLIENT, PROJECT, DELIVERABLE, OPPORTUNITY, EXPENSE or TICKET */
                type: "CLIENT" | "PROJECT" | "DELIVERABLE" | "OPPORTUNITY" | "EXPENSE" | "TICKET";
                /** @description Publicly reachable URL of the file to fetch */
                fileUrl: string;
                /** @description Name to store the file under */
                fileName: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    updateTicketStatus: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TicketStatusUpdate"];
            };
        };
        responses: {
            /** @description Ticket status updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ticket"];
                };
            };
            /** @description No ticket with that id or number exists in the workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
            /** @description The identifier or status is missing, or the status is invalid */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    patchTask: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Any subset of task fields to change, plus the required id */
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Task updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProjectDeliverable"];
                };
            };
            /** @description No task with that id exists in the workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
            /** @description The id field is missing from the request body */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    getCustomFields: {
        parameters: {
            query: {
                type: string;
            };
            header: {
                "X-API-KEY": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DynamicField"][];
                };
            };
        };
    };
    validateZapierAuth: {
        parameters: {
            query?: never;
            header: {
                "X-API-KEY": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SimpleAccount"];
                };
            };
        };
    };
    getVendorNames: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    getPayableInvoices: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserAccountMini"][];
                };
            };
        };
    };
    searchTickets: {
        parameters: {
            query?: {
                query?: string;
                /** @description Exact ticket id; overrides ticketNumber and query */
                id?: string;
                /** @description Exact ticket number; overrides query */
                ticketNumber?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ticket"][];
                };
            };
        };
    };
    listTickets: {
        parameters: {
            query?: {
                open?: boolean;
                archived?: boolean;
                clientId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Ticket"][];
                };
            };
        };
    };
    searchTasks: {
        parameters: {
            query?: {
                query?: string;
                /** @description Exact task id; overrides query */
                id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProjectDeliverableMini"][];
                };
            };
        };
    };
    listTasks: {
        parameters: {
            query?: {
                projectId?: string;
                clientId?: string;
                statusId?: string;
                archived?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProjectDeliverableMini"][];
                };
            };
        };
    };
    getTaskStages: {
        parameters: {
            query?: {
                /** @description Project type id returned by List project types */
                projectTypeId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeliverableStatus"][];
                };
            };
        };
    };
    searchProjects: {
        parameters: {
            query?: {
                /** @description Exact client name; returns that client's projects */
                query?: string;
                /** @description Exact project id; overrides query */
                id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description query was given but no client with that exact name exists */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    getProjectTypes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProjectType"][];
                };
            };
        };
    };
    getPipelineStages: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Stage"][];
                };
            };
        };
    };
    getPayableInvoices_1: {
        parameters: {
            query?: {
                /** @description Exact client name; returns that client's outstanding invoices */
                query?: string;
                /** @description Exact invoice id; overrides query */
                id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvoiceMini"][];
                };
            };
        };
    };
    getInvoiceTemplates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    getFormNames: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    listEmailTemplateDetails: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiEmailTemplateSummary"][];
                };
            };
        };
    };
    getEmailTemplate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Template id returned by GET /public/action/emailTemplates */
                templateId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiEmailTemplate"];
                };
            };
            /** @description Template not found in the API key's workspace */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getEmailTemplates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    searchContacts: {
        parameters: {
            query?: {
                /** @description Term matched against email, first and last name (contains) */
                query?: string;
                /** @description Exact contact id; overrides query */
                id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Contact"][];
                };
            };
        };
    };
    searchClients_1: {
        parameters: {
            query?: {
                /** @description Free-text term; see operation description for matched fields */
                query?: string;
                /** @description Exact client id; overrides query */
                id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Client"][];
                };
            };
        };
    };
    getClientList: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Client"][];
                };
            };
        };
    };
    searchAgreements: {
        parameters: {
            query?: {
                /** @description Only agreements belonging to this client id */
                clientId?: string;
                /** @description Exact agreement id; overrides clientId */
                id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AgreementMini"][];
                };
            };
        };
    };
    getAccountInfo: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Workspace account id; must match the API key's workspace */
                accountId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The accountId does not match the API key's workspace */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorDetails"];
                };
            };
        };
    };
    deleteCalendarEvent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The eventId of the calendar event to delete */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
