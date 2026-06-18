import React, { useState, FormEvent, ChangeEvent } from 'react';
import { carService } from '../../../api/cars/cars.service';
import { ValidationErrorResponse } from '../../../api/cars/cars.types';
import { Page } from '../../../App';
import { toast } from 'sonner';

interface AddCarFormProps {
    setCurrentPage: (page: Page) => void;
}

export const AddCarForm: React.FC<AddCarFormProps> = ({ setCurrentPage }) => {
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        license_plate: '',
        type: 'Standard',
        price_per_day: '',
        status: 'available',
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [statusMessage, setStatusMessage] = useState<{ text: string; isSuccess: boolean } | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage(null);

        const token = localStorage.getItem('apex_token') ?? '';
        if (!token) {
            setStatusMessage({ text: "Jeton d'authentification admin manquant.", isSuccess: false });
            toast.error("Jeton d'authentification admin manquant.");
            setLoading(false);
            return;
        }

        const payload = {
            ...formData,
            price_per_day: String(parseFloat(formData.price_per_day) || 0),
        };

        const { ok, data } = await carService.create(payload, token);

        if (ok) {
            setStatusMessage({ text: 'Le véhicule a été ajouté avec succès !', isSuccess: true });
            toast.success('Le véhicule a été ajouté avec succès !');
            setFormData({
                brand: '',
                model: '',
                license_plate: '',
                type: 'Standard',
                price_per_day: '',
                status: 'available',
            });
            setCurrentPage('home');
        } else {
            const errorData = data as ValidationErrorResponse;
            if (errorData.errors) {
                const validationErrors = Object.values(errorData.errors).flat().join(' | ');
                toast.error(validationErrors);
            } else {
                setStatusMessage({ text: (data as { message?: string }).message || 'Une erreur est survenue.', isSuccess: false });
            }
        }
        setLoading(false);
    };

    return (
        <div className="bg-[#0B0B0C] text-on-background min-h-screen flex items-center justify-center font-body-md p-container-margin relative overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-[10%] -right-[5%] w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px]"></div>
            </div>

            {/* Login / Form Container */}
            <main className="w-full max-w-[800px] lg:ml-auto lg:mr-12 z-20 relative mt-16">
                {/* Main Glass Panel Card */}
                <div className="glass-panel rounded-xl p-8 md:p-12 transition-all duration-300">
                    <button
                        onClick={() => setCurrentPage('home')}
                        className="flex items-center gap-2 text-on-surface-variant hover:text-white mb-6 transition-colors font-label-md"
                    >
                        <span className="material-symbols-outlined text-md">arrow_back</span>
                    </button>

                    <div className="mb-8">
                        <h1 className="font-headline-md text-headline-md text-on-surface mb-2 text-white">Espace Executive</h1>
                        <p className="font-body-md text-body-md text-on-surface-variant">Ajouter un véhicule d'exception au catalogue global Apex</p>
                    </div>

                    {statusMessage && (
                        <div className={`mb-6 p-4 rounded-lg text-sm font-medium border transition-all ${statusMessage.isSuccess
                            ? 'bg-green-950/40 text-green-400 border-green-500/30'
                            : 'bg-red-950/40 text-red-400 border-red-500/30'
                            }`}>
                            {statusMessage.text}
                        </div>
                    )}

                    {/* Form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>

                        {/* Brand Input */}
                        <div className="space-y-2">
                            <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="brand">Marque</label>
                            <div className="relative group border border-white/10 rounded-lg bg-surface-container-low input-focus-glow transition-all">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-secondary text-[20px]">directions_car</span>
                                </div>
                                <input
                                    className="w-full bg-transparent border-none outline-none py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 focus:ring-0"
                                    id="brand"
                                    type="text"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    placeholder="Ex: Porsche, Aston Martin..."
                                    required
                                />
                            </div>
                        </div>

                        {/* Model Input */}
                        <div className="space-y-2">
                            <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="model">Modèle</label>
                            <div className="relative group border border-white/10 rounded-lg bg-surface-container-low input-focus-glow transition-all">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-secondary text-[20px]">layers</span>
                                </div>
                                <input
                                    className="w-full bg-transparent border-none outline-none py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 focus:ring-0"
                                    id="model"
                                    type="text"
                                    name="model"
                                    value={formData.model}
                                    onChange={handleChange}
                                    placeholder="Ex: Taycan, Vantage..."
                                    required
                                />
                            </div>
                        </div>

                        {/* License Plate Input */}
                        <div className="space-y-2">
                            <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="license_plate">Plaque d'immatriculation</label>
                            <div className="relative group border border-white/10 rounded-lg bg-surface-container-low input-focus-glow transition-all">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-secondary text-[20px]">tag</span>
                                </div>
                                <input
                                    className="w-full bg-transparent border-none outline-none py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 focus:ring-0"
                                    id="license_plate"
                                    type="text"
                                    name="license_plate"
                                    value={formData.license_plate}
                                    onChange={handleChange}
                                    placeholder="Ex: AA-123-AA"
                                    required
                                />
                            </div>
                        </div>

                        {/* Vehicle Type Dropdown */}
                        <div className="space-y-2">
                            <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="type">Type de propulsion</label>
                            <div className="relative group border border-white/10 rounded-lg bg-surface-container-low input-focus-glow transition-all">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-secondary text-[20px]">bolt</span>
                                </div>
                                <select
                                    className="w-full bg-transparent border-none outline-none py-4 pl-12 pr-4 text-on-surface focus:ring-0 cursor-pointer appearance-none [&>option]:bg-[#141416] [&>option]:text-white"
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Standard">Standard</option>
                                    <option value="Electric">Électrique</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Luxury">Luxe</option>
                                </select>
                            </div>
                        </div>

                        {/* Price Input */}
                        <div className="space-y-2">
                            <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="price_per_day">Prix journalier (€)</label>
                            <div className="relative group border border-white/10 rounded-lg bg-surface-container-low input-focus-glow transition-all">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-secondary text-[20px]">euro</span>
                                </div>
                                <input
                                    className="w-full bg-transparent border-none outline-none py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 focus:ring-0"
                                    id="price_per_day"
                                    type="number"
                                    name="price_per_day"
                                    value={formData.price_per_day}
                                    onChange={handleChange}
                                    step="1"
                                    min="0"
                                    placeholder="150"
                                    required
                                />
                            </div>
                        </div>

                        {/* Status Dropdown */}
                        <div className="space-y-2">
                            <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="status">Statut Initial</label>
                            <div className="relative group border border-white/10 rounded-lg bg-surface-container-low input-focus-glow transition-all">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-secondary text-[20px]">info</span>
                                </div>
                                <select
                                    className="w-full bg-transparent border-none outline-none py-4 pl-12 pr-4 text-on-surface focus:ring-0 cursor-pointer appearance-none [&>option]:bg-[#141416] [&>option]:text-white"
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="available">Disponible immédiatement</option>
                                    <option value="maintenance">En Maintenance</option>
                                </select>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button
                            className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 rounded-lg flex items-center justify-center gap-3 electric-glow hover:opacity-90 active:scale-95 transition-all duration-200 mt-8 group cursor-pointer disabled:opacity-50"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Déploiement en cours...</span>
                                </span>
                            ) : (
                                <>
                                    <span>Ajouter la voiture au catalogue</span>
                                    <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer Info */}
                <div className="mt-8 text-center text-outline/50 font-label-sm text-label-sm">
                    <p>© 2026 Apex Rental Group. Panel Securisé.</p>
                </div>
            </main>

            {/* Visual Anchor Side (Desktop Only - Placed on the Right Side) */}
            <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-1/2 items-center justify-center p-12 z-10 overflow-hidden mt-10">
                <div className="relative w-full h-full rounded-xl overflow-hidden group">
                    <img
                        alt="Apex Fleet Management Representation"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&q=80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-12 left-12 max-w-md">
                        <h2 className="font-headline-xl text-headline-xl text-white mb-4 leading-tight">Gérer la puissance avec précision.</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">L'extension de la flotte haut de gamme pour offrir à notre clientèle l'excellence mécanique absolue.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};