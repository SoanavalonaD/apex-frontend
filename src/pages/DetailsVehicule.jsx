import React, { useState } from 'react';

export default function DetailsVehicule({ setCurrentPage, setSelectedVehicle }) {
  const images = [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxNXttD_KdkmUEl6aq10dqwcYGxVPM6HsdtfoMq0k3De8LgQ0j8kdR7dohTPUPE-XxceCzflao9PgERwlSFx8BipDm3h1-b7Smx1qs5IZUWv6GD_KUiqZ8NJ_ISNlWZQbJ5d0e5u82ipWAmUy3F-kxlTb69UWpK9ivZpTci5AdU2C7iFdOxTzvlv_zoENuK-sl5bATZ8zdfyhlPzBNQArVOVsOEltk0jAELhdN5UWEqgCQd8a1mI-0iE7Kyh59Bk4bSOR_qXPCSLA',
      alt: 'Intérieur d\'un véhicule électrique de luxe avec un tableau de bord minimaliste gris ardoise.'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK6wcC8LZX7rP0k5aWSBJqb5HWfEEwcOfI2jikY2mHFhr9IOSfShfoi6o9MaJWYBIO4k1acxaID6KEd9vs_-8oAQcnCUz5VZKqrDjsChiDSSRQPbeKYsDTVyDwlQOqd5RaEspiw3n9so6ZAgqXl1V9HiUIn679teOKz9NpOo68DFMaqtJk6FR_hjpIANdVHPyTGmoEFZLJaDI2RXFxXFvQd4XcT13j0JrSdPdt5426X614HJZDQYonKKSOm0MAcOBzJgdDd-2UJYc',
      alt: 'Gros plan du phare LED futuriste d\'une voiture de sport noir obsidienne.'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKQsOo0oz_Grhj4UDNtMS3DXnE2975WnhjWOik3uqso9NSXmLcAKB5G1OweKTyMMak1kjOQL3zvhaJ0-N2-rexQ7anTH1Gl2NZ1MLVeh5tscm4n6S66FGWZ4e9cyPVayag4xp1eR6vcaO0BJNnmIdb5nj-ih0bAPnfwH64P-m1umLyG9q-8-IEYUOgtA-BfV3LUIfWu1OV8L7Oj1UEt5nHuuPUeKG0gFJJqEXfETVhu99dUx-02oVV5Iqd4s7behjbw6sjuP73Q5E',
      alt: 'Vue arrière d\'une voiture de luxe moderne montrant la barre de feux arrière horizontale.'
    }
  ];

  const specs = [
    { label: 'Accélération', val: '1.99s', unit: '0-100 km/h', icon: 'speed' },
    { label: 'Autonomie', val: '637 km', unit: 'Est. EPA', icon: 'electric_car' },
    { label: 'Sièges', val: '5', unit: 'Capacité Totale', icon: 'groups' },
    { label: 'Vitesse Max', val: '322km/h', unit: 'Vitesse de Pointe', icon: 'bolt' }
  ];

  const handleBook = () => {
    setSelectedVehicle({
      id: 'tesla-s',
      title: 'Tesla Model S Plaid',
      type: 'Électrique',
      transmission: 'Automatique',
      specs: '5 places',
      rating: '4.9',
      price: '720 000',
      status: 'Disponible',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpdsJgXgHg2bq-632r_H3w60W8TMrsv-HEDE72mdBE4m7DFHJ-nWcdTqIr4E3Fk0H4ewetR4N_vfQWmtk6I_vndrf_CUatGWIHDXddQu1quy7GLezQ-ffz-mA_ru9ykPM_B8pN1OF4qorK7moWU0Q1NWh9syasqI85zXOafnbwTqjbyUNkTXe1wh0RaHQ4e2eGIyiJOGZhHD18WWtxhQlrtq7xmBPnousMkadVIRxgGuN_Y5-brn4gh7_sk6UTHd6xzOhdPfB5VW4'
    });
    setCurrentPage('reservation');
  };

  return (
    <div>
      <main className="pt-24 pb-32">
        {/* Hero Banner Section */}
        <section className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden">
          <img 
            alt="Une berline sportive électrique élégante et performante" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmeAbo05Vth2JkgAiiGxMWyDsf0_wbexeNChIw312TGRX5SVH2UIjMj2YjGOeX2qzoGS7ag7i2bDKyPIGLCEi1ofiNCgklhnqF9Tt-T2b8WImQ5wqK3HphDPqKV01NxfUaLoZ66X_e1OHyAWiAWgt0rS7CKEbB12emQKaRT6pTaFUs6bczFcfFLXnZIb3RfQWWeSgpbGnVJWcPyF5U6Yl13UZ0lKj8Lrpd390RXvasXTlBW3qMolVckcP7rSR4xs97RB7j02ujIns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </section>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-container-margin -mt-16 relative z-10">
          
          {/* Header Info */}
          <div className="flex flex-col gap-2 mb-gutter">
            <div className="flex items-center gap-2">
              <span className="bg-secondary-container/20 text-secondary-fixed-dim px-3 py-1 rounded-full text-label-sm font-label-sm border border-secondary-fixed-dim/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed-dim"></span>
                Disponible
              </span>
              <span className="text-on-surface-variant font-label-sm text-label-sm">Électrique de Luxe</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Tesla Model S Plaid</h2>
          </div>

          {/* Bento Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-section-gap">
            {specs.map((spec, i) => (
              <div 
                key={i} 
                className="glass-card rounded-xl p-4 flex flex-col gap-1 transition-transform hover:scale-[1.02] duration-300"
              >
                <span className="material-symbols-outlined text-secondary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {spec.icon}
                </span>
                <span className="text-on-surface-variant text-label-sm font-label-sm">{spec.label}</span>
                <span className="text-on-surface font-headline-md text-headline-md">{spec.val}</span>
                <span className="text-on-surface-variant text-xs">{spec.unit}</span>
              </div>
            ))}
          </div>

          {/* Gallery Section */}
          <div className="mb-section-gap">
            <h3 className="font-headline-md text-headline-md mb-4 text-primary">Galerie Média</h3>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory -mx-container-margin px-container-margin">
              {images.map((img, i) => (
                <div 
                  key={i} 
                  className="flex-none w-72 md:w-96 aspect-video rounded-xl overflow-hidden snap-start relative group"
                >
                  <img 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={img.url}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-section-gap grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="md:col-span-2">
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">Aperçu</h3>
              <p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed mb-4">
                Découvrez le summum de l\'ingénierie automobile avec l\'Apex Model S Plaid. Ce n\'est pas seulement une voiture ; c\'est une machine haute performance conçue pour le cadre moderne qui exige précision et luxe. Avec sa propulsion à trois moteurs et sa gestion logicielle sophistiquée, chaque trajet devient un voyage cinématographique.
              </p>
              <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
                L\'intérieur est un sanctuaire de technologie, doté d\'un écran cinématographique de 17 pouces, d\'un processeur de classe gaming et d\'un volant yoke qui offre une vue dégagée sur la route. Que vous naviguiez en ville ou sur l\'autoroute, la flotte Apex vous garantit d\'arriver avec une efficacité inégalée.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 flex flex-col gap-4 h-fit border-outline-variant/30">
              <h4 className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-wider">La Location Inclut</h4>
              <ul className="flex flex-col gap-3">
                {['Assurance Premium', 'Assistance Routière 24/7', 'Supercharge Incluse', 'Conciergerie Apex'].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface text-body-md">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Booking Footer */}
      <div className="fixed bottom-0 w-full z-50 rounded-t-xl backdrop-blur-xl bg-surface-container/90 dark:bg-surface-container-high/90 border-t border-outline-variant shadow-lg h-24 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-container-margin">
          <div className="flex flex-col">
            <span className="text-on-surface-variant text-label-sm font-label-sm">Total pour 3 jours</span>
            <div className="flex items-baseline gap-1">
              <span className="text-on-surface font-headline-lg text-headline-lg-mobile md:text-headline-lg">2 388 000</span>
              <span className="text-on-surface-variant text-label-sm">MGA</span>
            </div>
          </div>
          <button 
            onClick={handleBook}
            className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-label-md text-label-md glow-blue hover:opacity-90 active:scale-95 duration-200 transition-all flex items-center gap-2"
          >
            Réserver
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
