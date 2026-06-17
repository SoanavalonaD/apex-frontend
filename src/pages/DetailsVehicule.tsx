import type { Page } from '../App';
import type { Car } from '../features/cars.types';
import { useCarDetail } from '../api/cars/hooks/useCarDetail';

interface VehicleSpec {
  label: string;
  val: string;
  unit: string;
  icon: string;
}

interface DetailsVehiculeProps {
  selectedVehicle: Car | null;
  setCurrentPage: (page: Page) => void;
  setSelectedVehicle: (vehicle: Car) => void;
}

/** Helper spec builder — generates a rich spec array from the limited backend payload. */
function buildSpecs(car: Car): VehicleSpec[] {
  const typeLC = car.type.toLowerCase();
  const specs: VehicleSpec[] = [];

  if (typeLC.includes('sport') || typeLC.includes('luxe')) {
    specs.push({ label: 'Puissance', val: '450+ CH', unit: 'Performance', icon: 'speed' });
    specs.push({ label: 'Accélération', val: '3.5s', unit: '0-100 km/h', icon: 'electric_car' });
  } else if (typeLC.includes('électrique')) {
    specs.push({ label: 'Puissance', val: '670 CH', unit: 'Électrique', icon: 'speed' });
    specs.push({ label: 'Accélération', val: '2.6s', unit: '0-100 km/h', icon: 'electric_car' });
  } else {
    specs.push({ label: 'Moteur', val: 'Performance', unit: 'Premium', icon: 'speed' });
    specs.push({ label: 'Accélération', val: '4.5s', unit: '0-100 km/h', icon: 'electric_car' });
  }

  specs.push({ label: 'Sièges', val: car.seats?.split(' ')[0] ?? '5', unit: 'Capacité', icon: 'groups' });
  specs.push({ label: 'Transmission', val: car.transmission, unit: 'Automatique', icon: 'bolt' });

  return specs;
}

const GALLERY = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
  'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
];

const DetailsVehicule: React.FC<DetailsVehiculeProps> = ({
  selectedVehicle,
  setCurrentPage,
  setSelectedVehicle,
}) => {
  const carId = selectedVehicle?.id ?? null;
  const { car, loading } = useCarDetail(carId);

  /** Fallback in case the API call hasn't resolved yet */
  const detail = car ?? selectedVehicle;

  const formatPrice = (val: string | number): string => {
    if (typeof val === 'number') return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return val;
  };

  const handleBook = () => {
    if (!detail) return;
    setSelectedVehicle(detail as Car);
    setCurrentPage('reservation');
  };

  if (loading || !detail) {
    return (
      <div className="pt-32 pb-32 flex items-center justify-center min-h-screen">
        <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  const specs = 'specs' in detail && Array.isArray((detail as any).specs)
    ? (detail as any).specs as VehicleSpec[]
    : buildSpecs(detail);

  const priceNum = Number((detail as any).price?.replace?.(/\s/g, '')) || (detail as any).price || 0;

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
              <span className="bg-secondary-container/20 text-secondary px-3 py-1 rounded-full text-label-sm font-label-sm border border-secondary/20 flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${detail.available ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                {detail.status || (detail.available ? 'Disponible' : 'Loué')}
              </span>
              <span className="text-on-surface-variant font-label-sm text-label-sm">{detail.type}</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">{detail.title}</h2>
          </div>

          {/* Bento Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-section-gap">
            {specs.map((spec, i) => (
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
              {GALLERY.map((url, i) => (
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
                {detail.description}
              </p>
              <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
                Profitez d'une expérience de conduite exceptionnelle avec ce véhicule premium de la flotte Apex.
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
              <span className="text-on-surface font-headline-lg text-headline-lg-mobile md:text-headline-lg">
                {typeof priceNum === 'number' ? formatPrice(priceNum * 3) : priceNum} MGA
              </span>
            </div>
          </div>
          {detail.available ? (
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
export default DetailsVehicule