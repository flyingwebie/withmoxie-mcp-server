// ============================================
// Client Types
// ============================================

export interface PaymentTerms {
  paymentDays?: number;
  latePaymentFee?: number;
  hourlyAmount?: number;
  whoPaysCardFees?: 'Client' | 'Freelancer' | 'Split';
}

export interface Contact {
  id?: string;
  accountId?: string;
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
}

export interface Client {
  id?: string;
  accountId?: string;
  name: string;
  clientType: 'Client' | 'Prospect';
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
  taxId?: string;
  leadSource?: string;
  archive?: boolean;
  paymentTerms?: PaymentTerms;
  payInstructions?: string;
  hourlyAmount?: number;
  roundingIncrement?: number;
  currency: string;
  stripeClientId?: string;
  notes?: string;
  contacts?: Contact[];
  logo?: string;
}

export interface CreateClientInput {
  name: string;
  clientType: 'Client' | 'Prospect';
  currency: string;
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
  taxId?: string;
  leadSource?: string;
  archive?: boolean;
  paymentTerms?: PaymentTerms;
  payInstructions?: string;
  hourlyAmount?: number;
  roundingIncrement?: number;
  stripeClientId?: string;
  notes?: string;
  contacts?: Omit<Contact, 'id' | 'accountId' | 'clientId'>[];
}

// ============================================
// Project Types
// ============================================

export interface FeeSchedule {
  feeType?: 'HOURLY' | 'FIXED' | 'RETAINER';
  amount?: number;
  retainerSchedule?: string;
  estimateMax?: number;
  estimateMin?: number;
  retainerStart?: string;
  retainerTiming?: string;
  retainerOverageRate?: number;
  taxable?: boolean;
}

export interface Project {
  id?: string;
  accountId?: string;
  clientId?: string;
  name: string;
  description?: string;
  active?: boolean;
  startDate?: string;
  dueDate?: string;
  dateCreated?: string;
  client?: Client;
  feeSchedule?: FeeSchedule;
  proposalId?: string;
  proposalName?: string;
  hexColor?: string;
  portalAccess?: string;
  showTimeWorkedInPortal?: boolean;
}

export interface CreateProjectInput {
  clientName: string;
  name: string;
  description?: string;
  startDate?: string;
  dueDate?: string;
  feeSchedule?: FeeSchedule;
  hexColor?: string;
  portalAccess?: string;
}

export interface UpdateProjectInput {
  projectId?: string;
  projectName?: string;
  clientName?: string;
  name?: string;
  description?: string;
  startDate?: string;
  dueDate?: string;
  feeSchedule?: FeeSchedule;
  hexColor?: string;
  portalAccess?: string;
  active?: boolean;
}

export interface ProjectTaskStage {
  id?: string;
  name: string;
  order?: number;
}

// ============================================
// Invoice Types
// ============================================

export interface InvoiceItem {
  description?: string;
  quantity?: number;
  rate?: number;
  taxable?: boolean;
  projectName?: string;
}

export interface InvoiceSendTo {
  send?: boolean;
  contacts?: string[];
  emailTemplateName?: string;
}

export interface Invoice {
  id?: string;
  invoiceNumber?: string;
  clientName: string;
  templateName?: string;
  dueDate?: string;
  taxRate?: number;
  discountPercent?: number;
  paymentInstructions?: string;
  items: InvoiceItem[];
  sendTo?: InvoiceSendTo;
  status?: string;
  total?: number;
  amountDue?: number;
}

export interface CreateInvoiceInput {
  clientName: string;
  invoiceNumber?: string;
  templateName?: string;
  dueDate?: string;
  taxRate?: number;
  discountPercent?: number;
  paymentInstructions?: string;
  items: InvoiceItem[];
  sendTo?: InvoiceSendTo;
}

export interface ApplyPaymentInput {
  invoiceId: string;
  amount: number;
  paymentDate?: string;
  paymentMethod?: string;
  notes?: string;
}

// ============================================
// Task Types
// ============================================

export interface Task {
  id?: string;
  name: string;
  description?: string;
  projectName?: string;
  clientName?: string;
  assignedTo?: string[];
  dueDate?: string;
  startDate?: string;
  status?: string;
  priority?: number;
  tasks?: string[];
  customValues?: Record<string, string>;
}

export interface CreateTaskInput {
  name: string;
  description?: string;
  projectName: string;
  clientName?: string;
  assignedTo?: string[];
  dueDate?: string;
  startDate?: string;
  status?: string;
  priority?: number;
  tasks?: string[];
  customValues?: Record<string, string>;
}

