import axios, { type AxiosInstance } from "axios";

export interface MoxieConfig {
  apiKey: string;
  /** API host or the Base Endpoint URL shown in Moxie. */
  baseUrl?: string;
}

export type HttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
export type QueryParams = Record<string, string | number | boolean | undefined>;
export interface RequestOptions {
  params?: QueryParams;
  body?: unknown;
  encoding?: "json" | "multipart" | "form";
  accept?: string;
}

export class MoxieClient {
  private readonly client: AxiosInstance;
  private readonly actionPrefix: "public" | "zapier";

  constructor(config: MoxieConfig) {
    if (!config.apiKey?.trim()) throw new Error("MOXIE_API_KEY is required");
    const url = new URL(config.baseUrl || "https://api.withmoxie.com");
    if (!["http:", "https:"].includes(url.protocol) || url.search || url.hash || url.username || url.password) {
      throw new Error("MOXIE_BASE_URL must be an HTTP(S) API host or base endpoint without credentials, query, or fragment");
    }
    const basePath = url.pathname.replace(/\/+$/, "");
    const prefix = basePath.match(/\/(public|zapier)(?:\/action)?$/);
    this.actionPrefix = prefix?.[1] === "zapier" ? "zapier" : "public";
    url.pathname = prefix ? basePath.slice(0, prefix.index) : basePath;

    this.client = axios.create({
      baseURL: url.toString().replace(/\/+$/, ""),
      timeout: 30_000,
      headers: { "X-API-KEY": config.apiKey, "Content-Type": "application/json", Accept: "application/json" },
    });
  }

  async request<T>(method: HttpMethod, path: string, options: RequestOptions = {}): Promise<T> {
    // /action paths remain accepted for existing direct users of MoxieClient.
    const publicPath = path.startsWith("/action/") ? `/public${path}` : path;
    if (!publicPath.startsWith("/public/")) throw new Error(`Unsupported Moxie API path: ${path}`);
    const requestPath = publicPath.replace(/^\/public\/action\//, `/${this.actionPrefix}/action/`);
    try {
      const headers = {
        ...(options.encoding === "multipart" && { "Content-Type": undefined }),
        ...(options.encoding === "form" && { "Content-Type": "application/x-www-form-urlencoded" }),
        ...(options.accept && { Accept: options.accept }),
      };
      const response = await this.client.request<T>({
        method, url: requestPath, params: options.params, data: options.body,
        headers,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  get<T>(path: string, params?: QueryParams): Promise<T> {
    return this.request("GET", path, { params });
  }
  post<T>(path: string, body?: unknown, params?: QueryParams): Promise<T> {
    return this.request("POST", path, { body, params });
  }
  patch<T>(path: string, body: unknown): Promise<T> {
    return this.request("PATCH", path, { body });
  }
  put<T>(path: string, body: unknown): Promise<T> {
    return this.request("PUT", path, { body });
  }
  delete<T>(path: string, params?: QueryParams): Promise<T> {
    return this.request("DELETE", path, { params });
  }

  private handleError(error: unknown): Error {
    if (!axios.isAxiosError(error)) return error instanceof Error ? error : new Error(String(error));
    if (error.response) {
      const { status, data } = error.response;
      const details = typeof data === "string" ? data : data?.message || data?.error || data?.detail;
      const message = typeof details === "string" ? details : error.message;
      if (status === 401) return new Error(`Unauthorized. Check your MOXIE_API_KEY. ${message}`);
      if (status === 403) return new Error(`Forbidden. Check workspace access and the requested accountId. ${message}`);
      if (status === 404) return new Error(`Resource not found: ${message}`);
      if (status === 412) return new Error(`Moxie API precondition failed (412): ${message}`);
      if (status === 429) {
        const retryAfter = error.response.headers["retry-after"];
        return new Error(`Rate limit exceeded (429).${retryAfter ? ` Retry after ${retryAfter}.` : " Wait before retrying."}`);
      }
      return new Error(`Moxie API error (${status}): ${message}`);
    }
    if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") return new Error("Moxie API request timed out");
    return new Error(`Network error: Unable to reach Moxie API at ${this.client.defaults.baseURL}`);
  }
}

let clientInstance: MoxieClient | undefined;
export function getMoxieClient(): MoxieClient {
  if (!clientInstance) {
    const apiKey = process.env.MOXIE_API_KEY;
    if (!apiKey) throw new Error("MOXIE_API_KEY environment variable is required");
    clientInstance = new MoxieClient({ apiKey, baseUrl: process.env.MOXIE_BASE_URL });
  }
  return clientInstance;
}
