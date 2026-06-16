import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Accueil from './pages/Accueil';
import Recherche from './pages/Recherche';
import DetailsVehicule from './pages/DetailsVehicule';
import Reservation from './pages/Reservation';
import DesignSystemPlayground from './pages/DesignSystemPlayground';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

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
            setCurrentPage={setCurrentPage} 
            setSelectedVehicle={setSelectedVehicle} 
          />
        );
      case 'reservation':
        return (
          <Reservation 
            selectedVehicle={selectedVehicle} 
            setCurrentPage={setCurrentPage} 
          />
        );
      case 'design':
        return <DesignSystemPlayground />;
      default:
        return (
          <Accueil 
            setCurrentPage={setCurrentPage} 
            setSelectedVehicle={setSelectedVehicle} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-obsidian-dark text-on-surface">
      {/* Navigation Headers */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Main Pages Content */}
      <div className="transition-all duration-300">
        {renderPage()}
      </div>

      {/* Mobile-only Bottom Navigation */}
      <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
