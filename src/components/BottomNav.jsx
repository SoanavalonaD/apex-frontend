import React from 'react';

export default function BottomNav({ currentPage, setCurrentPage, token }) {
  const navItems = [
    { id: 'home', label: 'Accueil', icon: 'home' },
    { id: 'search', label: 'Recherche', icon: 'search' },
    ...(token ? [{ id: 'history', label: 'Réservations', icon: 'history' }] : []),
    { id: 'details', label: 'Détails', icon: 'directions_car' },
    { id: 'reservation', label: 'Réservation', icon: 'calendar_month' },
    { id: 'design', label: 'Design', icon: 'palette' }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl backdrop-blur-xl bg-surface-container/90 dark:bg-surface-container-high/90 border-t border-outline-variant shadow-lg h-20">
      <div className="flex justify-around items-center h-full px-4 pb-safe w-full">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center justify-center rounded-full px-4 py-1.5 active:scale-90 duration-150 transition-transform ${
                isActive
                  ? 'bg-primary-container dark:bg-primary text-white'
                  : 'text-on-surface-variant dark:text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label-sm text-label-sm">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
