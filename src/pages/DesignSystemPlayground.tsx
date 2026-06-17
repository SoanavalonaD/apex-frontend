import React from 'react';

interface ThemeColor {
  name: string;
  hex: string;
  bg: string;
  container?: string;
}

interface TypographyItem {
  tag: string;
  font: string;
  size: string;
  weight: string;
  lh: string;
  desc: string;
}

const DesignSystemPlayground: React.FC = () => {
  const themeColors: ThemeColor[] = [
    { name: 'Surface (Midnight)', hex: '#131314', bg: 'bg-[#131314]' },
    { name: 'Background (Obsidian)', hex: '#0B0B0C', bg: 'bg-[#0B0B0C]' },
    { name: 'Primary (Electric Blue)', hex: '#b7c4ff', container: '#0052ff', bg: 'bg-[#0052ff]' },
    { name: 'Secondary (Cyan)', hex: '#a6e6ff', container: '#14d1ff', bg: 'bg-[#14d1ff]' },
    { name: 'Tertiary (Violet)', hex: '#d1bcff', container: '#792eff', bg: 'bg-[#792eff]' },
    { name: 'Surface Bright', hex: '#3a393a', bg: 'bg-[#3a393a]' },
    { name: 'Surface Container', hex: '#201f20', bg: 'bg-[#201f20]' },
    { name: 'Surface Container High', hex: '#2a2a2b', bg: 'bg-[#2a2a2b]' },
    { name: 'Outline', hex: '#8d90a2', bg: 'bg-[#8d90a2]' },
    { name: 'Outline Variant', hex: '#434656', bg: 'bg-[#434656]' },
  ];

  const typography: TypographyItem[] = [
    {
      tag: 'headline-xl',
      font: 'Sora',
      size: '48px (3rem)',
      weight: 'Bold (700)',
      lh: '56px',
      desc: 'Élevez Votre Voyage',
    },
    {
      tag: 'headline-lg',
      font: 'Sora',
      size: '32px (2rem)',
      weight: 'Bold (700)',
      lh: '40px',
      desc: 'Porsche Taycan Turbo S',
    },
    {
      tag: 'headline-md',
      font: 'Sora',
      size: '24px (1.5rem)',
      weight: 'Semi-Bold (600)',
      lh: '32px',
      desc: 'Votre Sélection',
    },
    {
      tag: 'body-lg',
      font: 'Inter',
      size: '18px (1.125rem)',
      weight: 'Regular (400)',
      lh: '28px',
      desc: 'Accès à une flotte premium avec une précision de niveau exécutif.',
    },
    {
      tag: 'body-md',
      font: 'Inter',
      size: '16px (1rem)',
      weight: 'Regular (400)',
      lh: '24px',
      desc: "L'intérieur est un sanctuaire de technologie...",
    },
    {
      tag: 'label-md',
      font: 'Inter',
      size: '14px (0.875rem)',
      weight: 'Semi-Bold (600)',
      lh: '20px',
      desc: 'CONFIRMER LA RÉSERVATION',
    },
    {
      tag: 'label-sm',
      font: 'Inter',
      size: '12px (0.75rem)',
      weight: 'Medium (500)',
      lh: '16px',
      desc: 'DISPONIBLE',
    },
  ];

  return (
    <div className="pt-24 pb-32 px-container-margin max-w-7xl mx-auto space-y-section-gap">
      
      {/* Intro */}
      <section>
        <h2 className="font-headline-xl text-headline-xl text-white mb-2">Apex Design System</h2>
        <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl">
          A high-performance design language combining obsidian surfaces, electric blue glows, and sleek typography to bridge automotive speed with executive software precision.
        </p>
      </section>

      {/* Brand Style */}
      <section className="glass-panel p-8 rounded-xl">
        <h3 className="font-headline-lg text-headline-lg text-white mb-4">Brand Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter text-on-surface-variant">
          <div>
            <h4 className="font-headline-md text-headline-md text-white mb-2">Personality & Mood</h4>
            <p className="font-body-md text-body-md leading-relaxed">
              Defined by <strong>speed, precision, and executive luxury</strong>. The theme uses obsidian surfaces as a cinematic backdrop, making high-quality automobile imagery and electric glows pop. Micro-animations and tactile feedback emphasize cutting-edge tech.
            </p>
          </div>
          <div>
            <h4 className="font-headline-md text-headline-md text-white mb-2">Elevation & Depth</h4>
            <p className="font-body-md text-body-md leading-relaxed">
              Hierarchy is established through <strong>tonal layering and glassmorphism</strong> instead of heavy shadows. Standard level 1 cards feature Slate Gray backdrops with 1px border lines, while level 2 active overlays utilize 20px blur filters.
            </p>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section>
        <h3 className="font-headline-lg text-headline-lg text-white mb-6">Midnight Color Palette</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {themeColors.map((color, i) => (
            <div key={i} className="glass-panel rounded-xl overflow-hidden">
              <div className={`h-24 ${color.bg} border-b border-outline-variant/30`}></div>
              <div className="p-4">
                <p className="font-label-md text-label-md text-white truncate">{color.name}</p>
                <p className="text-on-surface-variant font-label-sm text-label-sm">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section>
        <h3 className="font-headline-lg text-headline-lg text-white mb-6">Typography System</h3>
        <div className="space-y-4">
          {typography.map((typo, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm bg-surface-container-highest px-3 py-1 rounded-full text-secondary uppercase tracking-widest">
                  {typo.tag}
                </span>
                <p className="text-on-surface-variant font-label-sm text-label-sm pt-2">
                  {typo.font} • {typo.size} • {typo.weight} • LH: {typo.lh}
                </p>
              </div>
              <div className="text-white text-right md:max-w-md">
                <p className={`font-${typo.tag}`}>{typo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Component Previews */}
      <section>
        <h3 className="font-headline-lg text-headline-lg text-white mb-6">Interactive Elements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Buttons */}
          <div className="glass-panel p-6 rounded-xl space-y-4">
            <h4 className="font-headline-md text-white mb-2">Buttons & Actions</h4>
            <button className="w-full bg-primary-container text-white py-3 rounded-lg font-headline-md electric-glow">
              Primary Button
            </button>
            <button className="w-full border border-outline-variant hover:border-primary text-on-surface py-3 rounded-lg font-label-md transition-all">
              Secondary Ghost
            </button>
          </div>

          {/* Chips */}
          <div className="glass-panel p-6 rounded-xl space-y-4">
            <h4 className="font-headline-md text-white mb-2">Chips & Badges</h4>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-primary-container/20 text-secondary-fixed-dim px-3 py-1 rounded-full text-label-sm font-label-sm border border-secondary-fixed-dim/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
                Disponible
              </span>
              <span className="bg-error-container/20 text-error px-3 py-1 rounded-full text-label-sm font-label-sm border border-error/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Loué
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="glass-panel p-6 rounded-xl space-y-4">
            <h4 className="font-headline-md text-white mb-2">Inputs & Focus Glow</h4>
            <div className="space-y-2">
              <label className="font-label-sm text-primary uppercase tracking-widest block ml-1">Example Input</label>
              <div className="relative border-b-2 border-outline-variant focus-within:border-primary transition-all">
                <input 
                  type="text" 
                  placeholder="Focus me to glow" 
                  className="w-full bg-surface-container-low outline-none py-3 px-4 text-on-surface focus:ring-0 focus:border-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shapes and Spacing */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="glass-panel p-6 rounded-xl">
          <h3 className="font-headline-lg text-white mb-4">Shapes & Corners</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-surface-container p-3 rounded-sm border border-outline-variant">
              <span className="text-on-surface">sm (0.25rem / 4px)</span>
              <span className="text-on-surface-variant">Inputs, tags</span>
            </div>
            <div className="flex justify-between items-center bg-surface-container p-3 rounded-lg border border-outline-variant">
              <span className="text-on-surface">lg (0.5rem / 8px)</span>
              <span className="text-on-surface-variant">Default elements</span>
            </div>
            <div className="flex justify-between items-center bg-surface-container p-3 rounded-xl border border-outline-variant">
              <span className="text-on-surface">xl (0.75rem / 12px)</span>
              <span className="text-on-surface-variant">Primary containers</span>
            </div>
            <div className="flex justify-between items-center bg-surface-container p-3 rounded-full border border-outline-variant">
              <span className="text-on-surface">full (9999px)</span>
              <span className="text-on-surface-variant">Pill-shaped CTA buttons</span>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl">
          <h3 className="font-headline-lg text-white mb-4">Spacing Rhythm</h3>
          <div className="space-y-3 text-on-surface">
            <div className="flex justify-between p-3 bg-surface-dim border border-outline-variant">
              <span>base</span>
              <span>8px</span>
            </div>
            <div className="flex justify-between p-3 bg-surface-dim border border-outline-variant">
              <span>gutter</span>
              <span>16px</span>
            </div>
            <div className="flex justify-between p-3 bg-surface-dim border border-outline-variant">
              <span>container-margin</span>
              <span>24px</span>
            </div>
            <div className="flex justify-between p-3 bg-surface-dim border border-outline-variant">
              <span>section-gap</span>
              <span>40px</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
export default DesignSystemPlayground
