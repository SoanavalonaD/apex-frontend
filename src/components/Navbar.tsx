import { User } from "../api/auth/auth.types";
import { Page } from "../App";


interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  token: string | null;
  handleLogout: () => void;
  user: User | null;
}

export default function Navbar({ currentPage, setCurrentPage, token, handleLogout, user }: NavbarProps) {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-surface/80 dark:bg-surface-dim/80 border-b border-outline-variant shadow-sm h-16">
      <div className="flex justify-between items-center px-container-margin h-full w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {currentPage === 'details' && (
            <button
              onClick={() => setCurrentPage('search')}
              aria-label="Retour"
              className="active:scale-95 duration-200 transition-transform p-2 -ml-2 flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">arrow_back</span>
            </button>
          )}
          <div
            className="flex items-center gap-3 cursor-pointer active:scale-95 duration-200 transition-transform"
            onClick={() => setCurrentPage('home')}
          >
            {currentPage !== 'details' && (
              <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">location_on</span>
            )}
            <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Apex Car Rental</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-opacity p-2 rounded-full">
            notifications
          </button>
          <div className="hidden md:flex gap-6 items-center">
            <nav className="flex gap-4">
              <button
                onClick={() => setCurrentPage('home')}
                className={`font-label-md transition-colors ${currentPage === 'home'
                  ? 'text-primary dark:text-primary-fixed'
                  : 'text-on-surface-variant hover:text-white'
                  }`}
              >
                Accueil
              </button>
              <button
                onClick={() => setCurrentPage('search')}
                className={`font-label-md transition-colors ${currentPage === 'search'
                  ? 'text-primary dark:text-primary-fixed'
                  : 'text-on-surface-variant hover:text-white'
                  }`}
              >
                Recherche
              </button>
              {token && (
                <button
                  onClick={() => setCurrentPage('history')}
                  className={`font-label-md transition-colors ${currentPage === 'history'
                    ? 'text-primary dark:text-primary-fixed'
                    : 'text-on-surface-variant hover:text-white'
                    }`}
                >
                  Réservations
                </button>
              )}
              {user?.role === 'admin' && (
                <button
                  onClick={() => setCurrentPage('addcar')}
                  className={`font-label-md transition-colors ${currentPage === 'addcar'
                    ? 'text-primary dark:text-primary-fixed'
                    : 'text-on-surface-variant hover:text-white'
                    }`}
                >
                  Ajouter un Véhicule
                </button>
              )}
            </nav>
          </div>
          {token ? (
            <button
              onClick={handleLogout}
              className="border border-error/40 hover:border-error hover:text-error text-on-surface-variant px-5 py-1.5 rounded-full font-label-md transition-all active:scale-95"
            >
              Se déconnecter
            </button>
          ) : (
            <button
              onClick={() => setCurrentPage('login')}
              className="border border-outline-variant hover:border-primary hover:text-primary text-on-surface-variant px-5 py-1.5 rounded-full font-label-md transition-all active:scale-95"
            >
              {user ? (
                <span>Bonjour, {user.name}</span>
              ) : (
                <button>Se connecter</button>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}