import { buildQueryString } from '@/lib/utils/parameterHelper';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD';

export interface FetchOptions extends RequestInit {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: any;
  params?: JsonObject;
  retryOn401?: boolean;
}

const isServer = typeof window === 'undefined';

const getAccessTokenFromCookie = (): string | null => {
  if (isServer) {
    return null;
  }
  const match = document.cookie.match(/(?:^|;\s*)access_token=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
};

const refreshAccessToken = async (): Promise<boolean> => {
  try {
    const res = await fetch('/api/account/auth/refresh', {
      method: 'POST',
      credentials: 'include',
    });
    return res.ok;
  } catch {
    return false;
  }
};

const baseFetchApi = async (endpoint: string, options: FetchOptions = {}) => {
  const prefix = isServer ? process.env.NEXT_PUBLIC_API_HOST : '';
  const method = options.method || 'GET';

  let url = isServer
    ? `${prefix}${endpoint}`
    : endpoint.startsWith('/api')
      ? endpoint
      : `${prefix}${endpoint}`;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include',
  };

  if (['GET', 'HEAD', 'DELETE'].includes(method) && options.params) {
    url += buildQueryString(options.params);
  } else if (['POST', 'PUT', 'PATCH'].includes(method) && options.body) {
    const isFormData = options.body instanceof FormData;
    if (isFormData) {
      delete (fetchOptions.headers as Record<string, string>)['Content-Type'];
      fetchOptions.body = options.body;
    } else {
      fetchOptions.body = JSON.stringify(options.body);
    }
  }

  const setAuthorization = () => {
    const token = getAccessTokenFromCookie();
    if (token) {
      (fetchOptions.headers as Record<string, string>).Authorization = `Bearer ${token}`;
    }
  };

  setAuthorization();

  try {
    let res = await fetch(url, fetchOptions);

    if (res.status === 401 && options.retryOn401 !== false) {
      const refreshed = await refreshAccessToken();
      if (refreshed) {
        setAuthorization();
        res = await fetch(url, fetchOptions);
      }
    }

    if (!res.ok) {
      const err = await res.json();
      throw new Error(`[${err.code}]: ${err.message}`);
    }

    if (res.status === 204) {
      return {
        data: null,
        status: 204,
        message: 'no Content',
      };
    }

    return res.json();
  } catch (error: any) {
    if (!isServer) {
      const { openClientErrorToast } = await import('./fetchApiClientErrorHandler');
      openClientErrorToast(error.message || 'API 요청 실패');
    }
    throw error;
  }
};

// 헬퍼 메서드 정의
export const fetchApi = Object.assign(baseFetchApi, {
  get: <T = any>(
    url: string,
    params?: JsonObject,
    options?: Omit<FetchOptions, 'method' | 'params' | 'body'>
  ) =>
    baseFetchApi(url, {
      ...options,
      method: 'GET',
      params,
    }) as Promise<T>,

  post: <T = any>(url: string, body?: any, options?: Omit<FetchOptions, 'method' | 'body'>) =>
    baseFetchApi(url, {
      ...options,
      method: 'POST',
      body,
    }) as Promise<T>,

  put: <T = any>(url: string, body?: any, options?: Omit<FetchOptions, 'method' | 'body'>) =>
    baseFetchApi(url, {
      ...options,
      method: 'PUT',
      body,
    }) as Promise<T>,

  patch: <T = any>(url: string, body?: any, options?: Omit<FetchOptions, 'method' | 'body'>) =>
    baseFetchApi(url, {
      ...options,
      method: 'PATCH',
      body,
    }) as Promise<T>,

  delete: <T = any>(
    url: string,
    params?: JsonObject,
    options?: Omit<FetchOptions, 'method' | 'params' | 'body'>
  ) =>
    baseFetchApi(url, {
      ...options,
      method: 'DELETE',
      params,
    }) as Promise<T>,
});
