// Generated from openapi.yaml by npm run generate:api. Do not edit.
export const apiSchemas = {
  "AccountingIntegrationKeys": {
    "type": "object",
    "properties": {
      "quickbooksId": {
        "type": "string"
      },
      "xeroId": {
        "type": "string"
      }
    }
  },
  "ClientInfo": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "initials": {
        "type": "string"
      },
      "address1": {
        "type": "string"
      },
      "address2": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "locality": {
        "type": "string"
      },
      "postal": {
        "type": "string"
      },
      "country": {
        "type": "string"
      },
      "phone": {
        "type": "string"
      },
      "color": {
        "type": "string"
      },
      "taxId": {
        "type": "string"
      },
      "website": {
        "type": "string"
      },
      "contact": {
        "$ref": "#/components/schemas/Contact"
      },
      "roundingIncrement": {
        "type": "integer",
        "format": "int64"
      },
      "depositBalance": {
        "type": "number",
        "format": "double"
      },
      "customInfo": {
        "type": "boolean"
      },
      "customValues": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/CustomValue"
        }
      }
    }
  },
  "ClientMicro": {
    "type": "object",
    "properties": {
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "id": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "initials": {
        "type": "string"
      },
      "s3LogoFile": {
        "type": "string"
      },
      "logo": {
        "type": "string"
      },
      "color": {
        "type": "string"
      }
    }
  },
  "ClientMini": {
    "type": "object",
    "properties": {
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "sampleData": {
        "type": "boolean"
      },
      "id": {
        "type": "string"
      },
      "clientType": {
        "type": "string",
        "enum": [
          "Client",
          "Prospect"
        ]
      },
      "name": {
        "type": "string"
      },
      "initials": {
        "type": "string"
      },
      "locality": {
        "type": "string"
      },
      "country": {
        "type": "string"
      },
      "color": {
        "type": "string"
      },
      "address1": {
        "type": "string"
      },
      "address2": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "postal": {
        "type": "string"
      },
      "website": {
        "type": "string"
      },
      "phone": {
        "type": "string"
      },
      "s3LogoFile": {
        "type": "string"
      },
      "taxId": {
        "type": "string"
      },
      "projects": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/ProjectMini"
        }
      },
      "hourlyAmount": {
        "type": "number",
        "format": "double"
      },
      "archive": {
        "type": "boolean"
      },
      "currency": {
        "type": "string"
      },
      "logo": {
        "type": "string"
      },
      "leadSource": {
        "type": "string"
      },
      "defaultTaxRate": {
        "type": "number",
        "format": "double"
      },
      "defaultTaxRuleId": {
        "type": "string"
      },
      "whoPaysCardFees": {
        "type": "string",
        "enum": [
          "Client",
          "Freelancer",
          "Split"
        ]
      },
      "customValues": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/CustomValue"
        }
      },
      "contact": {
        "$ref": "#/components/schemas/Contact"
      }
    }
  },
  "Comment": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "author": {
        "type": "string"
      },
      "authorId": {
        "type": "string"
      },
      "comment": {
        "type": "string"
      },
      "format": {
        "type": "string",
        "enum": [
          "Markdown",
          "HTML"
        ]
      },
      "clientComment": {
        "type": "boolean"
      },
      "edited": {
        "type": "boolean"
      },
      "privateComment": {
        "type": "boolean"
      },
      "sendEmail": {
        "type": "boolean"
      },
      "timestamp": {
        "type": "string",
        "format": "date-time"
      }
    }
  },
  "Contact": {
    "type": "object",
    "required": [
      "accountId"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "clientId": {
        "type": "string"
      },
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "role": {
        "type": "string"
      },
      "phone": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "mobile": {
        "type": "string"
      },
      "notes": {
        "type": "string"
      },
      "defaultContact": {
        "type": "boolean"
      },
      "invoiceContact": {
        "type": "boolean"
      },
      "portalAccess": {
        "type": "boolean"
      },
      "customValues": {
        "type": "array",
        "description": "Custom-field values",
        "items": {
          "$ref": "#/components/schemas/CustomValue"
        }
      },
      "searchObject": {
        "$ref": "#/components/schemas/SearchObject"
      },
      "emulated": {
        "type": "boolean"
      }
    }
  },
  "CurrencyRate": {
    "type": "object",
    "properties": {
      "currency": {
        "type": "string"
      },
      "rate": {
        "type": "number",
        "format": "double"
      }
    }
  },
  "CustomValue": {
    "type": "object",
    "properties": {
      "fieldId": {
        "type": "string",
        "description": "Id of the custom field definition"
      },
      "mappingKey": {
        "type": "string",
        "description": "Stable key used to match the field"
      },
      "fieldName": {
        "type": "string",
        "description": "Human-readable field name"
      },
      "value": {
        "description": "The value (string, number, boolean, ...)"
      },
      "type": {
        "type": "string",
        "description": "The custom field data type",
        "enum": [
          "Text",
          "Numeric",
          "Currency",
          "Date",
          "Select",
          "Radio",
          "Checkbox",
          "Link",
          "Phone",
          "Email"
        ]
      },
      "valueAsString": {
        "type": "string"
      }
    }
  },
  "EventLog": {
    "type": "object",
    "properties": {
      "user": {
        "type": "string"
      },
      "events": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "clientEvent": {
        "type": "boolean"
      },
      "timestamp": {
        "type": "string",
        "format": "date-time"
      }
    }
  },
  "FeeSchedule": {
    "type": "object",
    "required": [
      "feeType"
    ],
    "properties": {
      "feeType": {
        "type": "string",
        "enum": [
          "Hourly",
          "Fixed Price",
          "Retainer",
          "Per Item"
        ]
      },
      "amount": {
        "type": "number",
        "format": "double"
      },
      "retainerSchedule": {
        "type": "string",
        "enum": [
          "Weekly",
          "Bi-Weekly",
          "Monthly",
          "Quarterly",
          "Bi-Annually",
          "Annually",
          "As Needed"
        ]
      },
      "estimateMax": {
        "type": "number",
        "format": "double"
      },
      "estimateMin": {
        "type": "number",
        "format": "double"
      },
      "retainerStart": {
        "type": "string",
        "format": "date"
      },
      "retainerTiming": {
        "type": "string",
        "enum": [
          "Advanced",
          "Arrears"
        ]
      },
      "retainerPeriods": {
        "type": "integer",
        "format": "int32"
      },
      "retainerOverageRate": {
        "type": "number",
        "format": "double"
      },
      "taxable": {
        "type": "boolean"
      },
      "fromProposalId": {
        "type": "string"
      },
      "fromProposalSignedDate": {
        "type": "string",
        "format": "date-time"
      },
      "updatedDate": {
        "type": "string",
        "format": "date-time"
      },
      "updatedBy": {
        "type": "string"
      },
      "retainerActive": {
        "type": "boolean"
      }
    }
  },
  "PaymentHistory": {
    "type": "object",
    "properties": {
      "invoiceId": {
        "type": "string"
      },
      "clientId": {
        "type": "string"
      },
      "invoiceNumber": {
        "type": "integer",
        "format": "int64"
      },
      "invoiceNumberFormatted": {
        "type": "string"
      },
      "invoiceStatus": {
        "type": "string",
        "enum": [
          "INIT",
          "DRAFT",
          "SENT",
          "PARTIAL",
          "PAID",
          "PENDING",
          "VOIDED",
          "WRITE-OFF"
        ]
      },
      "status": {
        "type": "string",
        "enum": [
          "INIT",
          "DRAFT",
          "SENT",
          "PARTIAL",
          "PAID",
          "PENDING",
          "VOIDED",
          "WRITE-OFF"
        ]
      },
      "clientInfo": {
        "$ref": "#/components/schemas/ClientInfo"
      },
      "invoiceDate": {
        "type": "string",
        "format": "date"
      },
      "dateCreated": {
        "type": "string",
        "format": "date"
      },
      "dateSent": {
        "type": "string",
        "format": "date"
      },
      "dateDue": {
        "type": "string",
        "format": "date"
      },
      "amount": {
        "type": "number",
        "format": "double"
      },
      "localAmount": {
        "type": "number",
        "format": "double"
      },
      "description": {
        "type": "string"
      },
      "currency": {
        "type": "string"
      },
      "retainerPeriod": {
        "$ref": "#/components/schemas/RetainerPeriod"
      },
      "integrationKeys": {
        "$ref": "#/components/schemas/AccountingIntegrationKeys"
      }
    }
  },
  "Product": {
    "type": "object",
    "required": [
      "accountId"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "productName": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "unit": {
        "type": "string"
      },
      "rate": {
        "type": "number",
        "format": "double"
      },
      "hourly": {
        "type": "boolean"
      },
      "taxable": {
        "type": "boolean"
      },
      "deposit": {
        "type": "boolean"
      },
      "descriptionFormat": {
        "type": "string",
        "enum": [
          "Markdown",
          "HTML"
        ]
      },
      "folder": {
        "type": "string"
      },
      "currencyRates": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/CurrencyRate"
        }
      }
    }
  },
  "Project": {
    "type": "object",
    "required": [
      "accountId",
      "clientId",
      "dateCreated",
      "name"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "clientId": {
        "type": "string"
      },
      "projectTypeId": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "portalAccess": {
        "type": "string",
        "enum": [
          "Full access",
          "Read only",
          "Overview",
          "None"
        ]
      },
      "portalAccessAssignedOnly": {
        "type": "boolean"
      },
      "showTimeWorkedInPortal": {
        "type": "boolean"
      },
      "projectOwners": {
        "type": "array",
        "items": {
          "type": "integer",
          "format": "int64"
        }
      },
      "dateCreated": {
        "type": "string",
        "format": "date-time"
      },
      "dateCompleted": {
        "type": "string",
        "format": "date-time"
      },
      "proposalId": {
        "type": "string"
      },
      "proposalName": {
        "type": "string"
      },
      "proposalVersion": {
        "type": "integer",
        "format": "int32"
      },
      "active": {
        "type": "boolean"
      },
      "startDate": {
        "type": "string",
        "format": "date"
      },
      "dueDate": {
        "type": "string",
        "format": "date"
      },
      "hexColor": {
        "type": "string"
      },
      "feeSchedule": {
        "$ref": "#/components/schemas/FeeSchedule"
      },
      "clientMini": {
        "$ref": "#/components/schemas/ClientMini"
      },
      "customValues": {
        "type": "array",
        "description": "Custom-field values",
        "items": {
          "$ref": "#/components/schemas/CustomValue"
        }
      }
    }
  },
  "ProjectDeliverableMini": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "clientId": {
        "type": "string"
      },
      "projectId": {
        "type": "string"
      },
      "projectTypeId": {
        "type": "string"
      },
      "parentTaskId": {
        "type": "string"
      },
      "subTaskSort": {
        "type": "integer",
        "format": "int32"
      },
      "project": {
        "$ref": "#/components/schemas/ProjectMicro"
      },
      "client": {
        "$ref": "#/components/schemas/ClientMicro"
      },
      "name": {
        "type": "string"
      },
      "statusId": {
        "type": "string"
      },
      "status": {
        "type": "string"
      },
      "descriptionFormat": {
        "type": "string",
        "enum": [
          "Markdown",
          "HTML"
        ]
      },
      "priority": {
        "type": "integer",
        "format": "int32"
      },
      "taskPriority": {
        "type": "string",
        "enum": [
          "Low",
          "Normal",
          "Medium",
          "High",
          "Urgent"
        ]
      },
      "description": {
        "type": "string"
      },
      "assignedTo": {
        "type": "integer",
        "format": "int64"
      },
      "assignedToList": {
        "type": "array",
        "items": {
          "type": "integer",
          "format": "int64"
        }
      },
      "approvalRequired": {
        "type": "boolean"
      },
      "product": {
        "$ref": "#/components/schemas/Product"
      },
      "quantity": {
        "type": "number",
        "format": "double"
      },
      "invoiceId": {
        "type": "string"
      },
      "invoiceNumber": {
        "type": "string"
      },
      "ticketId": {
        "type": "string"
      },
      "initialWorkflowComplete": {
        "type": "boolean"
      },
      "customValues": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/CustomValue"
        }
      },
      "comments": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/Comment"
        }
      },
      "events": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/EventLog"
        }
      },
      "startDate": {
        "type": "string",
        "format": "date"
      },
      "dueDate": {
        "type": "string",
        "format": "date"
      },
      "created": {
        "type": "string",
        "format": "date-time"
      },
      "completed": {
        "type": "string",
        "format": "date-time"
      },
      "tasks": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/Task"
        }
      },
      "archived": {
        "type": "boolean"
      },
      "kanbanSort": {
        "type": "integer",
        "format": "int32"
      },
      "isSubTask": {
        "type": "boolean"
      }
    }
  },
  "ProjectMicro": {
    "type": "object",
    "properties": {
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "id": {
        "type": "string"
      },
      "clientId": {
        "type": "string"
      },
      "projectTypeId": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "active": {
        "type": "boolean"
      },
      "hexColor": {
        "type": "string"
      }
    }
  },
  "ProjectMini": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "projectTypeId": {
        "type": "string"
      },
      "sampleData": {
        "type": "boolean"
      },
      "clientId": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "active": {
        "type": "boolean"
      },
      "startDate": {
        "type": "string",
        "format": "date"
      },
      "dueDate": {
        "type": "string",
        "format": "date"
      },
      "dateCreated": {
        "type": "string",
        "format": "date-time"
      },
      "client": {},
      "leadGenArchived": {
        "type": "boolean"
      },
      "feeSchedule": {
        "$ref": "#/components/schemas/FeeSchedule"
      },
      "proposalId": {
        "type": "string"
      },
      "proposalName": {
        "type": "string"
      },
      "hexColor": {
        "type": "string"
      },
      "portalAccess": {
        "type": "string",
        "enum": [
          "Full access",
          "Read only",
          "Overview",
          "None"
        ]
      },
      "showTimeWorkedInPortal": {
        "type": "boolean"
      },
      "portalAccessAssignedOnly": {
        "type": "boolean"
      },
      "projectOwners": {
        "type": "array",
        "items": {
          "type": "integer",
          "format": "int64"
        }
      },
      "customValues": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/CustomValue"
        }
      },
      "paymentHistory": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/PaymentHistory"
        }
      },
      "files": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/S3File"
        }
      },
      "deliverables": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/ProjectDeliverableMini"
        }
      }
    }
  },
  "RetainerPeriod": {
    "type": "object",
    "properties": {
      "start": {
        "type": "string",
        "format": "date"
      },
      "end": {
        "type": "string",
        "format": "date"
      }
    }
  },
  "S3File": {
    "type": "object",
    "properties": {
      "region": {
        "type": "string"
      },
      "bucket": {
        "type": "string"
      },
      "path": {
        "type": "string"
      },
      "fileName": {
        "type": "string"
      },
      "fileType": {
        "type": "string",
        "enum": [
          "SVG",
          "JPG",
          "GIF",
          "JSON",
          "AI",
          "INDD",
          "JS",
          "CSV",
          "TXT",
          "AVI",
          "HTML",
          "MP3",
          "MP4",
          "RTF",
          "XML",
          "CSS",
          "PSD",
          "PNG",
          "PDF",
          "DOC",
          "XLS",
          "PPT",
          "ZIP",
          "EML",
          "FILE"
        ]
      },
      "timestamp": {
        "type": "string",
        "format": "date-time"
      },
      "signedUrl": {
        "type": "string"
      },
      "fileIconUrl": {
        "type": "string"
      }
    }
  },
  "SearchObject": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "type": {
        "type": "string",
        "enum": [
          "CLIENT",
          "CONTACT",
          "PROJECT",
          "AGREEMENT",
          "OPPORTUNITY",
          "INVOICE",
          "TICKET",
          "FORM",
          "MEETING",
          "TASK",
          "FILE"
        ]
      },
      "clientId": {
        "type": "string"
      },
      "archived": {
        "type": "boolean"
      },
      "priority": {
        "type": "integer",
        "format": "int32"
      },
      "label": {
        "type": "string"
      },
      "timestamp": {
        "type": "string",
        "format": "date-time"
      },
      "date": {
        "type": "string",
        "format": "date"
      },
      "metaData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "vector_search": {
        "type": "array",
        "items": {
          "type": "number",
          "format": "double"
        }
      },
      "content": {
        "type": "string"
      }
    }
  },
  "Task": {
    "type": "object",
    "required": [
      "id"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "complete": {
        "type": "boolean"
      }
    }
  },
  "Answer": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "fieldKey": {
        "type": "string"
      },
      "fieldType": {
        "type": "string"
      },
      "question": {
        "type": "string"
      },
      "answer": {}
    }
  },
  "FormData": {
    "type": "object",
    "properties": {
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "phone": {
        "type": "string"
      },
      "role": {
        "type": "string"
      },
      "businessName": {
        "type": "string"
      },
      "website": {
        "type": "string"
      },
      "address1": {
        "type": "string"
      },
      "address2": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "locality": {
        "type": "string"
      },
      "postal": {
        "type": "string"
      },
      "country": {
        "type": "string"
      },
      "taxId": {
        "type": "string"
      },
      "sourceUrl": {
        "type": "string"
      },
      "opportunityId": {
        "type": "string"
      },
      "templateId": {
        "type": "string"
      },
      "cardTokenId": {
        "type": "string"
      },
      "leadSource": {
        "type": "string"
      },
      "clientId": {
        "type": "string"
      },
      "answers": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/Answer"
        }
      },
      "contactIfNull": {
        "$ref": "#/components/schemas/Contact"
      }
    }
  },
  "LongDuration": {
    "type": "object",
    "properties": {
      "duration": {
        "type": "integer",
        "format": "int64"
      },
      "timeUnit": {
        "type": "string",
        "enum": [
          "HOURS",
          "DAYS",
          "WEEKS",
          "MONTHS",
          "YEARS"
        ]
      }
    }
  },
  "Opportunity": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "clientId": {
        "type": "string"
      },
      "statusId": {
        "type": "string",
        "description": "Pipeline stage id (see List Pipeline Stages)"
      },
      "name": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "assignedTo": {
        "type": "array",
        "items": {
          "type": "integer",
          "format": "int64"
        }
      },
      "format": {
        "type": "string",
        "enum": [
          "Markdown",
          "HTML"
        ]
      },
      "sentiment": {
        "type": "integer",
        "format": "int32"
      },
      "value": {
        "type": "number",
        "format": "double"
      },
      "timePeriod": {
        "type": "string",
        "enum": [
          "OneTime",
          "Day",
          "Week",
          "Month",
          "Quarter",
          "SemiAnnual",
          "Year"
        ]
      },
      "periods": {
        "type": "integer",
        "format": "int64"
      },
      "estCloseDate": {
        "type": "string",
        "format": "date"
      },
      "actualCloseDate": {
        "type": "string",
        "format": "date"
      },
      "formData": {
        "$ref": "#/components/schemas/FormData"
      },
      "archive": {
        "type": "boolean"
      },
      "toDos": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/ToDoItem"
        }
      },
      "customValues": {
        "type": "array",
        "description": "Custom-field values",
        "items": {
          "$ref": "#/components/schemas/CustomValue"
        }
      },
      "created": {
        "type": "string",
        "format": "date-time"
      },
      "wonOn": {
        "type": "string",
        "format": "date-time"
      },
      "client": {
        "$ref": "#/components/schemas/ClientMini"
      },
      "statusLabel": {
        "type": "string"
      }
    }
  },
  "ToDoItem": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "item": {
        "type": "string"
      },
      "complete": {
        "type": "boolean"
      },
      "dueDate": {
        "type": "string",
        "format": "date"
      },
      "dateCompleted": {
        "type": "string",
        "format": "date-time"
      },
      "relativeDueDate": {
        "$ref": "#/components/schemas/LongDuration"
      },
      "scopeId": {
        "type": "string"
      }
    }
  },
  "Expense": {
    "type": "object",
    "required": [
      "accountId",
      "amount"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "recurringRunKey": {
        "type": "string"
      },
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "vendorId": {
        "type": "string"
      },
      "clientId": {
        "type": "string"
      },
      "projectId": {
        "type": "string"
      },
      "amount": {
        "type": "number",
        "format": "double"
      },
      "taxRate": {
        "type": "number",
        "format": "double"
      },
      "taxInclusive": {
        "type": "boolean"
      },
      "billNo": {
        "type": "string"
      },
      "category": {
        "type": "string"
      },
      "dateCreated": {
        "type": "string",
        "format": "date-time"
      },
      "paidDate": {
        "type": "string",
        "format": "date"
      },
      "dueDate": {
        "type": "string",
        "format": "date"
      },
      "currency": {
        "type": "string"
      },
      "exchangeRate": {
        "type": "number"
      },
      "paid": {
        "type": "boolean"
      },
      "description": {
        "type": "string"
      },
      "notes": {
        "type": "string"
      },
      "reimbursable": {
        "type": "boolean"
      },
      "markupPercent": {
        "type": "number",
        "format": "double"
      },
      "invoiceId": {
        "type": "string"
      },
      "invoiceNumber": {
        "type": "string"
      },
      "integrationKeys": {
        "$ref": "#/components/schemas/AccountingIntegrationKeys"
      },
      "sampleData": {
        "type": "boolean"
      },
      "vendor": {
        "$ref": "#/components/schemas/Vendor"
      },
      "client": {
        "$ref": "#/components/schemas/ClientMini"
      },
      "project": {
        "$ref": "#/components/schemas/ProjectMini"
      },
      "localAmount": {
        "type": "number",
        "format": "double"
      },
      "localTax": {
        "type": "number",
        "format": "double"
      },
      "localPreTax": {
        "type": "number",
        "format": "double"
      },
      "localTotalWithMarkup": {
        "type": "number",
        "format": "double"
      },
      "tax": {
        "type": "number",
        "format": "double"
      },
      "markupAmount": {
        "type": "number",
        "format": "double"
      },
      "expenseLabel": {
        "type": "string"
      },
      "total": {
        "type": "number",
        "format": "double"
      },
      "totalPreTax": {
        "type": "number",
        "format": "double"
      },
      "integrationExpense": {
        "type": "boolean"
      },
      "totalWithMarkup": {
        "type": "number",
        "format": "double"
      }
    }
  },
  "Vendor": {
    "type": "object",
    "required": [
      "accountId"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "sampleData": {
        "type": "boolean"
      },
      "name": {
        "type": "string"
      },
      "contact": {
        "$ref": "#/components/schemas/Contact"
      },
      "address1": {
        "type": "string"
      },
      "address2": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "locality": {
        "type": "string"
      },
      "postal": {
        "type": "string"
      },
      "country": {
        "type": "string"
      },
      "website": {
        "type": "string"
      },
      "notes": {
        "type": "string"
      },
      "format": {
        "type": "string",
        "enum": [
          "Markdown",
          "HTML"
        ]
      },
      "taxId": {
        "type": "string"
      },
      "track1099": {
        "type": "boolean"
      },
      "importRecordId": {
        "type": "string"
      },
      "attachments": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/S3File"
        }
      },
      "balanceDue": {
        "type": "number",
        "format": "double"
      }
    }
  },
  "Client": {
    "type": "object",
    "required": [
      "accountId",
      "name"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "name": {
        "type": "string",
        "minLength": 1
      },
      "clientType": {
        "type": "string",
        "description": "Client or Prospect",
        "enum": [
          "Client",
          "Prospect"
        ]
      },
      "initials": {
        "type": "string"
      },
      "address1": {
        "type": "string"
      },
      "address2": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "locality": {
        "type": "string"
      },
      "postal": {
        "type": "string"
      },
      "country": {
        "type": "string"
      },
      "website": {
        "type": "string"
      },
      "phone": {
        "type": "string"
      },
      "color": {
        "type": "string"
      },
      "logo": {
        "type": "string"
      },
      "taxId": {
        "type": "string",
        "description": "Client tax identifier"
      },
      "leadSource": {
        "type": "string"
      },
      "archive": {
        "type": "boolean"
      },
      "paymentTerms": {
        "$ref": "#/components/schemas/PaymentTerms"
      },
      "payInstructions": {
        "type": "string"
      },
      "hourlyAmount": {
        "type": "number",
        "format": "double"
      },
      "defaultTaxRate": {
        "type": "number",
        "format": "double"
      },
      "defaultTaxRuleId": {
        "type": "string"
      },
      "roundingIncrement": {
        "type": "integer",
        "format": "int64"
      },
      "currency": {
        "type": "string"
      },
      "activityInitialized": {
        "type": "boolean"
      },
      "customValues": {
        "type": "array",
        "description": "Custom-field values",
        "items": {
          "$ref": "#/components/schemas/CustomValue"
        }
      },
      "created": {
        "type": "string",
        "format": "date-time"
      },
      "peppolCompliant": {
        "type": "boolean"
      },
      "notes": {
        "type": "string"
      },
      "notifyOnCreate": {
        "type": "boolean",
        "description": "Request-only flag: notify the workspace owner after create"
      },
      "contacts": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/Contact"
        }
      },
      "customValue": {
        "$ref": "#/components/schemas/CustomValue"
      }
    }
  },
  "PaymentTerms": {
    "type": "object",
    "required": [
      "latePaymentFee"
    ],
    "properties": {
      "paymentDays": {
        "type": "integer",
        "format": "int32"
      },
      "latePaymentFee": {
        "type": "number",
        "format": "double"
      },
      "depositAmount": {
        "type": "number",
        "format": "double"
      },
      "depositType": {
        "type": "string",
        "enum": [
          "No deposit",
          "Fixed amount",
          "Percentage"
        ]
      },
      "hourlyAmount": {
        "type": "number",
        "format": "double"
      },
      "whoPaysCardFees": {
        "type": "string",
        "enum": [
          "Client",
          "Freelancer",
          "Split"
        ]
      },
      "fromProposalId": {
        "type": "string"
      },
      "fromProposalSignedDate": {
        "type": "string",
        "format": "date-time"
      },
      "updatedDate": {
        "type": "string",
        "format": "date-time"
      },
      "updatedBy": {
        "type": "string"
      }
    }
  },
  "RestHook": {
    "type": "object",
    "required": [
      "hookUrl",
      "type"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "type": {
        "type": "string",
        "enum": [
          "ClientCreate",
          "ClientUpdate",
          "ClientDelete",
          "InvoiceSent",
          "InvoiceVoided",
          "InvoiceWriteOff",
          "PaymentReceived",
          "AgreementSent",
          "AgreementViewed",
          "AgreementSigned",
          "ProposalSent",
          "ProposalViewed",
          "ProposalSigned",
          "ProjectCreate",
          "ProjectUpdate",
          "ProjectComplete",
          "TimerCreate",
          "TimerUpdate",
          "TimerDelete",
          "FormCompleted",
          "MeetingScheduled",
          "MeetingUpdated",
          "MeetingCancelled",
          "DeliverableApproval",
          "DeliverableCreate",
          "DeliverableUpdate",
          "DeliverableDelete",
          "OpportunityCreate",
          "OpportunityUpdate",
          "OpportunityDelete",
          "TicketCreate",
          "TicketUpdate",
          "TicketDelete",
          "TicketClose",
          "TicketComment"
        ]
      },
      "hookUrl": {
        "type": "string"
      },
      "filters": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "enabled": {
        "type": "boolean"
      },
      "statusTime": {
        "type": "string",
        "format": "date-time"
      },
      "statusMessage": {
        "type": "string"
      }
    }
  },
  "TimerCreate": {
    "type": "object",
    "required": [
      "timerEnd",
      "timerStart"
    ],
    "properties": {
      "timerStart": {
        "type": "string",
        "format": "date-time",
        "description": "Start timestamp"
      },
      "timerEnd": {
        "type": "string",
        "format": "date-time",
        "description": "End timestamp"
      },
      "clientName": {
        "type": "string",
        "description": "Client name, exact match"
      },
      "projectName": {
        "type": "string",
        "description": "Project name, exact match"
      },
      "deliverableName": {
        "type": "string",
        "description": "Deliverable name, exact match"
      },
      "notes": {
        "type": "string",
        "description": "Free-text notes"
      },
      "userEmail": {
        "type": "string",
        "description": "User the time is logged for"
      },
      "createClient": {
        "type": "boolean",
        "description": "Create the client if it does not exist"
      },
      "createProject": {
        "type": "boolean",
        "description": "Create the project if it does not exist"
      },
      "createDeliverable": {
        "type": "boolean",
        "description": "Create the deliverable if it does not exist"
      }
    }
  },
  "TicketCreate": {
    "type": "object",
    "properties": {
      "userEmail": {
        "type": "string",
        "description": "Email of the requesting user"
      },
      "ticketType": {
        "type": "string",
        "description": "Ticket type label"
      },
      "subject": {
        "type": "string",
        "description": "Ticket subject"
      },
      "comment": {
        "type": "string",
        "description": "Initial comment / body"
      },
      "dueDate": {
        "type": "string",
        "format": "date",
        "description": "Optional due date"
      },
      "formData": {
        "$ref": "#/components/schemas/FormData",
        "description": "Structured form data attached to the ticket"
      }
    }
  },
  "TicketCommentCreate": {
    "type": "object",
    "required": [
      "comment",
      "ticketNumber"
    ],
    "properties": {
      "ticketNumber": {
        "type": "integer",
        "format": "int64",
        "description": "Number of the ticket to comment on"
      },
      "userEmail": {
        "type": "string",
        "description": "Email of the commenting user"
      },
      "privateComment": {
        "type": "boolean",
        "description": "If true the comment is internal-only"
      },
      "comment": {
        "type": "string",
        "description": "Comment body"
      }
    }
  },
  "TaskCreate": {
    "type": "object",
    "required": [
      "name"
    ],
    "properties": {
      "name": {
        "type": "string",
        "description": "Task name"
      },
      "clientName": {
        "type": "string",
        "description": "Client name, exact match"
      },
      "projectName": {
        "type": "string",
        "description": "Project the task belongs to, by exact name"
      },
      "status": {
        "type": "string",
        "description": "Task stage label (see List Project Task Stages)"
      },
      "description": {
        "type": "string",
        "description": "Task description"
      },
      "dueDate": {
        "type": "string",
        "format": "date",
        "description": "Due date"
      },
      "startDate": {
        "type": "string",
        "format": "date",
        "description": "Start date"
      },
      "priority": {
        "type": "integer",
        "format": "int32",
        "description": "Priority"
      },
      "tasks": {
        "type": "array",
        "description": "Sub-task names",
        "items": {
          "type": "string"
        }
      },
      "assignedTo": {
        "type": "array",
        "description": "Emails of the users to assign",
        "items": {
          "type": "string"
        }
      },
      "customValues": {
        "type": "object",
        "description": "Custom-field values keyed by field name",
        "additionalProperties": {
          "type": "string"
        }
      }
    }
  },
  "DeliverableApproval": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "approvalStatus": {
        "type": "string"
      },
      "approvedAt": {
        "type": "string",
        "format": "date-time"
      },
      "approverName": {
        "type": "string"
      },
      "approverEmail": {
        "type": "string"
      }
    }
  },
  "ProjectDeliverable": {
    "type": "object",
    "required": [
      "accountId"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "recurringRunKey": {
        "type": "string"
      },
      "accountId": {
        "type": "integer",
        "format": "int64"
      },
      "sampleData": {
        "type": "boolean"
      },
      "clientId": {
        "type": "string"
      },
      "projectId": {
        "type": "string"
      },
      "projectTypeId": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "statusId": {
        "type": "string"
      },
      "ticketId": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "descriptionFormat": {
        "type": "string",
        "enum": [
          "Markdown",
          "HTML"
        ]
      },
      "type": {
        "type": "string",
        "enum": [
          "Primary",
          "SubTask"
        ]
      },
      "parentTaskId": {
        "type": "string"
      },
      "subTaskSort": {
        "type": "integer",
        "format": "int32"
      },
      "startDate": {
        "type": "string",
        "format": "date"
      },
      "dueDate": {
        "type": "string",
        "format": "date"
      },
      "assignedTo": {
        "type": "integer",
        "format": "int64"
      },
      "assignedToList": {
        "type": "array",
        "items": {
          "type": "integer",
          "format": "int64"
        }
      },
      "tasks": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/Task"
        }
      },
      "comments": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/Comment"
        }
      },
      "events": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/EventLog"
        }
      },
      "files": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/S3File"
        }
      },
      "approvals": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/DeliverableApproval"
        }
      },
      "customValues": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/CustomValue"
        }
      },
      "archived": {
        "type": "boolean"
      },
      "approvalRequired": {
        "type": "boolean"
      },
      "approvalRequestedAt": {
        "type": "string",
        "format": "date-time"
      },
      "product": {
        "$ref": "#/components/schemas/Product"
      },
      "quantity": {
        "type": "number",
        "format": "double"
      },
      "kanbanSort": {
        "type": "integer",
        "format": "int32"
      },
      "priority": {
        "type": "integer",
        "format": "int32"
      },
      "taskPriority": {
        "type": "string",
        "enum": [
          "Low",
          "Normal",
          "Medium",
          "High",
          "Urgent"
        ]
      },
      "isDeleted": {
        "type": "boolean"
      },
      "invoiceId": {
        "type": "string"
      },
      "invoiceNumber": {
        "type": "string"
      },
      "importRecordId": {
        "type": "string"
      },
      "initialSetupTask": {
        "type": "boolean"
      },
      "initialWorkflowComplete": {
        "type": "boolean"
      },
      "created": {
        "type": "string",
        "format": "date-time"
      },
      "completed": {
        "type": "string",
        "format": "date-time"
      },
      "isSubTask": {
        "type": "boolean"
      }
    }
  },
  "ProjectCreate": {
    "type": "object",
    "required": [
      "clientName",
      "name"
    ],
    "properties": {
      "name": {
        "type": "string",
        "description": "Project name"
      },
      "clientName": {
        "type": "string",
        "description": "Client the project belongs to, by exact name"
      },
      "startDate": {
        "type": "string",
        "format": "date",
        "description": "Project start date"
      },
      "dueDate": {
        "type": "string",
        "format": "date",
        "description": "Project due date"
      },
      "portalAccess": {
        "type": "string",
        "description": "Client-portal visibility",
        "enum": [
          "Full access",
          "Read only",
          "Overview",
          "None"
        ]
      },
      "feeSchedule": {
        "$ref": "#/components/schemas/FeeSchedule",
        "description": "Fee schedule configuration"
      },
      "showTimeWorkedInPortal": {
        "type": "boolean",
        "description": "Show logged time in the client portal"
      },
      "templateName": {
        "type": "string",
        "description": "Project template to apply, by name"
      },
      "customValues": {
        "type": "object",
        "description": "Custom-field values keyed by field name",
        "additionalProperties": {
          "type": "string"
        }
      }
    }
  },
  "PaymentCreate": {
    "type": "object",
    "required": [
      "amount",
      "clientName",
      "invoiceNumber"
    ],
    "properties": {
      "invoiceNumber": {
        "type": "string",
        "description": "Formatted invoice number to apply the payment to"
      },
      "clientName": {
        "type": "string",
        "description": "Client name, exact match"
      },
      "date": {
        "type": "string",
        "format": "date",
        "description": "Payment date"
      },
      "amount": {
        "type": "number",
        "format": "double",
        "description": "Payment amount"
      },
      "paymentType": {
        "type": "string",
        "description": "Informational payment method label",
        "enum": [
          "STRIPE",
          "CHECK",
          "BANK_TRANSFER",
          "CASH",
          "VENMO",
          "PAYPAL",
          "ZELLE",
          "APP_PAYOUT",
          "CREDIT_CARD",
          "OTHER"
        ]
      },
      "referenceNumber": {
        "type": "string",
        "description": "External reference number"
      },
      "memo": {
        "type": "string",
        "description": "Free-text memo"
      }
    }
  },
  "OpportunityCreate": {
    "type": "object",
    "required": [
      "name"
    ],
    "properties": {
      "name": {
        "type": "string",
        "description": "Opportunity name"
      },
      "description": {
        "type": "string",
        "description": "Description"
      },
      "clientName": {
        "type": "string",
        "description": "Associated client, by exact name"
      },
      "stageName": {
        "type": "string",
        "description": "Pipeline stage name (see List Pipeline Stages)"
      },
      "value": {
        "type": "number",
        "format": "double",
        "description": "Estimated value"
      },
      "estCloseDate": {
        "type": "string",
        "format": "date",
        "description": "Estimated close date"
      },
      "leadInfo": {
        "$ref": "#/components/schemas/FormData",
        "description": "Structured lead information"
      },
      "toDos": {
        "type": "array",
        "description": "Associated to-do items",
        "items": {
          "$ref": "#/components/schemas/ToDoItem"
        }
      },
      "customValues": {
        "type": "object",
        "description": "Custom-field values keyed by field name",
        "additionalProperties": {
          "type": "string"
        }
      }
    }
  },
  "InvoiceCreate": {
    "type": "object",
    "required": [
      "clientName"
    ],
    "properties": {
      "invoiceNumber": {
        "type": "string",
        "description": "Optional explicit invoice number"
      },
      "clientName": {
        "type": "string",
        "description": "Client to bill, matched by exact name"
      },
      "templateName": {
        "type": "string",
        "description": "Invoice template to apply (see List Invoice Templates)"
      },
      "description": {
        "type": "string",
        "description": "Invoice description"
      },
      "dueDate": {
        "type": "string",
        "format": "date",
        "description": "Due date"
      },
      "taxRate": {
        "type": "number",
        "format": "double",
        "description": "Flat tax rate percentage applied to taxable items"
      },
      "discountPercent": {
        "type": "number",
        "format": "double",
        "description": "Discount percentage"
      },
      "paymentInstructions": {
        "type": "string",
        "description": "Payment instructions shown on the invoice"
      },
      "items": {
        "type": "array",
        "description": "Invoice line items",
        "items": {
          "$ref": "#/components/schemas/LineItem"
        }
      },
      "sendTo": {
        "$ref": "#/components/schemas/SendTo",
        "description": "Send configuration. When send is false or omitted the invoice stays in DRAFT"
      }
    }
  },
  "LineItem": {
    "type": "object",
    "properties": {
      "description": {
        "type": "string",
        "description": "Line description"
      },
      "quantity": {
        "type": "number",
        "format": "double",
        "description": "Quantity"
      },
      "rate": {
        "type": "number",
        "format": "double",
        "description": "Price per unit"
      },
      "taxable": {
        "type": "boolean",
        "description": "Whether the line is taxable"
      },
      "projectName": {
        "type": "string",
        "description": "Project to associate the line with, by exact name"
      }
    }
  },
  "SendTo": {
    "type": "object",
    "properties": {
      "send": {
        "type": "boolean"
      },
      "contacts": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "emailTemplateName": {
        "type": "string"
      }
    }
  },
  "FormSubmissionCreate": {
    "type": "object",
    "required": [
      "formName"
    ],
    "properties": {
      "formName": {
        "type": "string",
        "description": "Name of the form being submitted (see List Form Names)"
      },
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "email": {
        "type": "string",
        "description": "Submitter email"
      },
      "phone": {
        "type": "string"
      },
      "role": {
        "type": "string"
      },
      "businessName": {
        "type": "string"
      },
      "website": {
        "type": "string"
      },
      "address1": {
        "type": "string"
      },
      "address2": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "locality": {
        "type": "string"
      },
      "postal": {
        "type": "string"
      },
      "country": {
        "type": "string"
      },
      "sourceUrl": {
        "type": "string"
      },
      "leadSource": {
        "type": "string",
        "description": "Attribution / lead source"
      },
      "notes": {
        "type": "string"
      },
      "pipelineStageName": {
        "type": "string",
        "description": "Pipeline stage to place the lead in"
      },
      "taxId": {
        "type": "string",
        "description": "Tax identifier"
      },
      "answers": {
        "type": "array",
        "description": "Structured question and answer pairs",
        "items": {
          "$ref": "#/components/schemas/Answer"
        }
      }
    }
  },
  "ExpenseCreate": {
    "type": "object",
    "required": [
      "amount"
    ],
    "properties": {
      "date": {
        "type": "string",
        "format": "date-time",
        "description": "Expense date"
      },
      "amount": {
        "type": "number",
        "format": "double",
        "description": "Amount"
      },
      "markupPercentage": {
        "type": "number",
        "format": "double",
        "description": "Markup applied when billed to a client"
      },
      "currency": {
        "type": "string",
        "description": "Currency code"
      },
      "paid": {
        "type": "boolean",
        "description": "Whether the expense is paid"
      },
      "reimbursable": {
        "type": "boolean",
        "description": "Whether it is reimbursable / billable"
      },
      "category": {
        "type": "string",
        "description": "Expense category"
      },
      "billNo": {
        "type": "string",
        "description": "Bill / receipt number"
      },
      "description": {
        "type": "string",
        "description": "Short description"
      },
      "notes": {
        "type": "string",
        "description": "Free-text notes"
      },
      "vendor": {
        "type": "string",
        "description": "Vendor name"
      },
      "clientName": {
        "type": "string",
        "description": "Client to bill, by exact name (optional)"
      }
    }
  },
  "ApproveDeliverable": {
    "type": "object",
    "required": [
      "clientName",
      "deliverableName",
      "projectName"
    ],
    "properties": {
      "clientName": {
        "type": "string",
        "description": "Client name, exact match"
      },
      "projectName": {
        "type": "string",
        "description": "Project name, exact match"
      },
      "deliverableName": {
        "type": "string",
        "description": "Deliverable to approve, exact match"
      }
    }
  },
  "ContactCreate": {
    "type": "object",
    "properties": {
      "first": {
        "type": "string",
        "description": "First name"
      },
      "last": {
        "type": "string",
        "description": "Last name"
      },
      "email": {
        "type": "string",
        "description": "Email address"
      },
      "phone": {
        "type": "string",
        "description": "Phone number"
      },
      "notes": {
        "type": "string",
        "description": "Free-text notes"
      },
      "clientName": {
        "type": "string",
        "description": "Client to attach the contact to, by exact name"
      },
      "defaultContact": {
        "type": "boolean",
        "description": "Mark as the client's default contact"
      },
      "portalAccess": {
        "type": "boolean",
        "description": "Grant client-portal access"
      },
      "invoiceContact": {
        "type": "boolean",
        "description": "Include this contact on invoices"
      }
    }
  },
  "CalendarEvent": {
    "type": "object",
    "properties": {
      "eventId": {
        "type": "string",
        "description": "Existing event id to update; omit to create"
      },
      "startTime": {
        "type": "string",
        "format": "date-time",
        "description": "Event start"
      },
      "endTime": {
        "type": "string",
        "format": "date-time",
        "description": "Event end"
      },
      "timezone": {
        "type": "string",
        "description": "IANA timezone"
      },
      "fullDay": {
        "type": "boolean",
        "description": "All-day event"
      },
      "busy": {
        "type": "boolean",
        "description": "Mark the time as busy"
      },
      "summary": {
        "type": "string",
        "description": "Event title"
      },
      "description": {
        "type": "string",
        "description": "Event description"
      },
      "location": {
        "type": "string",
        "description": "Location"
      },
      "userEmail": {
        "type": "string",
        "description": "Owner of the event"
      }
    }
  },
  "TicketStatusUpdate": {
    "type": "object",
    "required": [
      "status"
    ],
    "properties": {
      "id": {
        "type": "string",
        "description": "Exact ticket id; takes precedence over ticketNumber"
      },
      "ticketNumber": {
        "type": "integer",
        "format": "int64",
        "description": "Ticket number used when id is omitted"
      },
      "status": {
        "type": "string",
        "description": "Workflow status configured for the ticket type"
      }
    }
  }
};

