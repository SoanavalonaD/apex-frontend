import { request } from '../client';
import type { CreateRentalPayload, RentalResponse } from './rentals.types';

export const rentalService = {
    create: (payload: CreateRentalPayload, token: string) =>
        request<RentalResponse>('/rentals', {
            method: 'POST',
            body: JSON.stringify(payload),
        }, token),
    getAll: (token: string) =>
        request<RentalResponse[]>('/rentals', {
            method: 'GET',
        }, token),
};