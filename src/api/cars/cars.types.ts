export interface CarApiResponse {
  id: number;
  brand: string;
  model: string;
  license_plate: string;
  type: string;
  price_per_day: string;
  status: string;
  created_at: string;
  updated_at: string;
  location: string;
}

export interface CarUI {
  id: string;
  title: string;
  type: string;
  transmission: string;
  seats: string;
  rating: string;
  price: string;
  image: string;
  description: string;
  available: boolean;
  status: string;
  statusColor: string;
  statusBg: string;
  specs?: string;
  baggage?: string;
  accel?: string;
  disabled?: boolean;
  license_plate: string;
  location: string;
}

export interface CarCreatePayload {
  brand: string;
  model: string;
  license_plate: string;
  type: string;
  price_per_day: number;
  status: string;
}

export interface ValidationErrorResponse {
    message: string;
    errors: Record<string, string[]>;
}