import React from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-surface/80 dark:bg-surface-dim/80 border-b border-outline-variant shadow-sm h-16">
      <div className="flex justify-between items-center px-container-margin h-full w-full max-w-7xl mx-auto">
        <div 
          className="flex items-center gap-3 cursor-pointer active:scale-95 duration-200 transition-transform"
          onClick={() => setCurrentPage('home')}
        >
          <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">location_on</span>
          <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Apex Car Rental</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-opacity p-2 rounded-full">
            notifications
          </button>
          <div className="hidden md:flex gap-6 items-center">
            <nav className="flex gap-4">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`font-label-md transition-colors ${
                  currentPage === 'home' 
                    ? 'text-primary dark:text-primary-fixed' 
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                Accueil
              </button>
              <button 
                onClick={() => setCurrentPage('search')}
                className={`font-label-md transition-colors ${
                  currentPage === 'search' 
                    ? 'text-primary dark:text-primary-fixed' 
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                Recherche
              </button>
              <button 
                onClick={() => setCurrentPage('details')}
                className={`font-label-md transition-colors ${
                  currentPage === 'details' 
                    ? 'text-primary dark:text-primary-fixed' 
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                Détails
              </button>
              <button 
                onClick={() => setCurrentPage('reservation')}
                className={`font-label-md transition-colors ${
                  currentPage === 'reservation' 
                    ? 'text-primary dark:text-primary-fixed' 
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                Réservation
              </button>
              <button 
                onClick={() => setCurrentPage('design')}
                className={`font-label-md transition-colors ${
                  currentPage === 'design' 
                    ? 'text-primary dark:text-primary-fixed' 
                    : 'text-on-surface-variant hover:text-white'
                }`}
              >
                Design System
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
