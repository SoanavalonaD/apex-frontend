import { request } from '../../api/client';
import type { AuthResponse, LoginPayload, RegisterPayload, User } from './auth.types';

export const authService = {
    login: (payload: LoginPayload) =>
        request<AuthResponse>('/auth/login', {
            method: 'POST',
            body: JSON.stringify(payload),
        }),

    register: (payload: RegisterPayload) =>
        request<AuthResponse>('/auth/register', {
            method: 'POST',
            body: JSON.stringify(payload),
        }),

    me: (token: string) =>
        request<User>('/auth/me', {}, token),

    logout: (token: string) =>
        request<void>('/auth/logout', { method: 'POST' }, token),
};