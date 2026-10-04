import type { components } from "./openapi.js";

export type { components, paths, operations } from "./openapi.js";
type Schemas = components["schemas"];
type PatchValue<T> = T extends (infer Item)[] ? PatchValue<Item>[] | null
  : T extends object ? { [K in keyof T]?: PatchValue<T[K]> } | null : T | null;
type PartialUpdate<T> = PatchValue<T> & { id: string; [field: string]: unknown };

export type PaymentTerms = Partial<Schemas["PaymentTerms"]>;
export type Contact = Schemas["Contact"];
export type Client = Schemas["Client"] & { email?: string | null };
export type CustomValue = Schemas["CustomValue"];
export type CreateClientInput = Omit<Partial<Client>, "id" | "accountId" | "paymentTerms" | "contacts" | "email"> & {
  name: string;
  email?: string;
  paymentTerms?: PaymentTerms;
  contacts?: Partial<Contact>[];
};
export type UpdateClientInput = PartialUpdate<Client>;
export type CreateContactInput = Schemas["ContactCreate"] & { clientName: string };
export type UpdateContactInput = PartialUpdate<Contact>;

export type FeeSchedule = Schemas["FeeSchedule"];
export type Project = Schemas["Project"];
export type ProjectMini = Schemas["ProjectMini"];
export type ProjectType = Schemas["ProjectType"];
export type ProjectTaskStage = Schemas["DeliverableStatus"];
export type CreateProjectInput = Schemas["ProjectCreate"];
export type UpdateProjectInput = PartialUpdate<Project>;
export type Task = Schemas["ProjectDeliverable"];
export type TaskMini = Schemas["ProjectDeliverableMini"];
export type CreateTaskInput = Schemas["TaskCreate"];
export type UpdateTaskInput = PartialUpdate<Task>;
export type ApproveDeliverableInput = Schemas["ApproveDeliverable"];

export type Invoice = Schemas["InvoiceMini"];
export type InvoiceItem = Schemas["LineItem"];
export type InvoiceLineItem = Schemas["InvoiceLineItem"];
export type InvoiceSendTo = Schemas["SendTo"];
export type CreateInvoiceInput = Schemas["InvoiceCreate"];
export interface CreateSimpleInvoiceInput {
  clientId: string;
  amount: number;
  dateDue?: string;
  description?: string;
  notes?: string;
  sendTo?: InvoiceSendTo;
}
export type ApplyPaymentInput = Schemas["PaymentCreate"];
export type PaymentType = NonNullable<ApplyPaymentInput["paymentType"]>;
export type TaxComponent = Schemas["TaxComponent"];
export type TaxBreakdown = Schemas["TaxBreakdown"];
export type TimeEntry = Schemas["TimerEvent"];
export type CreateTimeEntryInput = Schemas["TimerCreate"];
export type Expense = Schemas["Expense"];
export type CreateExpenseInput = Schemas["ExpenseCreate"];
export type UpdateExpenseInput = PartialUpdate<Expense>;

export type Opportunity = Schemas["Opportunity"];
export type CreateOpportunityInput = Schemas["OpportunityCreate"];
export type UpdateOpportunityInput = PartialUpdate<Opportunity>;
export type PipelineStage = Schemas["Stage"];
export type Ticket = Schemas["Ticket"];
export type TicketWrapper = Schemas["TicketWrapper"];
export type TicketFormAnswer = Schemas["Answer"];
export type TicketFormData = Schemas["FormData"];
export type CreateTicketInput = Schemas["TicketCreate"] & { userEmail: string; ticketType: string; comment: string };
export type TicketComment = Schemas["TicketComment"];
export type CreateTicketCommentInput = Schemas["TicketCommentCreate"];
export type UpdateTicketStatusInput = Schemas["TicketStatusUpdate"] & ({ id: string } | { ticketNumber: number });
export type FormName = string;
export type FormAnswer = Schemas["Answer"];
export type FormSubmission = Schemas["FormSubmission"];
export type CreateFormSubmissionInput = Schemas["FormSubmissionCreate"];

export type AttachmentType = "CLIENT" | "PROJECT" | "DELIVERABLE" | "OPPORTUNITY" | "EXPENSE" | "TICKET";
export interface AttachFileInput {
  id: string;
  type: AttachmentType;
  filePath: string;
  fileName?: string;
  contentType?: string;
}
export interface AttachFileFromUrlInput {
  id: string;
  type: AttachmentType;
  fileUrl: string;
  fileName: string;
}
export type CalendarEvent = Schemas["NativeCalendarEvent"];
export type CreateCalendarEventInput = Omit<Schemas["CalendarEvent"], "eventId">;
export type UpdateCalendarEventInput = Schemas["CalendarEvent"] & { eventId: string };
export type DeleteCalendarEventInput = { id: string } | { eventId: string };

export type EmailTemplate = Schemas["ApiEmailTemplate"];
export type EmailTemplateSummary = Schemas["ApiEmailTemplateSummary"];
export type InvoiceTemplate = string;
export type VendorName = string;
export type WorkspaceUser = Schemas["UserAccountMini"];
export type Agreement = Schemas["AgreementMini"];
export type DynamicField = Schemas["DynamicField"];
export type SimpleAccount = Schemas["SimpleAccount"];
export type RestHook = Schemas["RestHook"];
export type WebhookEventType = NonNullable<RestHook["type"]>;

// The prose Account Lookup reference supplies this response; its schema is absent from the OpenAPI download.
export interface AccountInfo {
  accountId: number;
  accountName: string;
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  locality?: string | null;
  postal?: string | null;
  country?: string | null;
  taxId?: string | null;
  taxLabel?: string | null;
  defaultTaxRate?: number | null;
  currency?: string | null;
  website?: string | null;
  phone?: string | null;
  payInstructions?: string | null;
}
