import React, { useState } from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('apex_token'));
  const [reservations, setReservations] = useState(
    JSON.parse(localStorage.getItem('apex_reservations')) || []
  );

  const handleLogin = (newToken) => {
    localStorage.setItem('apex_token', newToken);
    setToken(newToken);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    localStorage.removeItem('apex_token');
    setToken(null);
    setCurrentPage('home');
  };

  const handleConfirmBooking = (newBooking) => {
    const updated = [newBooking, ...reservations];
    setReservations(updated);
    localStorage.setItem('apex_reservations', JSON.stringify(updated));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Accueil 
            setCurrentPage={setCurrentPage} 
            setSelectedVehicle={setSelectedVehicle} 
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
          />
        );
      case 'design':
        return <DesignSystemPlayground />;
      case 'login':
        return <Connexion setCurrentPage={setCurrentPage} onLogin={handleLogin} />;
      case 'signup':
        return <CreationCompte setCurrentPage={setCurrentPage} />;
      case 'history':
        return (
          <HistoriqueReservations 
            reservations={reservations} 
            setCurrentPage={setCurrentPage} 
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
        />
      )}
      
      {/* Main Pages Content */}
      <div className="transition-all duration-300">
        {renderPage()}
      </div>

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
