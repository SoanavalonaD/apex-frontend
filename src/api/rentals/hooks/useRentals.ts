import { useState, useEffect } from 'react';
import { rentalService } from '../rentals.service';
import type { RentalResponse } from '../rentals.types';

interface UseRentalsReturn {
  rentals: RentalResponse[];
  loading: boolean;
  error: string;
}

export function useRentals(token: string | null): UseRentalsReturn {
  const [rentals, setRentals] = useState<RentalResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const fetchRentals = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError('');
        const { ok, data } = await rentalService.getAll(token);
        if (!ok) {
          throw new Error('Failed to fetch rentals');
        }
        if (!cancelled) setRentals(data as RentalResponse[]);
      } catch (err) {
        if (!cancelled) {
          setError('Impossible de charger les réservations.');
          console.error(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchRentals();

    return () => { cancelled = true; };
  }, [token]);

  return { rentals, loading, error };
}
