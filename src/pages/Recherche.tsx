import { useState } from 'react';
import type { Page } from '../App';
import type { Car } from '../features/cars.types';
import { useCars } from '../api/cars/hooks/useCars';

interface Filters {
  price: boolean;
  type: boolean;
  rating: boolean;
  electric: boolean;
  luxe: boolean;
}

interface RechercheProps {
  setCurrentPage: (page: Page) => void;
  setSelectedVehicle: (vehicle: Car) => void;
}

export default function Recherche({ setCurrentPage, setSelectedVehicle }: RechercheProps) {
  const { cars, loading } = useCars();
  const [filters, setFilters] = useState<Filters>({
    price: false,
    type: false,
    rating: false,
    electric: false,
    luxe: false
  });

  const toggleFilter = (key: keyof Filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAction = (car: Car) => {
    if (car.disabled) return;
    setSelectedVehicle(car);
    setCurrentPage('details');
  };

  return (
    <div className="pt-24 pb-32 px-container-margin max-w-7xl mx-auto">
      {/* Filter Section */}
      <section className="mb-gutter">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight">Flotte disponible</h2>
          <span className="text-on-surface-variant font-body-md">{cars.length} résultats</span>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          <button
            onClick={() => toggleFilter('price')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full glass-card border transition-all active:scale-95 ${
              filters.price ? 'border-primary text-primary' : 'text-on-surface-variant hover:border-outline'
            }`}
          >
            <span className="font-label-md text-label-md">Prix</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>

          <button
            onClick={() => toggleFilter('type')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full glass-card border transition-all active:scale-95 ${
              filters.type ? 'border-primary text-primary' : 'text-on-surface-variant hover:border-outline'
            }`}
          >
            <span className="font-label-md text-label-md">Type</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>

          <button
            onClick={() => toggleFilter('rating')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full glass-card border transition-all active:scale-95 ${
              filters.rating ? 'border-primary text-primary' : 'text-on-surface-variant hover:border-outline'
            }`}
          >
            <span className="font-label-md text-label-md">Note</span>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </button>

          <button
            onClick={() => toggleFilter('electric')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full glass-card border transition-all active:scale-95 ${
              filters.electric ? 'border-primary text-primary' : 'text-on-surface-variant hover:border-outline'
            }`}
          >
            <span className="font-label-md text-label-md">Électrique</span>
          </button>

          <button
            onClick={() => toggleFilter('luxe')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full glass-card border transition-all active:scale-95 ${
              filters.luxe ? 'border-primary text-primary' : 'text-on-surface-variant hover:border-outline'
            }`}
          >
            <span className="font-label-md text-label-md">Luxe</span>
          </button>
        </div>
      </section>

      {/* Results List */}
      {loading ? (
        <div className="flex justify-center py-16">
          <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      ) : (
        <div className="space-y-gutter">
          {cars.map((car) => (
            <div
              key={car.id}
              onClick={() => handleAction(car)}
              className={`zebra-stripe rounded-xl overflow-hidden glass-card group transition-all duration-300 ${
                car.disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:border-primary/40'
              }`}
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-80 h-52 relative overflow-hidden">
                  <img
                    alt={car.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={car.image}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${car.statusBg} px-3 py-1 rounded-full text-label-sm font-label-sm flex items-center gap-1`}>
                      <span className={`w-1.5 h-1.5 ${car.statusColor} rounded-full ${car.available ? 'animate-pulse' : ''}`}></span>
                      {car.status}
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h3 className="font-headline-md text-headline-md text-on-surface mb-1">{car.title}</h3>
                      <div className="flex gap-4 items-center text-on-surface-variant flex-wrap">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[20px] text-secondary">bolt</span>
                          <span className="text-label-md font-label-md">{car.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[20px] text-secondary">settings_input_component</span>
                          <span className="text-label-md font-label-md">{car.transmission}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[20px] text-secondary">group</span>
                          <span className="text-label-md font-label-md">{car.seats || '4 places'}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-headline-md text-headline-md">
                        {car.price} <span className="text-label-md font-label-md">MGA</span>
                        <span className="text-label-md font-label-md text-on-surface-variant">/jour</span>
                      </div>
                      <div className="flex items-center justify-end gap-1 text-secondary">
                        <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-label-md">{car.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4" onClick={(e) => e.stopPropagation()}>
                    {car.disabled ? (
                      <button
                        className="flex-1 py-3 rounded-lg bg-surface-variant text-on-surface-variant cursor-not-allowed font-label-md"
                        disabled
                      >
                        Indisponible
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAction(car)}
                        className="flex-1 py-3 rounded-lg bg-primary-container text-on-primary-container font-label-md blue-glow active:scale-95 transition-all"
                      >
                        Détails
                      </button>
                    )}
                    <button className="px-4 py-3 rounded-lg border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary transition-all active:scale-95 flex items-center">
                      <span className="material-symbols-outlined">favorite</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 md:right-12 w-14 h-14 rounded-full bg-primary-container text-on-primary-container shadow-2xl flex items-center justify-center blue-glow active:scale-90 transition-transform z-40 group">
        <span className="material-symbols-outlined">filter_list</span>
        <span className="absolute right-full mr-4 bg-slate-800 border border-outline-variant px-3 py-1 rounded text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Filtrer la flotte
        </span>
      </button>
    </div>
  );
}