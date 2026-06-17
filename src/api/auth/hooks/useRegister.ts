import { useState } from 'react';
import { authService } from '../auth.service';
import type { AuthResponse, User } from '../auth.types';
import { toast } from 'sonner';

interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    cin: string;
    birth_date: string;
}

interface UseRegisterReturn {
    register: (payload: RegisterPayload) => Promise<void>;
    loading: boolean;
    error: string;
}

export function useRegister(onSuccess: (token: string, user: User) => void): UseRegisterReturn {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const register = async (payload: RegisterPayload) => {
        setLoading(true);
        setError('');

        const { ok, data } = await authService.register(payload);

        if (!ok) {
            const errData = data as { message?: string };
            setError(errData.message ?? 'Erreur lors de la création du compte.');
            toast.error(errData.message ?? 'Erreur lors de la création du compte.');
            setLoading(false);
            return;
        }

        const successData = data as AuthResponse;
        localStorage.setItem('apex_token', successData.token);
        localStorage.setItem('apex_user', JSON.stringify(successData.user));
        toast.success('Compte créé avec succès.');
        onSuccess(successData.token, successData.user);
        setLoading(false);
    };

    return { register, loading, error };
}