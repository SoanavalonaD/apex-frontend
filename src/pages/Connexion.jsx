import React, { useState } from 'react';

export default function Connexion({ setCurrentPage, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (onLogin) {
        onLogin('mock_token_apex_12345');
      } else {
        setCurrentPage('home');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center font-body-md text-body-md p-container-margin relative bg-[#0B0B0C]">
      {/* Visual Anchor Side (Desktop Only) */}
      <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-1/2 items-center justify-center p-12 z-10 overflow-hidden">
        <div className="relative w-full h-full rounded-xl overflow-hidden group">
          <img 
            alt="Apex Luxury Performance Car" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq--MuwuVoc_e8FNwgPnJTjZG-jJNL3IifUHpf_Kth4ADLDLyMWKBW_l0ffHjAmgAwWYmjVw1iGt76ktP5PO9tose5JgmONDKod1IBSCdGpirzBHDOFqL3XpglBrpffvvxiBi2xyhkdXbodCGf3dA8MhhhXzwVxFC3oIt_P0p0_qHwGvKpA3jU-0NSv3eMvsVR315k3D1pE50M7N9z-8chogB_JtgByt80JPztir-jXGXFjf6Lslk4fm8CgWH85rq1mMYnrL95lLk"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-12 left-12 max-w-md">
            <h2 className="font-headline-xl text-headline-xl text-white mb-4 leading-tight">Dominez la route avec Apex.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">L'excellence de la location de véhicules premium à portée de main.</p>
          </div>
        </div>
      </div>

      {/* Login Container */}
      <main className="w-full max-w-[480px] lg:ml-auto lg:mr-12 z-20">
        {/* Back Link to Home */}
        <button 
          onClick={() => setCurrentPage('home')} 
          className="flex items-center gap-2 text-on-surface-variant hover:text-white mb-6 transition-colors font-label-md"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span>Retour à l'accueil</span>
        </button>

        <div className="glass-panel rounded-xl p-8 md:p-12 transition-all duration-300">
          {/* Brand Logo */}
          <div className="flex flex-col items-center mb-10">
            <span className="font-headline-lg text-headline-lg text-primary tracking-tighter mb-2">Apex</span>
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">Premium Car Rental</span>
          </div>

          <div className="mb-8">
            <h1 className="font-headline-md text-headline-md text-on-surface mb-2 text-white">Connexion</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Accédez à votre flotte executive</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="email">Adresse e-mail</label>
              <div className="relative group border border-white/10 rounded-lg bg-surface-container-low input-focus-glow transition-all">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-secondary text-[20px]">alternate_email</span>
                </div>
                <input 
                  className="w-full bg-transparent border-none outline-none py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 focus:ring-0" 
                  id="email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nom@entreprise.com" 
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">Mot de passe</label>
                <a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors" href="#">Mot de passe oublié ?</a>
              </div>
              <div className="relative group border border-white/10 rounded-lg bg-surface-container-low input-focus-glow transition-all">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-secondary text-[20px]">lock</span>
                </div>
                <input 
                  className="w-full bg-transparent border-none outline-none py-4 pl-12 pr-12 text-on-surface placeholder:text-outline/50 focus:ring-0" 
                  id="password" 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  required
                />
                <button 
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-on-surface-variant transition-colors" 
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Action Button */}
            <button 
              className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 rounded-lg flex items-center justify-center gap-3 electric-glow hover:opacity-90 active:scale-95 transition-all duration-200 mt-8 group" 
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Connexion...</span>
                </span>
              ) : (
                <>
                  <span>Se connecter au Dashboard</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          {/* Secondary Actions */}
          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Pas encore de compte ? 
              <button 
                onClick={() => setCurrentPage('signup')} 
                className="text-primary font-label-md hover:underline ml-1 cursor-pointer"
              >
                Créer un compte entreprise
              </button>
            </p>
          </div>
        </div>

        {/* Support / Footer Info */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <a className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors" href="#">Assistance 24/7</a>
            <a className="font-label-sm text-label-sm text-outline hover:text-on-surface transition-colors" href="#">Confidentialité</a>
          </div>
          <p className="font-label-sm text-label-sm text-outline/50">© 2026 Apex Rental Group. Tous droits réservés.</p>
        </div>
      </main>
    </div>
  );
}
