import { CarApiResponse, CarUI } from './cars.types';

export const mapCarToUI = (car: CarApiResponse): CarUI => {
    const isAvailable = car.status === 'available';

    // Couleurs dynamiques selon le statut
    const statusColors: Record<string, { color: string; bg: string }> = {
        available: { color: 'text-green-700', bg: 'bg-green-50 border-green-200' },
        maintenance: { color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' },
        rented: { color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
    };

    const currentStatus = statusColors[car.status] ?? { color: 'text-gray-700', bg: 'bg-gray-50' };

    // Génération d'une image Unsplash par défaut basée sur la marque et le modèle
    const query = encodeURIComponent(`${car.brand} ${car.model}`);
    const fallbackImage = `https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80`; // Image de secours (Porsche)
    const image = car.type === 'electric'
        ? `https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80` // Tesla-like alternative
        : `https://source.unsplash.com/featured/600x400/?car,${query}`;

    return {
        id: String(car.id),
        title: `${car.brand} ${car.model}`,
        type: car.type,
        transmission: car.type === 'electric' ? 'Automatique' : 'Manuelle',
        seats: '5 Places',
        rating: '4.8',
        price: `${parseFloat(car.price_per_day).toFixed(2)} €`,
        image: image,
        description: `Découvrez le confort de conduite à bord de cette magnifique ${car.brand} ${car.model}. Idéale pour vos trajets urbains et vos longs week-ends.`,
        available: isAvailable,
        status: car.status,
        statusColor: currentStatus.color,
        statusBg: currentStatus.bg,
        specs: 'Climatisation, Bluetooth, Régulateur',
        baggage: '2 Bagages',
        accel: '0-100 km/h en 6.5s',
        disabled: !isAvailable,
    };
};