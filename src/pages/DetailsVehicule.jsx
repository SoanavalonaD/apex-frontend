import React from 'react';

const VEHICLE_DETAILS = {
  'tesla-s': {
    title: 'Tesla Model S Plaid',
    type: 'Électrique de Luxe',
    status: 'Disponible',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmeAbo05Vth2JkgAiiGxMWyDsf0_wbexeNChIw312TGRX5SVH2UIjMj2YjGOeX2qzoGS7ag7i2bDKyPIGLCEi1ofiNCgklhnqF9Tt-T2b8WImQ5wqK3HphDPqKV01NxfUaLoZ66X_e1OHyAWiAWgt0rS7CKEbB12emQKaRT6pTaFUs6bczFcfFLXnZIb3RfQWWeSgpbGnVJWcPyF5U6Yl13UZ0lKj8Lrpd390RXvasXTlBW3qMolVckcP7rSR4xs97RB7j02ujIns',
    price: 720000,
    specs: [
      { label: 'Accélération', val: '1.99s', unit: '0-100 km/h', icon: 'speed' },
      { label: 'Autonomie', val: '637 km', unit: 'Est. EPA', icon: 'electric_car' },
      { label: 'Sièges', val: '5', unit: 'Capacité Totale', icon: 'groups' },
      { label: 'Vitesse Max', val: '322km/h', unit: 'Vitesse de Pointe', icon: 'bolt' }
    ],
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxNXttD_KdkmUEl6aq10dqwcYGxVPM6HsdtfoMq0k3De8LgQ0j8kdR7dohTPUPE-XxceCzflao9PgERwlSFx8BipDm3h1-b7Smx1qs5IZUWv6GD_KUiqZ8NJ_ISNlWZQbJ5d0e5u82ipWAmUy3F-kxlTb69UWpK9ivZpTci5AdU2C7iFdOxTzvlv_zoENuK-sl5bATZ8zdfyhlPzBNQArVOVsOEltk0jAELhdN5UWEqgCQd8a1mI-0iE7Kyh59Bk4bSOR_qXPCSLA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAK6wcC8LZX7rP0k5aWSBJqb5HWfEEwcOfI2jikY2mHFhr9IOSfShfoi6o9MaJWYBIO4k1acxaID6KEd9vs_-8oAQcnCUz5VZKqrDjsChiDSSRQPbeKYsDTVyDwlQOqd5RaEspiw3n9so6ZAgqXl1V9HiUIn679teOKz9NpOo68DFMaqtJk6FR_hjpIANdVHPyTGmoEFZLJaDI2RXFxXFvQd4XcT13j0JrSdPdt5426X614HJZDQYonKKSOm0MAcOBzJgdDd-2UJYc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKQsOo0oz_Grhj4UDNtMS3DXnE2975WnhjWOik3uqso9NSXmLcAKB5G1OweKTyMMak1kjOQL3zvhaJ0-N2-rexQ7anTH1Gl2NZ1MLVeh5tscm4n6S66FGWZ4e9cyPVayag4xp1eR6vcaO0BJNnmIdb5nj-ih0bAPnfwH64P-m1umLyG9q-8-IEYUOgtA-BfV3LUIfWu1OV8L7Oj1UEt5nHuuPUeKG0gFJJqEXfETVhu99dUx-02oVV5Iqd4s7behjbw6sjuP73Q5E'
    ],
    desc1: "Découvrez le summum de l'ingénierie automobile avec l'Apex Model S Plaid. Ce n'est pas seulement une voiture ; c'est une machine haute performance conçue pour le cadre moderne qui exige précision et luxe.",
    desc2: "L'intérieur est un sanctuaire de technologie, doté d'un écran cinématographique de 17 pouces, d'un volant yoke et d'une motorisation électrique tri-moteur offrant des sensations incomparables."
  },
  'bmw-m8': {
    title: 'BMW M8 Competition',
    type: 'Sportive Exécutive',
    status: 'En maintenance',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTFpOV5NVVMh9e01BBgrkjvUFrnM8amztDFy0nAQvo0w8HfTAHr-N14LBGGsZ3fFo2knheqKjK3d1rPl7joHuP3Cgoeqct9OSQ-BuOARAyXuG5xkX1Bt2Tw3WyPeaAIt3CejFx6LHc_Gs92o_xjhRmWx9tyCKIo9J40ttAAz-tGz1toyALOe5GtWN0w6m_opECa071fzT77l5lke1mUx8kZEUpXSfSEWlfd5XMObMqeXgLjKl6djENCJsDBsjUt204DWMQqBhdfz4',
    price: 840000,
    specs: [
      { label: 'Puissance', val: '625 CH', unit: 'M TwinPower V8', icon: 'speed' },
      { label: 'Accélération', val: '3.2s', unit: '0-100 km/h', icon: 'electric_car' },
      { label: 'Sièges', val: '4', unit: 'Configuration 2+2', icon: 'groups' },
      { label: 'Vitesse Max', val: '305km/h', unit: 'Avec Pack M', icon: 'bolt' }
    ],
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxNXttD_KdkmUEl6aq10dqwcYGxVPM6HsdtfoMq0k3De8LgQ0j8kdR7dohTPUPE-XxceCzflao9PgERwlSFx8BipDm3h1-b7Smx1qs5IZUWv6GD_KUiqZ8NJ_ISNlWZQbJ5d0e5u82ipWAmUy3F-kxlTb69UWpK9ivZpTci5AdU2C7iFdOxTzvlv_zoENuK-sl5bATZ8zdfyhlPzBNQArVOVsOEltk0jAELhdN5UWEqgCQd8a1mI-0iE7Kyh59Bk4bSOR_qXPCSLA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAK6wcC8LZX7rP0k5aWSBJqb5HWfEEwcOfI2jikY2mHFhr9IOSfShfoi6o9MaJWYBIO4k1acxaID6KEd9vs_-8oAQcnCUz5VZKqrDjsChiDSSRQPbeKYsDTVyDwlQOqd5RaEspiw3n9so6ZAgqXl1V9HiUIn679teOKz9NpOo68DFMaqtJk6FR_hjpIANdVHPyTGmoEFZLJaDI2RXFxXFvQd4XcT13j0JrSdPdt5426X614HJZDQYonKKSOm0MAcOBzJgdDd-2UJYc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKQsOo0oz_Grhj4UDNtMS3DXnE2975WnhjWOik3uqso9NSXmLcAKB5G1OweKTyMMak1kjOQL3zvhaJ0-N2-rexQ7anTH1Gl2NZ1MLVeh5tscm4n6S66FGWZ4e9cyPVayag4xp1eR6vcaO0BJNnmIdb5nj-ih0bAPnfwH64P-m1umLyG9q-8-IEYUOgtA-BfV3LUIfWu1OV8L7Oj1UEt5nHuuPUeKG0gFJJqEXfETVhu99dUx-02oVV5Iqd4s7behjbw6sjuP73Q5E'
    ],
    desc1: "La BMW M8 Competition représente la quintessence de la division BMW M, combinant des performances de supercar absolues à un confort suprême.",
    desc2: "Son moteur V8 bi-turbo de 625 ch et sa transmission intégrale xDrive adaptative procurent une dynamique de conduite inoubliable."
  },
  'audi-etron': {
    title: 'Audi RS e-tron GT',
    type: 'Grand Tourisme Électrique',
    status: 'Disponible',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANOhbj9ZyBPkFkbLtQiD7vIf_rZ7uiQQrMyr1po0Irmi5j10gvn6xHUVZsIVQh6aLAatcWywq1wmn8c9bPcabla-FIoZPyisc76yN8cCD7qDnMsKa6jfWkARm_aMC2ojg2svMfRZtGRoaoyHM_vLzzm24shtcX8WU6xpbyPwyhuZMlkViVW6Hhf1tp5K5Q42fGjeIgpJu4R2xYW9MssfVqm1h6gV9vmEDWb-XZ1NEfRsUEppMK8zz8Yojk0jLRLMoakSkZmWUA3hA',
    price: 780000,
    specs: [
      { label: 'Puissance', val: '646 CH', unit: 'Mode Overboost', icon: 'speed' },
      { label: 'Accélération', val: '3.3s', unit: '0-100 km/h', icon: 'electric_car' },
      { label: 'Sièges', val: '5', unit: 'Espace Confort', icon: 'groups' },
      { label: 'Autonomie', val: '472 km', unit: 'Cycle WLTP', icon: 'bolt' }
    ],
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxNXttD_KdkmUEl6aq10dqwcYGxVPM6HsdtfoMq0k3De8LgQ0j8kdR7dohTPUPE-XxceCzflao9PgERwlSFx8BipDm3h1-b7Smx1qs5IZUWv6GD_KUiqZ8NJ_ISNlWZQbJ5d0e5u82ipWAmUy3F-kxlTb69UWpK9ivZpTci5AdU2C7iFdOxTzvlv_zoENuK-sl5bATZ8zdfyhlPzBNQArVOVsOEltk0jAELhdN5UWEqgCQd8a1mI-0iE7Kyh59Bk4bSOR_qXPCSLA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAK6wcC8LZX7rP0k5aWSBJqb5HWfEEwcOfI2jikY2mHFhr9IOSfShfoi6o9MaJWYBIO4k1acxaID6KEd9vs_-8oAQcnCUz5VZKqrDjsChiDSSRQPbeKYsDTVyDwlQOqd5RaEspiw3n9so6ZAgqXl1V9HiUIn679teOKz9NpOo68DFMaqtJk6FR_hjpIANdVHPyTGmoEFZLJaDI2RXFxXFvQd4XcT13j0JrSdPdt5426X614HJZDQYonKKSOm0MAcOBzJgdDd-2UJYc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKQsOo0oz_Grhj4UDNtMS3DXnE2975WnhjWOik3uqso9NSXmLcAKB5G1OweKTyMMak1kjOQL3zvhaJ0-N2-rexQ7anTH1Gl2NZ1MLVeh5tscm4n6S66FGWZ4e9cyPVayag4xp1eR6vcaO0BJNnmIdb5nj-ih0bAPnfwH64P-m1umLyG9q-8-IEYUOgtA-BfV3LUIfWu1OV8L7Oj1UEt5nHuuPUeKG0gFJJqEXfETVhu99dUx-02oVV5Iqd4s7behjbw6sjuP73Q5E'
    ],
    desc1: "L'Audi RS e-tron GT est une berline de sport électrique sculpturale offrant une dynamique de conduite remarquable et une recharge ultra-rapide.",
    desc2: "Le design progressiste allie proportions de Gran Turismo et technologies d'avant-garde pour un voyage d'exception."
  },
  'porsche-911': {
    title: 'Porsche 911 Carrera',
    type: 'Sportive Légendaire',
    status: 'Disponible',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeESKpuVFi_GNUGvMEc3PN7-0JMJ-RJLa_3umQ8IJ4bksCnDNKMGVHztT-p8VwNU5i_GLbVRFTuTPgmCz6vAO4dptYEBIUnoyFimsWIrdNHFZSchScY2OwF8TS4oUnU-8Lrs6HLzPy8VoOaFWBalZIMAETz8eixdqmju6gXbdPO8uR21qpGcZ55WLsF7CXVVsS2KFRhnw8w1tc8AMi2U-Ra-Chiuqndku1oyZ5n9WDoNbWESdt2AYV8X6tAKKhYYUapwonAimBWSs',
    price: 1200000,
    specs: [
      { label: 'Moteur', val: 'Flat-6', unit: 'Bi-turbo', icon: 'speed' },
      { label: 'Accélération', val: '4.2s', unit: '0-100 km/h', icon: 'electric_car' },
      { label: 'Sièges', val: '4', unit: 'Configuration 2+2', icon: 'groups' },
      { label: 'Vitesse Max', val: '293 km/h', unit: 'Sur Piste', icon: 'bolt' }
    ],
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxNXttD_KdkmUEl6aq10dqwcYGxVPM6HsdtfoMq0k3De8LgQ0j8kdR7dohTPUPE-XxceCzflao9PgERwlSFx8BipDm3h1-b7Smx1qs5IZUWv6GD_KUiqZ8NJ_ISNlWZQbJ5d0e5u82ipWAmUy3F-kxlTb69UWpK9ivZpTci5AdU2C7iFdOxTzvlv_zoENuK-sl5bATZ8zdfyhlPzBNQArVOVsOEltk0jAELhdN5UWEqgCQd8a1mI-0iE7Kyh59Bk4bSOR_qXPCSLA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAK6wcC8LZX7rP0k5aWSBJqb5HWfEEwcOfI2jikY2mHFhr9IOSfShfoi6o9MaJWYBIO4k1acxaID6KEd9vs_-8oAQcnCUz5VZKqrDjsChiDSSRQPbeKYsDTVyDwlQOqd5RaEspiw3n9so6ZAgqXl1V9HiUIn679teOKz9NpOo68DFMaqtJk6FR_hjpIANdVHPyTGmoEFZLJaDI2RXFxXFvQd4XcT13j0JrSdPdt5426X614HJZDQYonKKSOm0MAcOBzJgdDd-2UJYc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKQsOo0oz_Grhj4UDNtMS3DXnE2975WnhjWOik3uqso9NSXmLcAKB5G1OweKTyMMak1kjOQL3zvhaJ0-N2-rexQ7anTH1Gl2NZ1MLVeh5tscm4n6S66FGWZ4e9cyPVayag4xp1eR6vcaO0BJNnmIdb5nj-ih0bAPnfwH64P-m1umLyG9q-8-IEYUOgtA-BfV3LUIfWu1OV8L7Oj1UEt5nHuuPUeKG0gFJJqEXfETVhu99dUx-02oVV5Iqd4s7behjbw6sjuP73Q5E'
    ],
    desc1: "La Porsche 911 Carrera incarne la voiture de sport par excellence, combinant une silhouette intemporelle à une agilité hors du commun.",
    desc2: "Le moteur flat-6 suralimenté à l'arrière délivre une poussée continue et une précision de guidage légendaire."
  },
  'bmw-i8': {
    title: 'BMW i8 Roadster',
    type: 'Cabriolet Hybride',
    status: 'Disponible',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRdmArJ48fmu6prwKzvQWkyDlujVb04dQK3H6qyNAJYriyGWShSRJK9N7e4zFQaFshH_wcAtzHguIFOBvdux82BimfwuvoUdSqE0jBUWGokd7_GsFPCt3UT7e_XCYKA-qSqiYfa9cVk8hzgNFn20gDV-kyv6Zah7V1j24eLpauYzJ5oWSslLtiZ04xY-CBmLudj23Qrk0zR8p-7T8wWtvPrYXNC9LmHbou3BdW5v6WWJG8ZC2tgRQOzJ1plZjr-t0hpUTRJUqyttM',
    price: 980000,
    specs: [
      { label: 'Portes', val: 'Papillon', unit: 'Dièdre', icon: 'speed' },
      { label: 'Accélération', val: '4.6s', unit: '0-100 km/h', icon: 'electric_car' },
      { label: 'Sièges', val: '2', unit: 'Cockpit Roadster', icon: 'groups' },
      { label: 'Autonomie', val: '53 km', unit: 'Électrique pur', icon: 'bolt' }
    ],
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxNXttD_KdkmUEl6aq10dqwcYGxVPM6HsdtfoMq0k3De8LgQ0j8kdR7dohTPUPE-XxceCzflao9PgERwlSFx8BipDm3h1-b7Smx1qs5IZUWv6GD_KUiqZ8NJ_ISNlWZQbJ5d0e5u82ipWAmUy3F-kxlTb69UWpK9ivZpTci5AdU2C7iFdOxTzvlv_zoENuK-sl5bATZ8zdfyhlPzBNQArVOVsOEltk0jAELhdN5UWEqgCQd8a1mI-0iE7Kyh59Bk4bSOR_qXPCSLA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAK6wcC8LZX7rP0k5aWSBJqb5HWfEEwcOfI2jikY2mHFhr9IOSfShfoi6o9MaJWYBIO4k1acxaID6KEd9vs_-8oAQcnCUz5VZKqrDjsChiDSSRQPbeKYsDTVyDwlQOqd5RaEspiw3n9so6ZAgqXl1V9HiUIn679teOKz9NpOo68DFMaqtJk6FR_hjpIANdVHPyTGmoEFZLJaDI2RXFxXFvQd4XcT13j0JrSdPdt5426X614HJZDQYonKKSOm0MAcOBzJgdDd-2UJYc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKQsOo0oz_Grhj4UDNtMS3DXnE2975WnhjWOik3uqso9NSXmLcAKB5G1OweKTyMMak1kjOQL3zvhaJ0-N2-rexQ7anTH1Gl2NZ1MLVeh5tscm4n6S66FGWZ4e9cyPVayag4xp1eR6vcaO0BJNnmIdb5nj-ih0bAPnfwH64P-m1umLyG9q-8-IEYUOgtA-BfV3LUIfWu1OV8L7Oj1UEt5nHuuPUeKG0gFJJqEXfETVhu99dUx-02oVV5Iqd4s7behjbw6sjuP73Q5E'
    ],
    desc1: "La BMW i8 Roadster redéfinit le plaisir de conduire avec son architecture hybride rechargeable innovante et sa structure légère en carbone.",
    desc2: "Ses portes papillon spectaculaires et son aérodynamique soignée garantissent un impact visuel sans précédent."
  },
  'range-rover': {
    title: 'Range Rover Sport',
    type: 'SUV de Luxe',
    status: 'Disponible',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8QjWbWdv4K2CEE_KuRUUn0oxLhKrAjRzzO9xH0uS5byIZIUC-mcc87EjH4YvbJG-IKTFlbKMDyTLfKxDD2M6wxWOx0eBzA7mTg_9oIo0lAKXkiv_KOZSgmCzl7wpxuFZ6qXFReo8QlMHOihsO_C6KDgxuH5A1PcTmL8N_P_YKUmIbSxlP27fvmzEvW7nsDcjZXza0GpR0yihRoSm-4qIrOD_G6De8U8IE9pVWFRrStV6I76PodUNDf9CdljfNrCkIFGM3BYhZULE',
    price: 720000,
    specs: [
      { label: 'Moteur', val: '6 Cyl.', unit: 'MHEV Mild Hybrid', icon: 'speed' },
      { label: 'Accélération', val: '5.9s', unit: '0-100 km/h', icon: 'electric_car' },
      { label: 'Sièges', val: '5', unit: 'Position Haute', icon: 'groups' },
      { label: 'Vitesse Max', val: '225 km/h', unit: 'Limitation Élec', icon: 'bolt' }
    ],
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxNXttD_KdkmUEl6aq10dqwcYGxVPM6HsdtfoMq0k3De8LgQ0j8kdR7dohTPUPE-XxceCzflao9PgERwlSFx8BipDm3h1-b7Smx1qs5IZUWv6GD_KUiqZ8NJ_ISNlWZQbJ5d0e5u82ipWAmUy3F-kxlTb69UWpK9ivZpTci5AdU2C7iFdOxTzvlv_zoENuK-sl5bATZ8zdfyhlPzBNQArVOVsOEltk0jAELhdN5UWEqgCQd8a1mI-0iE7Kyh59Bk4bSOR_qXPCSLA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAK6wcC8LZX7rP0k5aWSBJqb5HWfEEwcOfI2jikY2mHFhr9IOSfShfoi6o9MaJWYBIO4k1acxaID6KEd9vs_-8oAQcnCUz5VZKqrDjsChiDSSRQPbeKYsDTVyDwlQOqd5RaEspiw3n9so6ZAgqXl1V9HiUIn679teOKz9NpOo68DFMaqtJk6FR_hjpIANdVHPyTGmoEFZLJaDI2RXFxXFvQd4XcT13j0JrSdPdt5426X614HJZDQYonKKSOm0MAcOBzJgdDd-2UJYc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKQsOo0oz_Grhj4UDNtMS3DXnE2975WnhjWOik3uqso9NSXmLcAKB5G1OweKTyMMak1kjOQL3zvhaJ0-N2-rexQ7anTH1Gl2NZ1MLVeh5tscm4n6S66FGWZ4e9cyPVayag4xp1eR6vcaO0BJNnmIdb5nj-ih0bAPnfwH64P-m1umLyG9q-8-IEYUOgtA-BfV3LUIfWu1OV8L7Oj1UEt5nHuuPUeKG0gFJJqEXfETVhu99dUx-02oVV5Iqd4s7behjbw6sjuP73Q5E'
    ],
    desc1: "Le Range Rover Sport allie un design épuré, des capacités tout-terrain exceptionnelles et un confort acoustique parfait.",
    desc2: "Profitez d'un intérieur somptueux doté d'une finition haut de gamme et d'une technologie d'infodivertissement de pointe."
  }
};

