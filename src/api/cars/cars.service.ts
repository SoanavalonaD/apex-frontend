import { request } from '../client';
import type { CarApiResponse, CarUI } from './cars.types';

/* ------------------------------------------------------------------ */
/*  Image lookup — high-quality Unsplash URLs per brand/type          */
/* ------------------------------------------------------------------ */
const IMAGE_MAP: Record<string, string> = {
  porsche: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
  bmw: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
  mercedes: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
  audi: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
  tesla: 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&q=80',
  ferrari: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80',
  lamborghini: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
  default: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80',
};

export function pickImage(brand: string, type: string): string {
  const key = brand.toLowerCase();
  return IMAGE_MAP[key] ?? (type === 'Electric' ? IMAGE_MAP.tesla : IMAGE_MAP.default);
}

/* ------------------------------------------------------------------ */
/*  Description blurb per type                                         */
/* ------------------------------------------------------------------ */
function pickDescription(brand: string, model: string, type: string): string {
  const base = `${brand} ${model}`;
  if (type === 'Electric') return `La ${base} offre une expérience de conduite électrique silencieuse et puissante, alliant technologie de pointe et zéro émission.`;
  if (type === 'SUV') return `Le ${base} combine l'élégance d'un SUV de luxe avec des performances tout-terrain exceptionnelles pour une expérience de voyage suprême.`;
  return `Découvrez la ${base}, un chef-d'œuvre d'ingénierie automobile conçu pour ceux qui exigent l'excellence et la performance.`;
}

/* ------------------------------------------------------------------ */
/*  Augment a raw API car into the CarUI shape the UI expects          */
/* ------------------------------------------------------------------ */
function augmentCar(apiCar: CarApiResponse): CarUI {
  const brand = apiCar.brand || 'Apex';
  const model = apiCar.model || 'Premium';
  const priceNum = parseFloat(apiCar.price_per_day) || 0;
  const priceStr = Math.round(priceNum).toLocaleString('fr-FR');
  const typeLabel = apiCar.type === 'Electric' ? 'Électrique'
    : apiCar.type === 'SUV' ? 'SUV'
      : apiCar.type === 'Luxury' ? 'Luxe'
        : apiCar.type === 'Sport' ? 'Sport'
        : 'Economy';
  const isAvailable = apiCar.status === 'available';
  const carTypeLC = apiCar.type.toLowerCase();

  let transmission = 'Automatique';
  let seats = '5 Places';
  let rating = '4.9';
  if (carTypeLC === 'sport' || carTypeLC === 'luxury') {
    seats = '4 Sièges';
    rating = '4.9';
  }
  if (carTypeLC === 'electric') {
    transmission = 'Automatique';
    seats = '5 Places';
    rating = '4.8';
  }

  return {
    id: String(apiCar.id),
    title: `${brand} ${model}`,
    type: typeLabel,
    transmission,
    seats,
    rating,
    price: priceStr,
    image: apiCar.image || pickImage(brand, apiCar.type),
    description: pickDescription(brand, model, apiCar.type),
    available: isAvailable,
    status: isAvailable ? 'Disponible' : 'Loué',
    statusColor: isAvailable ? 'bg-green-500' : 'bg-orange-500',
    statusBg: isAvailable ? 'bg-primary-container text-on-primary-container'
      : 'bg-surface-container-highest text-on-surface-variant',
    disabled: !isAvailable,
    license_plate: apiCar.license_plate,
    location: apiCar.location || 'Antananarivo',
  };
}

/* ------------------------------------------------------------------ */
/*  Public service methods                                             */
/* ------------------------------------------------------------------ */
export const carService = {
  /** Fetch all available cars and return them as CarUI[]. */
  getAll: async (): Promise<CarUI[]> => {
    const { ok, data } = await request<CarApiResponse[]>('/cars');

    if (!ok) {
      console.error('Failed to fetch cars:', data);
      return [];
    }

    const list = data as CarApiResponse[];
    return list.map(augmentCar);
  },

  /** Fetch a single car by id and return it as CarUI. */
  getById: async (id: number): Promise<CarUI | null> => {
    const { ok, data } = await request<CarApiResponse>(`/cars/${id}`);

    if (!ok) {
      console.error(`Failed to fetch car ${id}:`, data);
      return null;
    }

    return augmentCar(data as CarApiResponse);
  },
  create: async (payload: Omit<CarApiResponse, 'id' | 'created_at' | 'updated_at'>, token: string) => {
    return request<CarApiResponse>(
      '/cars',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      },
      token
    );
  },
  update: async (id: number, payload: any, token: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/cars/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      return { ok: response.ok, data };
    } catch (error) {
      return { ok: false, data: { message: "Erreur réseau lors de la mise à jour." } };
    }
  },
  delete: async (id: string | number, token: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/cars/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      return { ok: response.ok, data };
    } catch (error) {
      return { ok: false, data: { message: "Erreur réseau lors de la suppression." } };
    }
  }
};