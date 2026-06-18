export interface CreateRentalPayload {
    car_id: number;
    start_date: string;
    end_date: string;
    pickup_location: string;
    dropoff_location: string;
}

export interface RentalResponse {
    id: number;
    user_id: number;
    car_id: number;
    start_date: string;
    end_date: string;
    total_price: string;
    status: string;
    pickup_location?: string;
    dropoff_location?: string;
    created_at: string;
    updated_at: string;
    car?: {
        id: number;
        title: string;
        image: string;
        brand: string;
        model: string;
        license_plate: string;
        type: string;
        price_per_day: string;
        status: string;
    };
    user?: {
        id: number;
        name: string;
        email: string;
    };
}