export default function DetailsVehicule({ selectedVehicle, setCurrentPage, setSelectedVehicle }) {
  const carId = selectedVehicle?.id || 'tesla-s';
  const detail = VEHICLE_DETAILS[carId] || VEHICLE_DETAILS['tesla-s'];

  const formatPrice = (val) => String(val).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const handleBook = () => {
    setSelectedVehicle({
      id: carId,
      title: detail.title,
      price: formatPrice(detail.price),
      image: detail.image,
      type: detail.type,
      transmission: selectedVehicle?.transmission || 'Automatique',
      specs: selectedVehicle?.specs || (detail.specs.find(s => s.label === 'Sièges')?.val + ' places') || '5 places',
      rating: selectedVehicle?.rating || '4.9'
    });
    setCurrentPage('reservation');
  };

  return (
    <div>
      <main className="pt-24 pb-32">
        {/* Hero Banner Section */}
        <section className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden">
          <img 
            alt={detail.title} 
            className="w-full h-full object-cover" 
            src={detail.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent"></div>
        </section>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-container-margin -mt-16 relative z-10">
          
          {/* Header Info */}
          <div className="flex flex-col gap-2 mb-gutter">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-secondary-container/20 text-[#secondary-fixed-dim] text-secondary px-3 py-1 rounded-full text-label-sm font-label-sm border border-secondary/20 flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${detail.status === 'Disponible' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                {detail.status}
              </span>
              <span className="text-on-surface-variant font-label-sm text-label-sm">{detail.type}</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">{detail.title}</h2>
          </div>

          {/* Bento Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-section-gap">
            {detail.specs.map((spec, i) => (
              <div 
                key={i} 
                className="glass-card rounded-xl p-4 flex flex-col gap-1 transition-transform hover:scale-[1.02] duration-300"
              >
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
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
            <h3 className="font-headline-md text-headline-md mb-4 text-primary animate-fade-in">Galerie Média</h3>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory -mx-container-margin px-container-margin">
              {detail.gallery.map((url, i) => (
                <div 
                  key={i} 
                  className="flex-none w-72 md:w-96 aspect-video rounded-xl overflow-hidden snap-start relative group"
                >
                  <img 
                    alt={`Vue ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={url}
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
                {detail.desc1}
              </p>
              <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
                {detail.desc2}
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 flex flex-col gap-4 h-fit border-outline-variant/30">
              <h4 className="font-label-md text-label-md text-secondary uppercase tracking-wider">La Location Inclut</h4>
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
              <span className="text-on-surface font-headline-lg text-headline-lg-mobile md:text-headline-lg">{formatPrice(detail.price * 3)}</span>
              <span className="text-on-surface-variant text-label-sm">MGA</span>
            </div>
          </div>
          {detail.status === 'Disponible' ? (
            <button 
              onClick={handleBook}
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-label-md text-label-md glow-blue hover:opacity-90 active:scale-95 duration-200 transition-all flex items-center gap-2"
            >
              Réserver
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          ) : (
            <button 
              disabled
              className="bg-surface-variant text-on-surface-variant px-8 py-4 rounded-full font-label-md text-label-md cursor-not-allowed flex items-center gap-2"
            >
              Indisponible
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
