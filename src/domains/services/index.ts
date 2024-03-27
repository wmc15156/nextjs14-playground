type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

class HttpService {
  private token?: string;

  setToken(token: string) {
    this.token = token;
  }

  async get<T>(url: string, headers?: HeadersInit): Promise<T> {
    return this.request<T, null>('GET', url, undefined, headers);
  }

  async post<T, BodyType>(url: string, body: BodyType, headers?: HeadersInit): Promise<T> {
    return this.request<T, BodyType>('POST', url, body, headers);
  }

  async put<T, BodyType>(url: string, body: BodyType, headers?: HeadersInit): Promise<T> {
    return this.request<T, BodyType>('PUT', url, body, headers);
  }

  async delete<T>(url: string, headers?: HeadersInit): Promise<T> {
    return this.request<T, null>('DELETE', url, undefined, headers);
  }

  private async request<T, BodyType>(
    method: HttpMethod,
    url: string,
    body?: BodyType,
    headers?: HeadersInit
  ): Promise<T> {
    const init: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    if (body !== undefined && (method === 'POST' || method === 'PUT')) {
      init.body = JSON.stringify(body);
    }

    const response = await fetch(url, init);

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }
}

export default HttpService;
