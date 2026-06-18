import { useState } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Accueil from './pages/Accueil';
import Recherche from './pages/Recherche';
import DetailsVehicule from './pages/DetailsVehicule';
import Reservation from './pages/Reservation';
import DesignSystemPlayground from './pages/DesignSystemPlayground';
import Connexion from './pages/Connexion';
import CreationCompte from './pages/CreationCompte';
import HistoriqueReservations from './pages/HistoriqueReservations';
import { authService } from './api/auth/auth.service';
import type { User } from './api/auth/auth.types';
import type { Car } from './features/cars.types';
import type { Booking } from './pages/Reservation';
import { AddCarForm } from './pages/admin/components/AddCarForm';
import { EditCarForm } from './pages/admin/components/EditCarForm';

export type Page =
  | 'home'
  | 'search'
  | 'details'
  | 'reservation'
  | 'design'
  | 'addcar'
  | 'login'
  | 'edit-car'
  | 'signup'
  | 'history';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedVehicle, setSelectedVehicle] = useState<Car | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('apex_token')
  );

  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem('apex_user') ?? 'null')
  );

  // Reservations are now fetched directly from the backend

  const handleLogin = (newToken: string, newUser: User) => {
    localStorage.setItem('apex_token', newToken);
    localStorage.setItem('apex_user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);

    if (newUser.role === 'admin') {
      setCurrentPage('addcar');
    } else {
      setCurrentPage('home');
    }
  };

  const handleLogout = async () => {
    const activeToken = token ?? localStorage.getItem('apex_token');
    if (activeToken) {
      try {
        await authService.logout(activeToken);
      } catch {
        // Even if the server call fails, we still clear local state
      }
    }
    localStorage.removeItem('apex_token');
    localStorage.removeItem('apex_user');
    setToken(null);
    setUser(null);
    setCurrentPage('home');
  };

  const handleConfirmBooking = () => {
    // No-op, reservations are refetched on the history page
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Accueil
            setCurrentPage={setCurrentPage}
            setSelectedVehicle={setSelectedVehicle}
            isAdmin={user?.role === 'admin'}
          />
        );
      case 'search':
        return (
          <Recherche
            setCurrentPage={setCurrentPage}
            setSelectedVehicle={setSelectedVehicle}
          />
        );
      case 'details':
        return (
          <DetailsVehicule
            selectedVehicle={selectedVehicle}
            setCurrentPage={setCurrentPage}
            setSelectedVehicle={setSelectedVehicle}
          />
        );
      case 'reservation':
        return (
          <Reservation
            selectedVehicle={selectedVehicle}
            setCurrentPage={setCurrentPage}
            onConfirmBooking={handleConfirmBooking}
            token={token}
          />
        );
      case 'design':
        return <DesignSystemPlayground />;
      case 'addcar':
        return user?.role === 'admin' ? (
          <AddCarForm setCurrentPage={setCurrentPage} />
        ) : (
          <Accueil setCurrentPage={setCurrentPage} setSelectedVehicle={setSelectedVehicle} />
        );
      case 'edit-car':
        return (
          <EditCarForm setCurrentPage={setCurrentPage} car={selectedVehicle} />
        )
      case 'login':
        return <Connexion setCurrentPage={setCurrentPage} onLogin={handleLogin} />;
      case 'signup':
        return <CreationCompte setCurrentPage={setCurrentPage} onRegister={handleLogin} />;
      case 'history':
        return (
          <HistoriqueReservations
            setCurrentPage={setCurrentPage}
            token={token}
          />
        );
      default:
        return (
          <Accueil
            setCurrentPage={setCurrentPage}
            setSelectedVehicle={setSelectedVehicle}
          />
        );
    }
  };

  const showNav = currentPage !== 'login' && currentPage !== 'signup';

  return (
    <div className="min-h-screen bg-obsidian-dark text-on-surface">
      {/* Navigation Headers */}
      {showNav && (
        <Navbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          token={token}
          handleLogout={handleLogout}
          user={user}
        />
      )}

      {/* Main Pages Content */}
      <div className="transition-all duration-300">{renderPage()}</div>

      {/* Mobile-only Bottom Navigation */}
      {showNav && (
        <BottomNav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          token={token}
        />
      )}
    </div>
  );
}

export default App;