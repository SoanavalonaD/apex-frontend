import type { Page } from '../App';
import { useState, useRef } from 'react'
import type { Car } from '../features/cars.types'
import { useCreateRental } from '../api/rentals/hooks/useCreateRental'

export interface Booking {
  id: string;
  vehicleTitle: string;
  vehicleImage: string;
  dates: string;
  pickup: string;
  dropoff: string;
  totalAmount: string;
  status: string;
}

interface ReservationProps {
  selectedVehicle?: Car | null;
  setCurrentPage: (page: Page) => void;
  onConfirmBooking?: (booking: Booking) => void;
  token: string | null;
}

export default function Reservation({ selectedVehicle, setCurrentPage, onConfirmBooking, token }: ReservationProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>('');
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const [pickupLocation, setPickupLocation] = useState<string>("");
  const [dropoffLocation, setDropoffLocation] = useState<string>("");

  const { createRental, loading } = useCreateRental();

  const defaultVehicle: Car = {
    id: 'porsche-taycan',
    title: 'Porsche Taycan Turbo S',
    type: 'Électrique',
    transmission: '750ch',
    specs: 'Transmission Intégrale',
    rating: '5.0',
    price: '1 200 000',
    seats: '4 Sièges',
    baggage: '2 Bagages',
    accel: '0-100 en 2.6s',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3ZuYfz-eWYFdGEhHYjxKMDjC-huOC8EUOpcND1MrOQLx5H-OynyYP6eFoRdWclghDG9JsGwifPxAUxNp-khJS45x1i_CwyaVZMtbAs7S68z8lLqZBwlJj69LjjL46kTB5_VjCivgammb9GVIUUOM8AdJg8evJNOxIxi5OeYAlrbQczpw-rgzbpT0qhUFCOLPm1oQgDQsmQ0RmxKVH06-rlRgFFY_JWlIGjXU98T_uLyGUbvu4vDFdXmu8JdxYG0udoyfwpLKmz8',
    description: 'Véhicule électrique haut de gamme alliant performance et luxe.',
    available: true,
    status: 'Disponible',
    statusColor: 'bg-green-500',
    statusBg: 'bg-primary-container text-on-primary-container',
    license_plate: 'AA-0000-BB',
    location: 'Antananarivo',
  };

  const vehicle: Car = selectedVehicle
    ? {
      ...defaultVehicle,
      ...selectedVehicle,
      seats: selectedVehicle.seats ?? '5 Sièges',
      baggage: selectedVehicle.baggage ?? '2 Bagages',
      accel: selectedVehicle.accel ?? '0-100 en 1.99s',
      transmission: selectedVehicle.transmission ?? 'Automatique',
    } as Car
    : defaultVehicle;

  // Extract a numeric car_id from the vehicle's id string (fallback to 1)
  const carId = parseInt(vehicle.id.replace(/\D/g, ''), 10) || 1;

  // Pricing calculations
  const dailyRate = parseInt(vehicle.price.replace(/\s/g, ''), 10);
  const rentalDays = 3;
  const rawSubtotal = dailyRate * rentalDays;

  const insurance = vehicle.id === 'porsche-taycan' ? 580000 : 300000;
  const serviceFee = vehicle.id === 'porsche-taycan' ? 130000 : 100000;
  const envTax = vehicle.id === 'porsche-taycan' ? 50000 : 28000;

  const discount = promoApplied ? Math.round(rawSubtotal * 0.1) : 0;
  const totalAmount = rawSubtotal + insurance + serviceFee + envTax - discount;

  const handleConfirm = async (): Promise<void> => {
    if (!token) {
      alert('Veuillez vous connecter pour effectuer une réservation.');
      setCurrentPage('login');
      return;
    }

    // Get dates from the form inputs, fall back to defaults
    const startDate = startDateRef.current?.value || '2026-10-24T10:00';
    const endDate = endDateRef.current?.value || '2026-10-27T18:00';

    const result = await createRental({
      car_id: carId,
      start_date: startDate,
      end_date: endDate,
      pickup_location: pickupLocation,
      dropoff_location: dropoffLocation,
    }, token);

    if (!result) {
      // Error is already handled and toasted by the hook
      return;
    }

    // Build a Booking object for local state (history page)
    const formatDate = (raw: string): string => {
      try {
        const d = new Date(raw);
        return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
      } catch {
        return raw;
      }
    };

    if (onConfirmBooking) {
      onConfirmBooking({
        id: result.id.toString(),
        vehicleTitle: vehicle.title,
        vehicleImage: vehicle.image,
        dates: `${formatDate(startDate)} — ${formatDate(endDate)}`,
        pickup: pickupLocation,
        dropoff: dropoffLocation,
        totalAmount: totalAmount.toLocaleString(),
        status: "Confirmée"
      });
    }
    setShowModal(true);
  };

  const applyPromo = (): void => {
    if (promoCode.trim().toUpperCase() === 'APEX2026') {
      setPromoApplied(true);
      alert('Code promo appliqué : 10% de réduction sur la location de base !');
    } else {
      alert('Code promo invalide. Essayez "APEX2026".');
    }
  };

  return (
    <div className="pt-24 pb-32 px-container-margin max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-section-gap">
        {/* Left Column: Selection Details */}
        <div className="lg:col-span-7 space-y-section-gap">
          {/* Vehicle Summary Card */}
          <section>
            <h2 className="font-headline-md text-headline-md mb-6 flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-secondary">directions_car</span>
              Votre Sélection
            </h2>
            <div className="glass-panel rounded-xl overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={vehicle.title}
                  src={vehicle.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-secondary-container/20 text-secondary-fixed-dim px-3 py-1 rounded-full text-label-sm font-label-sm border border-secondary/30 flex items-center w-fit backdrop-blur-md">
                    <span className="status-dot bg-secondary-fixed-dim shadow-[0_0_8px_#4cd6ff]"></span>
                    Flotte Premium
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-lg text-headline-lg text-white">{vehicle.title}</h3>
                    <p className="text-on-surface-variant font-body-md">
                      {vehicle.type} • {vehicle.transmission} • {vehicle.specs}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-headline-md">
                      {vehicle.price}
                      <span className="text-label-md font-label-md text-on-surface-variant"> MGA/jour</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 border-t border-outline-variant pt-4">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary">airline_seat_recline_normal</span>
                    <span className="text-label-md font-label-md">{vehicle.seats}</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary">luggage</span>
                    <span className="text-label-md font-label-md">{vehicle.baggage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary">bolt</span>
                    <span className="text-label-md font-label-md">{vehicle.accel}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Location & Schedule */}
          <section className="space-y-6">
            <h2 className="font-headline-md text-headline-md flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-secondary">calendar_today</span>
              Détails de la Location
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Pickup */}
              <div className="glass-panel p-6 rounded-xl space-y-4 electric-glow transition-all duration-300">
                <label className="text-label-md font-label-md text-secondary uppercase tracking-wider">Départ</label>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">near_me</span>
                  <div className="flex-1">
                    <input
                      type="text"
                      className="bg-transparent border-none focus:ring-0 text-white w-full font-body-lg font-bold outline-none placeholder:text-on-surface-variant/50 px-0"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="Lieu de départ"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-surface-dim/50 p-3 rounded-lg border border-outline-variant">
                  <span className="material-symbols-outlined text-on-surface-variant">schedule</span>
                  <input
                    ref={startDateRef}
                    className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-label-md outline-none"
                    type="datetime-local"
                    defaultValue="2026-10-24T10:00"
                  />
                </div>
              </div>

              {/* Drop-off */}
              <div className="glass-panel p-6 rounded-xl space-y-4 electric-glow transition-all duration-300">
                <label className="text-label-md font-label-md text-secondary uppercase tracking-wider">Retour</label>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <div className="flex-1">
                    <input
                      type="text"
                      className="bg-transparent border-none focus:ring-0 text-white w-full font-body-lg font-bold outline-none placeholder:text-on-surface-variant/50 px-0"
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      placeholder="Lieu de retour"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-surface-dim/50 p-3 rounded-lg border border-outline-variant">
                  <span className="material-symbols-outlined text-on-surface-variant">schedule</span>
                  <input
                    ref={endDateRef}
                    className="bg-transparent border-none focus:ring-0 text-on-surface w-full font-label-md outline-none"
                    type="datetime-local"
                    defaultValue="2026-10-27T18:00"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Price Breakdown & Payment */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 space-y-6">
            <section className="glass-panel p-8 rounded-xl border-primary/20">
              <h2 className="font-headline-md text-headline-md mb-6 text-white">Résumé du Prix</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="font-body-md">Tarif Journalier ({vehicle.price} x {rentalDays})</span>
                  <span className="font-label-md text-on-surface">{rawSubtotal.toLocaleString()} MGA</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between items-center text-green-500">
                    <span className="font-body-md">Réduction Code Promo (10%)</span>
                    <span className="font-label-md">- {discount.toLocaleString()} MGA</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="font-body-md flex items-center gap-1">
                    Assurance (Elite Plus)
                    <span className="material-symbols-outlined text-[16px]">info</span>
                  </span>
                  <span className="font-label-md text-on-surface">{insurance.toLocaleString()} MGA</span>
                </div>
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="font-body-md">Frais de Service</span>
                  <span className="font-label-md text-on-surface">{serviceFee.toLocaleString()} MGA</span>
                </div>
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="font-body-md">Taxe Environnementale</span>
                  <span className="font-label-md text-on-surface">{envTax.toLocaleString()} MGA</span>
                </div>
                <div className="pt-4 border-t border-outline-variant space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-headline-md text-headline-md text-white">Montant Total</span>
                    <span className="font-headline-md text-headline-md text-primary">{totalAmount.toLocaleString()} MGA</span>
                  </div>
                  <p className="text-label-sm text-on-surface-variant italic">Assurance tous risques et assistance routière incluses.</p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleConfirm}
                disabled={loading}
                className="w-full mt-8 bg-primary-container hover:opacity-90 active:scale-[0.98] transition-all duration-200 text-on-primary-container font-headline-md py-4 rounded-xl shadow-[0_4px_20px_rgba(0,82,255,0.3)] flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Traitement en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Confirmer la Réservation</span>
                    <span className="material-symbols-outlined">lock</span>
                  </>
                )}
              </button>
              <div className="mt-6 flex justify-center gap-4 text-on-surface-variant opacity-50">
                <span className="material-symbols-outlined">payment</span>
                <span className="material-symbols-outlined">security</span>
                <span className="material-symbols-outlined">verified_user</span>
              </div>
            </section>

            {/* Add-ons / Promotions */}
            <div className="glass-panel p-6 rounded-xl border-dashed border-outline-variant">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">loyalty</span>
                </div>
                <div className="flex-1">
                  <p className="font-label-md text-label-md text-white">Appliquer Code Promo</p>
                  <p className="text-label-sm text-on-surface-variant">Code membre: utilisez "APEX2026"</p>
                  <input
                    type="text"
                    placeholder="Entrer le code"
                    value={promoCode}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPromoCode(e.target.value)}
                    className="mt-2 w-full bg-surface-dim/50 border border-outline-variant p-2 rounded text-sm text-white focus:outline-none"
                  />
                </div>
                <button onClick={applyPromo} className="text-primary font-label-md self-end">Ajouter</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setShowModal(false)}></div>
          <div className="relative glass-panel max-w-md w-full p-10 rounded-2xl text-center scale-100 transition-transform duration-500 opacity-100 transform-gpu">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl mb-4 text-white">Réservation Confirmée</h2>
            <p className="text-on-surface-variant font-body-lg mb-8">
              Votre {vehicle.title} est réservée. Une confirmation et une clé numérique ont été envoyées à votre adresse e-mail.
            </p>
            <div className="space-y-4">
              <button
                className="w-full bg-surface-container-highest border border-outline-variant py-4 rounded-xl font-label-md hover:bg-surface-variant transition-colors text-white"
                onClick={() => {
                  setShowModal(false);
                  setCurrentPage('history');
                }}
              >
                Voir mes réservations
              </button>
              <button
                className="w-full text-primary font-label-md"
                onClick={() => {
                  setShowModal(false);
                  setCurrentPage('home');
                }}
              >
                Retour au tableau de bord
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}