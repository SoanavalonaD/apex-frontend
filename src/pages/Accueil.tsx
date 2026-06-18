import { useState, useEffect } from 'react';
import type { Page } from '../App';
import type { CarUI } from '../api/cars/cars.types'; // Utilisation unifiée de CarUI
import { useCars } from '../api/cars/hooks/useCars';
import { carService } from '../api/cars/cars.service';
import { DeleteConfirmationModal } from './admin/modal/DeleteConfirmationModal';

interface AccueilProps {
  setCurrentPage: (page: Page) => void;
  setSelectedVehicle: (vehicle: CarUI) => void;
  isAdmin?: boolean;
}

export default function Accueil({ setCurrentPage, setSelectedVehicle, isAdmin = false }: AccueilProps) {
  const { cars, loading } = useCars();
  const [pickup, setPickup] = useState('');
  const [dates, setDates] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [vehicleIndex, setVehicleIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [carToDelete, setCarToDelete] = useState<CarUI | null>(null);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);

  const categories = [
    { id: 'SUV', label: 'SUV', icon: 'airport_shuttle' },
    { id: 'Economy', label: 'Économie', icon: 'speed' },
    { id: 'Électrique', label: 'Électrique', icon: 'bolt' },
    { id: 'Luxe', label: 'Luxe', icon: 'diamond' },
    { id: 'Sport', label: 'Sport', icon: 'diamond' }
  ];

  const searchCity = pickup.trim().toLowerCase();
  
  let filteredCars = cars ?? [];
  if (searchCity) {
    filteredCars = filteredCars.filter(car => car.location?.toLowerCase().includes(searchCity));
  }
  if (activeCategory) {
    filteredCars = filteredCars.filter(car => car.type === activeCategory);
  }

  const sourceCars = (searchCity || activeCategory) ? filteredCars : (cars ?? []);
  
  useEffect(() => {
    setVehicleIndex(0);
  }, [searchCity, activeCategory]);

  const featuredVehicles = sourceCars.slice(vehicleIndex, vehicleIndex + 3);

  const canGoPrev = vehicleIndex > 0;
  const canGoNext = vehicleIndex + 3 < sourceCars.length;

  const handlePrev = () => {
    if (canGoPrev) setVehicleIndex(prev => prev - 1);
  };

  const handleNext = () => {
    if (canGoNext) setVehicleIndex(prev => prev + 1);
  };

  const handleBook = (car: CarUI) => {
    setSelectedVehicle(car);
    setCurrentPage('reservation');
  };

  const handleEdit = (car: CarUI) => {
    setSelectedVehicle(car);
    setCurrentPage('edit-car');
  };

  const handleOpenDeleteModal = (car: CarUI) => {
    setCarToDelete(car);
    setIsModalOpen(true);
  };

  // Traitement de la suppression depuis le modal
  const handleConfirmDelete = async () => {
    if (!carToDelete) return;

    setDeleteLoading(true);
    const token = localStorage.getItem('apex_token') ?? '';

    if (!token) {
      alert("Action non autorisée. Jeton admin manquant.");
      setDeleteLoading(false);
      return;
    }

    const { ok, data } = await carService.delete(carToDelete.id, token);

    if (ok) {
      setIsModalOpen(false);
      setCarToDelete(null);
      window.location.reload();
    } else {
      alert((data as any).message || "Une erreur est survenue lors de la suppression.");
    }
    setDeleteLoading(false);
  };

  return (
    <div className="pt-24 pb-32 max-w-7xl mx-auto px-container-margin">
      {/* Hero Search Section */}
      <section className="mb-section-gap relative">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full h-[400px] pointer-events-none opacity-20"></div>
        <div className="relative z-10 space-y-6">
          <div>
            <h2 className="font-headline-xl text-headline-xl mb-2 text-white">Élevez Votre Voyage</h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg max-w-xl">
              Accès à une flotte premium avec une précision de niveau exécutif. Découvrez le summum de la location automobile.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl flex flex-col md:flex-row gap-4 shadow-2xl">
            <div className="flex-1 space-y-2">
              <label className="font-label-sm text-label-sm text-primary uppercase tracking-widest block ml-1">
                Lieu de prise en charge
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary">search</span>
                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary-container outline-none py-3 pl-12 pr-4 transition-all text-on-surface"
                  placeholder="Antananarivo, Madagascar"
                />
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <label className="font-label-sm text-label-sm text-primary uppercase tracking-widest block ml-1">
                Dates
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary">calendar_month</span>
                <input
                  type="datetime-local"
                  defaultValue="2026-10-27T18:00"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary-container outline-none py-3 pl-12 pr-4 transition-all text-on-surface"
                  placeholder="24 oct. - 28 oct."
                />
              </div>
            </div>
            <button
              onClick={() => {
                document.getElementById('featured-rentals')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary-container text-white px-10 py-3 rounded-lg font-headline-md text-headline-md electric-glow transition-all active:scale-95 self-end md:h-[54px]"
            >
              Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="mb-section-gap">
        <div className="flex justify-between items-end mb-6">
          <h3 className="font-headline-lg text-headline-lg">Catégories Populaires</h3>
          <button onClick={() => setCurrentPage('search')} className="text-primary font-label-md text-label-md hover:underline">
            Voir Tout
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id === activeCategory ? null : cat.id);
                document.getElementById('featured-rentals')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex-shrink-0 w-32 h-32 glass-card rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all hover:border-primary ${
                cat.id === activeCategory ? 'border-primary bg-primary-container/10' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                cat.id === activeCategory ? 'bg-primary-container' : 'bg-surface-container group-hover:bg-primary-container/20'
              }`}>
                <span className={`material-symbols-outlined scale-125 ${cat.id === activeCategory ? 'text-white' : 'text-secondary'}`}>{cat.icon}</span>
              </div>
              <span className={`font-label-md text-label-md ${cat.id === activeCategory ? 'text-primary' : ''}`}>{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Rentals Grid */}
      <section id="featured-rentals" className="mb-section-gap pt-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="font-headline-lg text-headline-lg">Locations Vedettes</h3>
            <p className="text-on-surface-variant font-body-md text-body-md">Des machines haute performance méticuleusement entretenues.</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`w-10 h-10 rounded-full glass-card flex items-center justify-center transition-colors ${canGoPrev ? 'hover:bg-surface-container-highest text-on-surface' : 'opacity-50 cursor-not-allowed text-on-surface-variant'}`}
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button 
              onClick={handleNext}
              disabled={!canGoNext}
              className={`w-10 h-10 rounded-full glass-card flex items-center justify-center transition-colors ${canGoNext ? 'hover:bg-surface-container-highest text-on-surface' : 'opacity-50 cursor-not-allowed text-on-surface-variant'}`}
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center py-16">
            <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((car) => (
              <div
                key={car.id}
                onClick={() => {
                  if (car.available) {
                    setSelectedVehicle(car);
                    setCurrentPage('details');
                  }
                }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer transition-all hover:-translate-y-2 relative"
              >
                {/* ADMIN BADGES / CONTROLS */}
                {isAdmin && (
                  <div className="absolute top-4 right-4 z-30 flex gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => handleEdit(car)}
                      className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary-container transition-colors"
                      title="Modifier le véhicule"
                    >
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button
                      onClick={() => handleOpenDeleteModal(car)} // Changement ici : déclenche le modal
                      className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-red-400 hover:bg-red-600 hover:text-white transition-colors"
                      title="Supprimer le véhicule"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                )}

                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={car.title}
                    src={car.image}
                  />
                  <div className="absolute top-4 left-4">
                    {car.available ? (
                      <span className="bg-primary-container/20 backdrop-blur-md border border-primary/30 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Disponible
                      </span>
                    ) : (
                      <span className="bg-error-container/20 backdrop-blur-md border border-error/30 text-error px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        Loué
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-[#0B0B0C] to-transparent"></div>
                </div>
                <div className="p-6 relative -mt-8">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-headline-md text-headline-md text-white">{car.title}</h4>
                      <p className="text-on-surface-variant font-label-md text-label-md">
                        {car.type} • {car.transmission} • {car.seats}
                      </p>
                      <p className="text-primary font-label-sm flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        {car.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label-md text-label-md">{car.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5" onClick={(e) => e.stopPropagation()}>
                    <div>
                      <span className="text-primary font-headline-md text-headline-md">{car.price} MGA</span>
                      <span className="text-on-surface-variant font-label-sm text-label-sm">/ jour</span>
                    </div>
                    {car.available ? (
                      <button
                        onClick={() => handleBook(car)}
                        className="bg-primary text-on-primary px-5 py-2 rounded-lg font-label-md text-label-md hover:bg-white transition-colors"
                      >
                        Réserver
                      </button>
                    ) : (
                      <button className="bg-outline-variant/30 text-on-surface-variant px-5 py-2 rounded-lg font-label-md text-label-md cursor-not-allowed">
                        Liste d'attente
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Exclusive Offer Banner */}
      <section className="mb-section-gap">
        <div className="relative glass-card rounded-3xl overflow-hidden p-8 md:p-12 border-primary/20">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"></div>
          <div className="relative z-10 max-w-lg">
            <span className="text-secondary font-label-md text-label-md tracking-widest uppercase mb-4 block">Exclusivité Limitée</span>
            <h2 className="font-headline-xl text-headline-xl mb-4 leading-tight">Rejoignez Apex Priority & Économisez 20%</h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg mb-8">
              Accédez à des annonces privées, évitez les files d'attente lors de la prise en charge et bénéficiez d'un nettoyage complet offert pour chaque location.
            </p>
            <button className="bg-primary-container text-white px-8 py-3 rounded-lg font-headline-md text-headline-md electric-glow transition-all active:scale-95">
              Demander Votre Adhésion
            </button>
          </div>
        </div>
      </section>

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        carTitle={carToDelete?.title || ''}
        loading={deleteLoading}
      />
    </div>
  );
}