import { useState, useEffect } from 'react';
import { carService } from '../cars.service';
import type { CarUI } from '../cars.types';

interface UseCarsReturn {
  cars: CarUI[];
  loading: boolean;
  error: string;
}

export function useCars(): UseCarsReturn {
  const [cars, setCars] = useState<CarUI[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const fetchCars = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await carService.getAll();
        if (!cancelled) setCars(data);
      } catch (err) {
        if (!cancelled) {
          setError('Impossible de charger la flotte.');
          console.error(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCars();

    return () => { cancelled = true; };
  }, []);

  return { cars, loading, error };
}