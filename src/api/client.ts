const API_BASE = import.meta.env.VITE_API_BASE;

export interface ApiResult<T> {
    ok: boolean;
    data: T | { message?: string };
}

export async function request<T>(
    endpoint: string,
    options: RequestInit = {},
    token?: string
): Promise<ApiResult<T>> {
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...((options.headers as object) ?? {}),
    };

    const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
    const data = await res.json();
    return { ok: res.ok, data };
}