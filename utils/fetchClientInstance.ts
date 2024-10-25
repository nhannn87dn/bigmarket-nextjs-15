import { globalConfig } from '@/constants/configs';
const BASE_URL = globalConfig.BACKEND_API;

// Ví dụ header mặc định: Authorization Token
const DEFAULT_HEADERS = {
  'X-API-Key': globalConfig.BACKEND_X_API_KEY,
  'Content-Type': 'application/json',
};


interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
  baseURL?: string;
}

class HttpClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string, defaultHeaders?: Record<string, string>) {
    this.baseURL = baseURL;
    this.defaultHeaders = defaultHeaders || {};
  }

  private async request<T>(
    endpoint: string,
    options: FetchOptions = {next: { revalidate: 3600 }} // Time-based Revalidation, revalidate at most every hour
  ): Promise<T> {
    const { headers, baseURL, ...restOptions } = options;

    // Gộp headers mặc định và headers truyền vào từ request
    const combinedHeaders = {
      ...this.defaultHeaders,
      ...headers,
    };

    // Gộp baseURL mặc định và endpoint
    const url = `${baseURL || this.baseURL}${endpoint}`;

    try {
      const response = await fetch(url, {
        ...restOptions,
        headers: combinedHeaders,
      });

      if (!response.ok) {
        // Xử lý lỗi HTTP
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      // Giải mã JSON trả về
      return await response.json();
    } catch (error) {
      // Xử lý lỗi mạng hoặc lỗi khác
      console.error("Fetch error:", error);
      throw error;
    }
  }

  // Hàm GET
  public get<T>(endpoint: string, options?: FetchOptions): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', ...options });
  }

  // Hàm POST
  public post<T>(
    endpoint: string,
    body: any,
    options?: FetchOptions
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json', ...options?.headers },
      ...options,
    });
  }

  // Hàm PUT
  public put<T>(
    endpoint: string,
    body: any,
    options?: FetchOptions
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json', ...options?.headers },
      ...options,
    });
  }

  // Hàm DELETE
  public delete<T>(endpoint: string, options?: FetchOptions): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE', ...options });
  }
}


// Tạo một instance HttpClient với baseURL và headers mặc định
const fetchApi = new HttpClient(BASE_URL, DEFAULT_HEADERS);

export default fetchApi;
