import React, { useState } from 'react';
interface CreationCompteProps {
  setCurrentPage: (page: string) => void;
}

export default function CreationCompte({ setCurrentPage }: CreationCompteProps) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!terms) {
      alert('Veuillez accepter les Conditions Générales.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Compte créé avec succès ! Bienvenue chez Apex.');
      setCurrentPage('login');
    }, 1500);
  };

  return (
    <div className="bg-[#0B0B0C] text-on-background min-h-screen flex flex-col font-body-md overflow-x-hidden relative">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center px-container-margin h-16 z-50 fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <span className="font-headline-lg text-headline-lg text-primary-container tracking-tighter">Apex</span>
        </div>
        <div className="hidden md:flex gap-6">
          <button onClick={() => setCurrentPage('home')} className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors">Découvrir</button>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Aide</a>
        </div>
      </header>

      {/* Main Grid content */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-gutter relative">
        {/* Background Decorative Element */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-secondary-container/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="w-full max-w-md z-10">
          {/* Sign-up Card */}
          <div className="glass-panel p-8 rounded-xl shadow-2xl relative">
            <div className="mb-8">
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 text-white">Rejoignez l'élite</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Créez votre compte Apex pour une expérience de conduite sans précédent.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block font-label-md text-label-md text-outline" htmlFor="fullname">Nom Complet</label>
                <div className="electric-glow flex items-center bg-surface-container rounded-lg border border-white/5 px-4 py-3 transition-all duration-300">
                  <span className="material-symbols-outlined text-secondary-container mr-3">person</span>
                  <input
                    className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline/50 outline-none"
                    id="fullname"
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    placeholder="Jean Dupont"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block font-label-md text-label-md text-outline" htmlFor="email">Adresse Email</label>
                <div className="electric-glow flex items-center bg-surface-container rounded-lg border border-white/5 px-4 py-3 transition-all duration-300">
                  <span className="material-symbols-outlined text-secondary-container mr-3">mail</span>
                  <input
                    className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline/50 outline-none"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jean.dupont@email.com"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="block font-label-md text-label-md text-outline" htmlFor="phone">Numéro de Téléphone</label>
                <div className="electric-glow flex items-center bg-surface-container rounded-lg border border-white/5 px-4 py-3 transition-all duration-300">
                  <span className="material-symbols-outlined text-secondary-container mr-3">call</span>
                  <input
                    className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline/50 outline-none"
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+33 6 12 34 56 78"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block font-label-md text-label-md text-outline" htmlFor="password">Mot de passe</label>
                <div className="electric-glow flex items-center bg-surface-container rounded-lg border border-white/5 px-4 py-3 transition-all duration-300">
                  <span className="material-symbols-outlined text-secondary-container mr-3">lock</span>
                  <input
                    className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline/50 outline-none"
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    className="text-outline hover:text-on-surface transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <div className="flex items-center h-5">
                  <input
                    className="w-5 h-5 rounded border-outline-variant bg-surface-container text-primary-container focus:ring-primary-container/50 cursor-pointer"
                    id="terms"
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    required
                  />
                </div>
                <label className="text-label-sm font-label-sm text-on-surface-variant leading-tight" htmlFor="terms">
                  J'accepte les <a className="text-primary-container hover:underline" href="#">Conditions Générales</a> et la <a className="text-primary-container hover:underline" href="#">Politique de Confidentialité</a> d'Apex.
                </label>
              </div>

              {/* Submit Button */}
              <button
                className="w-full bg-primary-container hover:bg-primary-container/90 text-white font-headline-md text-headline-md py-4 rounded-xl transition-all duration-300 active:scale-95 shadow-[0_4px_20px_rgba(0,82,255,0.3)] flex items-center justify-center gap-2"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Création...</span>
                  </span>
                ) : (
                  <span>S'inscrire</span>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Vous avez déjà un compte ?
                <button
                  onClick={() => setCurrentPage('login')}
                  className="text-secondary-container font-label-md hover:underline ml-1 cursor-pointer"
                >
                  Connectez-vous
                </button>
              </p>
            </div>
          </div>

          {/* Footer Small */}
          <div className="mt-8 flex justify-center gap-6 text-outline font-label-sm text-label-sm">
            <a className="hover:text-on-surface transition-colors" href="#">Sécurité</a>
            <a className="hover:text-on-surface transition-colors" href="#">Support</a>
            <span>© 2026 Apex Rental Inc.</span>
          </div>
        </div>
      </main>

      {/* Visual Background Element (Image - Desktop only) */}
      <div className="hidden lg:block fixed right-0 top-0 h-full w-1/3 z-0">
        <img
          className="h-full w-full object-cover opacity-40 mix-blend-lighten"
          alt="Apex High-performance luxury sports car"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcuFzoeMpEbGpJ20V6quvNB8B0IQ-pUoQ2Bto3_XChDWdoJA6swalS2b1pa2ShH-5bWHigbfNBs3XWqftWrrhODTUPmACbizXy66sQ_YtiN5oFCz6zY7w3OxjDJPL3MPXOjA5ZuGDqylvJ9v8zT7w-2KmJiIMhHH29uk5eUAbpjB2Iq9OSouB6khXesrrNdw9eVedLaqog03yKxnEbPcKXHITTMg-yS2kQJt-c0vQUGYXqxOZTO0SA7efoEyoU7596Nnf5A_yOUXw"
        />
      </div>
    </div>
  );
}
