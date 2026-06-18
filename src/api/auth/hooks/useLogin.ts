import { useState } from 'react';
import { authService } from '../auth.service';
import type { AuthResponse, User } from '../auth.types';
import { toast } from 'sonner';

interface UseLoginReturn {
    login: (email: string, password: string) => Promise<void>;
    loading: boolean;
    error: string;
}

export function useLogin(onSuccess: (token: string, user: User) => void): UseLoginReturn {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const login = async (email: string, password: string) => {
        setLoading(true);
        setError('');

        const { ok, data } = await authService.login({ email, password });

        if (!ok) {
            const errData = data as { message?: string };
            setError(errData.message ?? 'Identifiants incorrects.');
            toast.error(errData.message ?? 'Identifiants incorrects.');
            setLoading(false);
            return;
        }

        const successData = data as AuthResponse;
        localStorage.setItem('apex_token', successData.token);
        localStorage.setItem('apex_user', JSON.stringify(successData.user));
        onSuccess(successData.token, successData.user);
        toast.success('Connexion réussie.');
        setLoading(false);
    };

    return { login, loading, error };
}