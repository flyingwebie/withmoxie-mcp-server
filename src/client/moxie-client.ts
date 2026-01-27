import axios, { AxiosInstance, AxiosError } from "axios";

export interface MoxieConfig {
  apiKey: string;
  baseUrl: string;
}

export class MoxieClient {
  private client: AxiosInstance;

  constructor(config: MoxieConfig) {
    if (!config.apiKey) {
      throw new Error("MOXIE_API_KEY is required");
    }
    if (!config.baseUrl) {
      throw new Error("MOXIE_BASE_URL is required");
    }

    this.client = axios.create({
      baseURL: config.baseUrl,
      headers: {
        "X-API-KEY": config.apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  async get<T>(path: string, params?: Record<string, string>): Promise<T> {
    try {
      const response = await this.client.get<T>(path, { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post<T>(path: string, body?: object): Promise<T> {
    try {
      const response = await this.client.post<T>(path, body);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete<T>(path: string): Promise<T> {
    try {
      const response = await this.client.delete<T>(path);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: unknown): Error {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message?: string; error?: string }>;

      if (axiosError.response) {
        const status = axiosError.response.status;
        const data = axiosError.response.data;
        const message = data?.message || data?.error || axiosError.message;

        if (status === 429) {
          return new Error("Rate limit exceeded. Moxie allows 100 requests per 5 minutes.");
        }
        if (status === 401) {
          return new Error("Unauthorized. Check your MOXIE_API_KEY.");
        }
        if (status === 404) {
          return new Error(`Resource not found: ${message}`);
        }

        return new Error(`Moxie API error (${status}): ${message}`);
      }

      if (axiosError.request) {
        return new Error(`Network error: Unable to reach Moxie API at ${axiosError.config?.baseURL}`);
      }
    }

    return error instanceof Error ? error : new Error(String(error));
  }
}

let clientInstance: MoxieClient | null = null;

export function getMoxieClient(): MoxieClient {
  if (!clientInstance) {
    const apiKey = process.env.MOXIE_API_KEY;
    const baseUrl = process.env.MOXIE_BASE_URL;

    if (!apiKey) {
      throw new Error("MOXIE_API_KEY environment variable is required");
    }
    if (!baseUrl) {
      throw new Error("MOXIE_BASE_URL environment variable is required (e.g., https://pod00.withmoxie.dev/api/public)");
    }

    clientInstance = new MoxieClient({ apiKey, baseUrl });
  }

  return clientInstance;
}
