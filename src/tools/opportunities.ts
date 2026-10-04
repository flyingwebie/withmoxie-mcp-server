import { z } from "zod";
import { apiTool, renameFields, updateTools } from "./api-tool.js";

export const opportunityTools = [
  apiTool("list_pipeline_stages", "GET /public/action/pipelineStages/list", "List pipeline stages; use a stage id as statusId when updating an opportunity."),
  apiTool("create_opportunity", "POST /public/action/opportunities/create", "Create a sales opportunity with stageName, leadInfo, toDos, and custom fields.", {
    fields: {
      stage: z.string().optional().describe("Alias for stageName"),
      expectedCloseDate: z.string().optional().describe("Alias for estCloseDate"),
    },
    transform: args => renameFields(args, { stage: "stageName", expectedCloseDate: "estCloseDate" }),
  }),
  ...updateTools("opportunity"),
];
