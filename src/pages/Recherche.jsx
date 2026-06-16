import React, { useState } from 'react';

export default function Recherche({ setCurrentPage, setSelectedVehicle }) {
  const [filters, setFilters] = useState({
    price: false,
    type: false,
    rating: false,
    electric: false,
    luxe: false
  });

  const fleet = [
    {
      id: 'tesla-s',
      title: 'Tesla Model S Plaid',
      type: 'Électrique',
      transmission: 'Automatique',
      specs: '5 places',
      rating: '4.9',
      price: '720 000',
      status: 'Disponible',
      statusColor: 'bg-on-primary-container',
      statusBg: 'bg-primary-container text-on-primary-container',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpdsJgXgHg2bq-632r_H3w60W8TMrsv-HEDE72mdBE4m7DFHJ-nWcdTqIr4E3Fk0H4ewetR4N_vfQWmtk6I_vndrf_CUatGWIHDXddQu1quy7GLezQ-ffz-mA_ru9ykPM_B8pN1OF4qorK7moWU0Q1NWh9syasqI85zXOafnbwTqjbyUNkTXe1wh0RaHQ4e2eGIyiJOGZhHD18WWtxhQlrtq7xmBPnousMkadVIRxgGuN_Y5-brn4gh7_sk6UTHd6xzOhdPfB5VW4',
      description: 'Découvrez le summum de l\'ingénierie automobile avec la Tesla Model S Plaid.',
      linkTo: 'details' // Tesla has a full details screen
    },
    {
      id: 'bmw-m8',
      title: 'BMW M8 Competition',
      type: 'Essence',
      transmission: 'Automatique',
      specs: '625 CH',
      rating: '4.8',
      price: '840 000',
      status: 'En maintenance',
      statusColor: 'bg-orange-500',
      statusBg: 'bg-surface-container-highest text-on-surface-variant',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTFpOV5NVVMh9e01BBgrkjvUFrnM8amztDFy0nAQvo0w8HfTAHr-N14LBGGsZ3fFo2knheqKjK3d1rPl7joHuP3Cgoeqct9OSQ-BuOARAyXuG5xkX1Bt2Tw3WyPeaAIt3CejFx6LHc_Gs92o_xjhRmWx9tyCKIo9J40ttAAz-tGz1toyALOe5GtWN0w6m_opECa071fzT77l5lke1mUx8kZEUpXSfSEWlfd5XMObMqeXgLjKl6djENCJsDBsjUt204DWMQqBhdfz4',
      description: 'Luxe de niveau exécutif allié à la performance brute d\'un moteur M TwinPower Turbo.',
      disabled: true
    },
    {
      id: 'audi-etron',
      title: 'Audi RS e-tron GT',
      type: 'Électrique',
      transmission: 'Automatique',
      specs: 'Quattro',
      rating: '4.9',
      price: '780 000',
      status: 'Disponible',
      statusColor: 'bg-on-primary-container',
      statusBg: 'bg-primary-container text-on-primary-container',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANOhbj9ZyBPkFkbLtQiD7vIf_rZ7uiQQrMyr1po0Irmi5j10gvn6xHUVZsIVQh6aLAatcWywq1wmn8c9bPcabla-FIoZPyisc76yN8cCD7qDnMsKa6jfWkARm_aMC2ojg2svMfRZtGRoaoyHM_vLzzm24shtcX8WU6xpbyPwyhuZMlkViVW6Hhf1tp5K5Q42fGjeIgpJu4R2xYW9MssfVqm1h6gV9vmEDWb-XZ1NEfRsUEppMK8zz8Yojk0jLRLMoakSkZmWUA3hA',
      description: 'Une berline sportive électrique hautes performances sculptée par le vent.',
      linkTo: 'reservation'
    }
  ];

  const toggleFilter = (key) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAction = (car) => {
    if (car.disabled) return;
    setSelectedVehicle(car);
    if (car.linkTo === 'details') {
      setCurrentPage('details');
    } else {
      setCurrentPage('reservation');
    }
  };

  return (
    <div className="pt-24 pb-32 px-container-margin max-w-7xl mx-auto">
      {/* Filter Section */}
      <section className="mb-gutter">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight">Flotte disponible</h2>
          <span className="text-on-surface-variant font-body-md">24 résultats trouvés</span>
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
      <div className="space-y-gutter">
        {fleet.map((car) => (
          <div 
            key={car.id} 
            className="zebra-stripe rounded-xl overflow-hidden glass-card group transition-all duration-300 hover:border-primary/40"
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
                    <span className={`w-1.5 h-1.5 ${car.statusColor} rounded-full ${car.status === 'Disponible' ? 'animate-pulse' : ''}`}></span>
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
                        <span className="text-label-md font-label-md">{car.specs}</span>
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
                <div className="mt-6 flex gap-4">
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
                      Réserver
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
