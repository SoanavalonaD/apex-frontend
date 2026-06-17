/**
 * Raw shape returned by GET /api/cars and GET /api/cars/{id}
 * from the Laravel backend.
 */
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
}

/**
 * Augmented Car shape consumed by the UI.
 * Fields marked with /*+ are synthesised by the mapper because
 * the backend database does not store them.
 */
export interface CarUI {
  id: string;
  title: string;              // brand + model
  type: string;
  transmission: string;       // + mapped from type/value
  seats: string;              // + placeholder
  rating: string;             // + placeholder
  price: string;              // formatted price_per_day
  image: string;              // + Unsplash URL based on brand/type
  description: string;        // + generated blurb
  available: boolean;
  status: string;
  statusColor: string;
  statusBg: string;
  specs?: string;
  baggage?: string;
  accel?: string;
  disabled?: boolean;
}