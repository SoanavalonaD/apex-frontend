import React, { useState } from 'react';

export default function Accueil({ setCurrentPage, setSelectedVehicle }) {
  const [pickup, setPickup] = useState('');
  const [dates, setDates] = useState('');

  const categories = [
    { id: 'suv', label: 'SUV', icon: 'airport_shuttle' },
    { id: 'sport', label: 'Sport', icon: 'speed', active: true },
    { id: 'electric', label: 'Électrique', icon: 'bolt' },
    { id: 'luxe', label: 'Luxe', icon: 'diamond' },
    { id: 'convertible', label: 'Cabriolet', icon: 'sunny' }
  ];

  const featuredVehicles = [
    {
      id: 'porsche-911',
      title: 'Porsche 911 Carrera',
      type: 'Sport',
      transmission: 'Automatique',
      seats: '2 Places',
      rating: '4.9',
      price: '1 200 000',
      available: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeESKpuVFi_GNUGvMEc3PN7-0JMJ-RJLa_3umQ8IJ4bksCnDNKMGVHztT-p8VwNU5i_GLbVRFTuTPgmCz6vAO4dptYEBIUnoyFimsWIrdNHFZSchScY2OwF8TS4oUnU-8Lrs6HLzPy8VoOaFWBalZIMAETz8eixdqmju6gXbdPO8uR21qpGcZ55WLsF7CXVVsS2KFRhnw8w1tc8AMi2U-Ra-Chiuqndku1oyZ5n9WDoNbWESdt2AYV8X6tAKKhYYUapwonAimBWSs',
      description: 'Sportive emblématique offrant une puissance pure et une maniabilité de précision.'
    },
    {
      id: 'bmw-i8',
      title: 'BMW i8 Roadster',
      type: 'Électrique',
      transmission: 'Automatique',
      seats: '2 Places',
      rating: '4.8',
      price: '980 000',
      available: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRdmArJ48fmu6prwKzvQWkyDlujVb04dQK3H6qyNAJYriyGWShSRJK9N7e4zFQaFshH_wcAtzHguIFOBvdux82BimfwuvoUdSqE0jBUWGokd7_GsFPCt3UT7e_XCYKA-qSqiYfa9cVk8hzgNFn20gDV-kyv6Zah7V1j24eLpauYzJ5oWSslLtiZ04xY-CBmLudj23Qrk0zR8p-7T8wWtvPrYXNC9LmHbou3BdW5v6WWJG8ZC2tgRQOzJ1plZjr-t0hpUTRJUqyttM',
      description: 'Luxe hybride rechargeable futuriste avec des portes papillon emblématiques.'
    },
    {
      id: 'range-rover',
      title: 'Range Rover Sport',
      type: 'SUV',
      transmission: 'Automatique',
      seats: '5 Places',
      rating: '5.0',
      price: '720 000',
      available: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8QjWbWdv4K2CEE_KuRUUn0oxLhKrAjRzzO9xH0uS5byIZIUC-mcc87EjH4YvbJG-IKTFlbKMDyTLfKxDD2M6wxWOx0eBzA7mTg_9oIo0lAKXkiv_KOZSgmCzl7wpxuFZ6qXFReo8QlMHOihsO_C6KDgxuH5A1PcTmL8N_P_YKUmIbSxlP27fvmzEvW7nsDcjZXza0GpR0yihRoSm-4qIrOD_G6De8U8IE9pVWFRrStV6I76PodUNDf9CdljfNrCkIFGM3BYhZULE',
      description: 'Le summum du luxe tout-terrain alliant puissance et raffinement de cabine.'
    }
  ];

  const handleBook = (car) => {
    setSelectedVehicle(car);
    setCurrentPage('reservation');
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
                  placeholder="Dubai Marina, Émirats Arabes Unis" 
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
                  type="text" 
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary-container outline-none py-3 pl-12 pr-4 transition-all text-on-surface" 
                  placeholder="24 oct. - 28 oct." 
                />
              </div>
            </div>
            <button 
              onClick={() => setCurrentPage('search')}
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
              onClick={() => setCurrentPage('search')}
              className={`flex-shrink-0 w-32 h-32 glass-card rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all hover:border-primary ${
                cat.active ? 'border-primary bg-primary-container/10' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                cat.active ? 'bg-primary-container' : 'bg-surface-container group-hover:bg-primary-container/20'
              }`}>
                <span className={`material-symbols-outlined scale-125 ${cat.active ? 'text-white' : 'text-secondary'}`}>{cat.icon}</span>
              </div>
              <span className={`font-label-md text-label-md ${cat.active ? 'text-primary' : ''}`}>{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Rentals Grid */}
      <section className="mb-section-gap">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="font-headline-lg text-headline-lg">Locations Vedettes</h3>
            <p className="text-on-surface-variant font-body-md text-body-md">Des machines haute performance méticuleusement entretenues.</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
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
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer transition-all hover:-translate-y-2"
            >
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
      </section>

      {/* Exclusive Offer Banner */}
      <section className="mb-section-gap">
        <div className="relative glass-card rounded-3xl overflow-hidden p-8 md:p-12 border-primary/20">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"></div>
          <div className="relative z-10 max-w-lg">
            <span className="text-secondary font-label-md text-label-md tracking-widest uppercase mb-4 block">Exclusivité Limitée</span>
            <h2 className="font-headline-xl text-headline-xl mb-4 leading-tight">Rejoignez Apex Priority &amp; Économisez 20%</h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg mb-8">
              Accédez à des annonces privées, évitez les files d'attente lors de la prise en charge et bénéficiez d'un nettoyage complet offert pour chaque location.
            </p>
            <button className="bg-primary-container text-white px-8 py-3 rounded-lg font-headline-md text-headline-md electric-glow transition-all active:scale-95">
              Demander Votre Adhésion
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