export interface DeleteTaskInput {
  taskId: string;
}

// ============================================
// Time Entry Types
// ============================================

export interface TimeEntry {
  id?: string;
  timerStart: string;
  timerEnd: string;
  clientName?: string;
  projectName?: string;
  deliverableName?: string;
  userEmail: string;
  notes?: string;
  duration?: number;
}

export interface CreateTimeEntryInput {
  timerStart: string;
  timerEnd: string;
  userEmail: string;
  clientName?: string;
  projectName?: string;
  deliverableName?: string;
  createClient?: boolean;
  createProject?: boolean;
  createDeliverable?: boolean;
  notes?: string;
}

// ============================================
// Expense Types
// ============================================

export interface Expense {
  id?: string;
  description: string;
  amount: number;
  date: string;
  vendorName?: string;
  clientName?: string;
  projectName?: string;
  category?: string;
  billable?: boolean;
  reimbursable?: boolean;
}

export interface CreateExpenseInput {
  description: string;
  amount: number;
  date: string;
  vendorName?: string;
  clientName?: string;
  projectName?: string;
  category?: string;
  billable?: boolean;
  reimbursable?: boolean;
}

// ============================================
// Opportunity Types
// ============================================

export interface Opportunity {
  id?: string;
  name: string;
  clientName?: string;
  contactName?: string;
  stage?: string;
  value?: number;
  probability?: number;
  expectedCloseDate?: string;
  description?: string;
}

export interface CreateOpportunityInput {
  name: string;
  clientName?: string;
  contactName?: string;
  stage?: string;
  value?: number;
  probability?: number;
  expectedCloseDate?: string;
  description?: string;
}

export interface PipelineStage {
  id?: string;
  name: string;
  order?: number;
}

// ============================================
// Ticket Types
// ============================================

export interface TicketFormAnswer {
  fieldKey: string;
  question: string;
  answer: string;
}

export interface TicketFormData {
  answers: TicketFormAnswer[];
}

export interface Ticket {
  id?: string;
  userEmail: string;
  ticketType: string;
  subject?: string;
  comment: string;
  dueDate?: string;
  formData?: TicketFormData;
}

export interface CreateTicketInput {
  userEmail: string;
  ticketType: string;
  comment: string;
  subject?: string;
  dueDate?: string;
  formData?: TicketFormData;
}

export interface TicketComment {
  id?: string;
  ticketId: string;
  content: string;
  authorEmail?: string;
}

export interface CreateTicketCommentInput {
  ticketId: string;
  content: string;
  authorEmail?: string;
}

// ============================================
// Form Types
// ============================================

export interface FormName {
  id?: string;
  name: string;
}

export interface FormAnswer {
  fieldKey: string;
  question: string;
  answer: string;
}

export interface FormSubmission {
  formName?: string;
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
  sourceUrl?: string;
  leadSource?: string;
  notes?: string;
  pipelineStageName?: string;
  answers?: FormAnswer[];
}

export interface CreateFormSubmissionInput {
  formName?: string;
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
  sourceUrl?: string;
  leadSource?: string;
  notes?: string;
  pipelineStageName?: string;
  answers?: FormAnswer[];
}

// ============================================
// File Types
// ============================================

export interface AttachFileFromUrlInput {
  url: string;
  fileName?: string;
  clientName?: string;
  projectName?: string;
  entityType?: string;
  entityId?: string;
}

// ============================================
// Calendar Types
// ============================================

export interface CalendarEvent {
  id?: string;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  location?: string;
  clientName?: string;
  projectName?: string;
  attendees?: string[];
}

export interface CreateCalendarEventInput {
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  location?: string;
  clientName?: string;
  projectName?: string;
  attendees?: string[];
}

export interface UpdateCalendarEventInput extends Partial<CreateCalendarEventInput> {
  eventId: string;
}

export interface DeleteCalendarEventInput {
  eventId: string;
}

// ============================================
// Deliverable Types
// ============================================

export interface ApproveDeliverableInput {
  deliverableId: string;
  projectName?: string;
  clientName?: string;
}

// ============================================
// Template Types
// ============================================

export interface EmailTemplate {
  id?: string;
  name: string;
  subject?: string;
  body?: string;
}

export interface InvoiceTemplate {
  id?: string;
  name: string;
}

export interface VendorName {
  id?: string;
  name: string;
}

export interface WorkspaceUser {
  id?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role?: string;
}

// ============================================
// Contact Creation Types
// ============================================

export interface CreateContactInput {
  clientName: string;
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
}