export const apiOperations = {
  "PUT /public/action/projects/update": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/Project"
    }
  },
  "PATCH /public/action/projects/update": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "type": "object"
    }
  },
  "PUT /public/action/opportunities/update": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/Opportunity"
    }
  },
  "PATCH /public/action/opportunities/update": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "type": "object"
    }
  },
  "PUT /public/action/expenses/update": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/Expense"
    }
  },
  "PATCH /public/action/expenses/update": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "type": "object"
    }
  },
  "PUT /public/action/contacts/update": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/Contact"
    }
  },
  "PATCH /public/action/contacts/update": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "type": "object"
    }
  },
  "PUT /public/action/clients/update": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/Client"
    }
  },
  "PATCH /public/action/clients/update": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "type": "object"
    }
  },
  "GET /public/unsubscribe": {
    "parameters": [
      {
        "name": "token",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responseContentType": "text/html"
  },
  "POST /public/unsubscribe": {
    "parameters": [],
    "contentType": "application/x-www-form-urlencoded",
    "body": {
      "type": "object",
      "properties": {
        "token": {
          "type": "string"
        }
      }
    },
    "responseContentType": "text/html"
  },
  "POST /public/api/unsubscribe": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/RestHook"
    },
    "responseContentType": "application/json"
  },
  "POST /public/api/subscribe": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/RestHook"
    },
    "responseContentType": "application/json"
  },
  "POST /public/api/sample": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/RestHook"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/timeWorked/create": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/TimerCreate"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/tickets/create": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/TicketCreate"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/tickets/comments/create": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/TicketCommentCreate"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/tasks/create": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/TaskCreate"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/projects/create": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/ProjectCreate"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/payment/create": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/PaymentCreate"
    }
  },
  "POST /public/action/opportunities/create": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/OpportunityCreate"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/invoices/create": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/InvoiceCreate"
    }
  },
  "POST /public/action/formSubmissions/create": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/FormSubmissionCreate"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/expenses/create": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/ExpenseCreate"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/deliverable/approve": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/ApproveDeliverable"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/contacts/create": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/ContactCreate"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/clients/create": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/Client"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/calendar/createOrUpdate": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/CalendarEvent"
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/attachments/create": {
    "parameters": [
      {
        "name": "id",
        "in": "query",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "type",
        "in": "query",
        "required": true,
        "schema": {
          "type": "string",
          "enum": [
            "CLIENT",
            "PROJECT",
            "DELIVERABLE",
            "OPPORTUNITY",
            "EXPENSE",
            "TICKET"
          ]
        }
      }
    ],
    "contentType": "application/json",
    "body": {
      "type": "object",
      "required": [
        "file"
      ],
      "properties": {
        "file": {
          "type": "string",
          "format": "binary"
        }
      }
    },
    "responseContentType": "application/json"
  },
  "POST /public/action/attachments/createFromUrl": {
    "parameters": [
      {
        "name": "id",
        "in": "query",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "type",
        "in": "query",
        "required": true,
        "schema": {
          "type": "string",
          "enum": [
            "CLIENT",
            "PROJECT",
            "DELIVERABLE",
            "OPPORTUNITY",
            "EXPENSE",
            "TICKET"
          ]
        }
      },
      {
        "name": "fileUrl",
        "in": "query",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "fileName",
        "in": "query",
        "required": true,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responseContentType": "application/json"
  },
  "PATCH /public/action/tickets/status": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "$ref": "#/components/schemas/TicketStatusUpdate"
    },
    "responseContentType": "application/json"
  },
  "PATCH /public/action/tasks/update": {
    "parameters": [],
    "contentType": "application/json",
    "body": {
      "type": "object"
    },
    "responseContentType": "application/json"
  },
  "GET /public/api/customFields": {
    "parameters": [
      {
        "name": "type",
        "in": "query",
        "required": true,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responseContentType": "application/json"
  },
  "GET /public/api/auth": {
    "parameters": [],
    "responseContentType": "application/json"
  },
  "GET /public/action/vendors/list": {
    "parameters": [],
    "responseContentType": "application/json"
  },
  "GET /public/action/users/list": {
    "parameters": [],
    "responseContentType": "application/json"
  },
  "GET /public/action/tickets/search": {
    "parameters": [
      {
        "name": "query",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "ticketNumber",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "format": "int64"
        }
      }
    ],
    "responseContentType": "application/json"
  },
  "GET /public/action/tickets/list": {
    "parameters": [
      {
        "name": "open",
        "in": "query",
        "required": false,
        "schema": {
          "type": "boolean"
        }
      },
      {
        "name": "archived",
        "in": "query",
        "required": false,
        "schema": {
          "type": "boolean"
        }
      },
      {
        "name": "clientId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responseContentType": "application/json"
  },
  "GET /public/action/tasks/search": {
    "parameters": [
      {
        "name": "query",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responseContentType": "application/json"
  },
  "GET /public/action/tasks/list": {
    "parameters": [
      {
        "name": "projectId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "clientId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "statusId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "archived",
        "in": "query",
        "required": false,
        "schema": {
          "type": "boolean"
        }
      }
    ],
    "responseContentType": "application/json"
  },
  "GET /public/action/taskStages/list": {
    "parameters": [
      {
        "name": "projectTypeId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responseContentType": "application/json"
  },
  "GET /public/action/projects/search": {
    "parameters": [
      {
        "name": "query",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ]
  },
  "GET /public/action/projectTypes/list": {
    "parameters": [],
    "responseContentType": "application/json"
  },
  "GET /public/action/pipelineStages/list": {
    "parameters": [],
    "responseContentType": "application/json"
  },
  "GET /public/action/payableInvoices/search": {
    "parameters": [
      {
        "name": "query",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responseContentType": "application/json"
  },
  "GET /public/action/invoiceTemplates/list": {
    "parameters": [],
    "responseContentType": "application/json"
  },
  "GET /public/action/formNames/list": {
    "parameters": [],
    "responseContentType": "application/json"
  },
  "GET /public/action/emailTemplates": {
    "parameters": [],
    "responseContentType": "application/json"
  },
  "GET /public/action/emailTemplates/{templateId}": {
    "parameters": [
      {
        "name": "templateId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responseContentType": "application/json"
  },
  "GET /public/action/emailTemplates/list": {
    "parameters": [],
    "responseContentType": "application/json"
  },
  "GET /public/action/contacts/search": {
    "parameters": [
      {
        "name": "query",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responseContentType": "application/json"
  },
  "GET /public/action/clients/search": {
    "parameters": [
      {
        "name": "query",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responseContentType": "application/json"
  },
  "GET /public/action/clients/list": {
    "parameters": [],
    "responseContentType": "application/json"
  },
  "GET /public/action/agreements/search": {
    "parameters": [
      {
        "name": "clientId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "id",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responseContentType": "application/json"
  },
  "GET /public/action/account/{accountId}": {
    "parameters": [
      {
        "name": "accountId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "integer",
          "format": "int64"
        }
      }
    ]
  },
  "DELETE /public/action/calendar/{id}": {
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        }
      }
    ]
  }
};
