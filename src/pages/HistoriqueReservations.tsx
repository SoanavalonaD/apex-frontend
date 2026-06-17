import type { Page } from '../App';
import type { Booking } from './Reservation';

interface HistoriqueReservationsProps {
  reservations: Booking[];
  setCurrentPage: (page: Page) => void;
}

export default function HistoriqueReservations({ reservations, setCurrentPage }: HistoriqueReservationsProps) {
  return (
    <div className="pt-24 pb-32 px-container-margin max-w-7xl mx-auto space-y-section-gap">
      
      {/* Page Header */}
      <div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-2">Historique des Réservations</h2>
        <p className="text-on-surface-variant font-body-lg text-body-lg">
          Consultez l'historique et le statut de vos locations de flotte executive.
        </p>
      </div>

      {/* Main Content */}
      <div className="glass-panel p-8 rounded-xl">
        {reservations.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16 space-y-6 max-w-md mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20 text-primary">
              <span className="material-symbols-outlined text-4xl">calendar_today</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-headline-md text-headline-md text-white">Aucune réservation active</h3>
              <p className="text-on-surface-variant text-body-md">
                Vous n'avez pas encore effectué de réservation. Parcourez notre flotte premium pour faire votre choix.
              </p>
            </div>
            <button 
              onClick={() => setCurrentPage('search')}
              className="bg-primary-container text-white px-8 py-3 rounded-lg font-headline-md electric-glow active:scale-95 transition-all"
            >
              Parcourir la flotte
            </button>
          </div>
        ) : (
          /* Bookings List */
          <div className="space-y-6">
            {reservations.map((res) => (
              <div 
                key={res.id} 
                className="zebra-stripe rounded-xl overflow-hidden border border-white/5 p-6 flex flex-col md:flex-row gap-6 transition-all hover:border-primary/30"
              >
                {/* Vehicle Image */}
                <div className="w-full md:w-56 h-36 rounded-lg overflow-hidden relative flex-shrink-0">
                  <img 
                    src={res.vehicleImage} 
                    alt={res.vehicleTitle} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-primary-container text-on-primary-container text-xs px-2 py-0.5 rounded font-label-sm">
                      {res.status}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-grow flex flex-col justify-between space-y-4 md:space-y-0">
                  <div className="flex flex-col md:flex-row md:justify-between items-start">
                    <div>
                      <h4 className="font-headline-md text-headline-md text-white">{res.vehicleTitle}</h4>
                      <div className="flex items-center gap-2 text-on-surface-variant text-sm mt-1">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>{res.dates}</span>
                      </div>
                    </div>
                    <div className="text-left md:text-right mt-2 md:mt-0">
                      <span className="text-primary font-headline-md">{res.totalAmount} MGA</span>
                      <p className="text-xs text-on-surface-variant">Facture payée</p>
                    </div>
                  </div>

                  {/* Route / Locations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/5 text-sm">
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5">near_me</span>
                      <div>
                        <p className="text-white font-semibold">Départ</p>
                        <p className="text-on-surface-variant text-xs">{res.pickup}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5">location_on</span>
                      <div>
                        <p className="text-white font-semibold">Retour</p>
                        <p className="text-on-surface-variant text-xs">{res.dropoff}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
