import { useState, useEffect } from 'react';
import { carService } from '../cars.service';
import type { CarUI } from '../cars.types';

interface UseCarDetailReturn {
  car: CarUI | null;
  loading: boolean;
  error: string;
}

export function useCarDetail(id: number | string | null): UseCarDetailReturn {
  const [car, setCar] = useState<CarUI | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id === null || id === undefined) {
      setCar(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    const numericId = typeof id === 'string' ? parseInt(id.replace(/\D/g, ''), 10) || 1 : id;

    const fetchCar = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await carService.getById(numericId);
        if (!cancelled) setCar(data);
      } catch (err) {
        if (!cancelled) {
          setError('Impossible de charger les détails du véhicule.');
          console.error(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCar();

    return () => { cancelled = true; };
  }, [id]);

  return { car, loading, error };
}