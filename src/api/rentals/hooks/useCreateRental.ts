import { useState } from 'react';
import { rentalService } from '../rentals.service';
import type { CreateRentalPayload, RentalResponse } from '../rentals.types';
import { toast } from 'sonner';

interface UseCreateRentalReturn {
    createRental: (payload: CreateRentalPayload, token: string) => Promise<RentalResponse | null>;
    loading: boolean;
    error: string;
}

export function useCreateRental(): UseCreateRentalReturn {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const createRental = async (payload: CreateRentalPayload, token: string): Promise<RentalResponse | null> => {
        setLoading(true);
        setError('');

        const { ok, data } = await rentalService.create(payload, token);

        if (!ok) {
            const errData = data as { message?: string };
            const message = errData.message ?? 'Erreur lors de la réservation.';
            setError(message);
            toast.error(message);
            setLoading(false);
            return null;
        }

        const successData = data as RentalResponse;
        toast.success('Réservation confirmée avec succès.');
        setLoading(false);
        return successData;
    };

    return { createRental, loading, error };
}