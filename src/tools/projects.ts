import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getMoxieClient } from '../client/moxie-client.js';
import type {
  Project,
  CreateProjectInput,
  UpdateProjectInput,
  ProjectTaskStage,
} from '../types/moxie.js';

export function registerProjectTools(server: McpServer) {
  server.tool(
    'search_projects',
    'Search for projects in your Moxie workspace, optionally filtered by client name',
    {
      query: z
        .string()
        .optional()
        .describe('Search query to filter projects by client name'),
    },
    async ({ query }) => {
      try {
        const client = getMoxieClient();
        const params = query ? { query } : undefined;
        const projects = await client.get<Project[]>(
          '/action/projects/search',
          params
        );
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(projects, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [
            { type: 'text', text: `Failed to search projects: ${message}` },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    'create_project',
    'Create a new project in Moxie CRM',
    {
      clientName: z
        .string()
        .describe('Exact name of the client to associate this project with'),
      name: z.string().describe('Name of the project'),
      description: z.string().optional().describe('Project description'),
      startDate: z
        .string()
        .optional()
        .describe('Project start date (YYYY-MM-DD format)'),
      dueDate: z
        .string()
        .optional()
        .describe('Project due date (YYYY-MM-DD format)'),
      feeType: z
        .enum(['HOURLY', 'FIXED', 'RETAINER'])
        .optional()
        .describe('Fee schedule type'),
      amount: z.number().optional().describe('Fee amount'),
      hexColor: z.string().optional().describe('Project display color'),
      portalAccess: z
        .string()
        .optional()
        .describe('Client portal access level'),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const createInput: CreateProjectInput = {
          clientName: params.clientName,
          name: params.name,
          description: params.description,
          startDate: params.startDate,
          dueDate: params.dueDate,
          hexColor: params.hexColor,
          portalAccess: params.portalAccess,
        };

        if (params.feeType || params.amount) {
          createInput.feeSchedule = {
            feeType: params.feeType,
            amount: params.amount,
          };
        }

        const result = await client.post<Project>(
          '/action/projects/create',
          createInput
        );
        return {
          content: [
            {
              type: 'text',
              text: `Successfully created project: ${result.name}\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [
            { type: 'text', text: `Failed to create project: ${message}` },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    'update_project',
    'Update an existing project in Moxie CRM',
    {
      projectId: z.string().optional().describe('ID of the project to update'),
      projectName: z
        .string()
        .optional()
        .describe('Name of the project to update (alternative to projectId)'),
      clientName: z
        .string()
        .optional()
        .describe('Client name (required if using projectName)'),
      name: z.string().optional().describe('New project name'),
      description: z.string().optional().describe('New project description'),
      startDate: z
        .string()
        .optional()
        .describe('New start date (YYYY-MM-DD format)'),
      dueDate: z
        .string()
        .optional()
        .describe('New due date (YYYY-MM-DD format)'),
      feeType: z
        .enum(['HOURLY', 'FIXED', 'RETAINER'])
        .optional()
        .describe('Fee schedule type'),
      amount: z.number().optional().describe('Fee amount'),
      hexColor: z.string().optional().describe('New project display color'),
      portalAccess: z
        .string()
        .optional()
        .describe('New client portal access level'),
      active: z.boolean().optional().describe('Whether the project is active'),
    },
    async (params) => {
      try {
        const client = getMoxieClient();

        const updateInput: UpdateProjectInput = {
          projectId: params.projectId,
          projectName: params.projectName,
          clientName: params.clientName,
          name: params.name,
          description: params.description,
          startDate: params.startDate,
          dueDate: params.dueDate,
          hexColor: params.hexColor,
          portalAccess: params.portalAccess,
          active: params.active,
        };

        if (params.feeType || params.amount) {
          updateInput.feeSchedule = {
            feeType: params.feeType,
            amount: params.amount,
          };
        }

        const result = await client.post<Project>(
          '/action/projects/update',
          updateInput
        );
        return {
          content: [
            {
              type: 'text',
              text: `Successfully updated project: ${result.name}\n\n${JSON.stringify(result, null, 2)}`,
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [
            { type: 'text', text: `Failed to update project: ${message}` },
          ],
          isError: true,
        };
      }
    }
  );

  server.tool(
    'list_project_task_stages',
    'List all available project task stages in your workspace',
    {},
    async () => {
      try {
        const client = getMoxieClient();
        const stages = await client.get<ProjectTaskStage[]>(
          '/action/projects/taskStages/list'
        );
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(stages, null, 2),
            },
          ],
        };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          content: [
            {
              type: 'text',
              text: `Failed to list project task stages: ${message}`,
            },
          ],
          isError: true,
        };
      }
    }
  );
}
