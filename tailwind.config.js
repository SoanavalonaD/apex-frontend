/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#4cd6ff",
        "primary": "#b7c4ff",
        "surface-container-high": "#2a2a2b",
        "surface-dim": "#131314",
        "secondary": "#a6e6ff",
        "on-background": "#e5e2e3",
        "on-tertiary": "#3c0090",
        "outline-variant": "#434656",
        "primary-fixed": "#dde1ff",
        "on-tertiary-fixed-variant": "#5700c9",
        "outline": "#8d90a2",
        "surface": "#131314",
        "on-secondary-container": "#00566b",
        "on-primary-fixed": "#001452",
        "background": "#131314",
        "error-container": "#93000a",
        "tertiary-fixed": "#e9ddff",
        "on-primary-container": "#dfe3ff",
        "on-surface": "#e5e2e3",
        "surface-container-low": "#1c1b1c",
        "on-secondary-fixed": "#001f28",
        "on-error": "#690005",
        "inverse-on-surface": "#313031",
        "primary-container": "#0052ff",
        "surface-container": "#201f20",
        "tertiary": "#d1bcff",
        "error": "#ffb4ab",
        "secondary-container": "#14d1ff",
        "on-primary-fixed-variant": "#0038b6",
        "surface-variant": "#353436",
        "inverse-primary": "#004ced",
        "on-secondary-fixed-variant": "#004e60",
        "tertiary-fixed-dim": "#d1bcff",
        "on-primary": "#002682",
        "surface-tint": "#b7c4ff",
        "surface-container-lowest": "#0e0e0f",
        "tertiary-container": "#792eff",
        "surface-container-highest": "#353436",
        "on-tertiary-container": "#ebdfff",
        "secondary-fixed": "#b7eaff",
        "on-surface-variant": "#c3c5d9",
        "on-error-container": "#ffdad6",
        "surface-bright": "#3a393a",
        "on-secondary": "#003543",
        "primary-fixed-dim": "#b7c4ff",
        "inverse-surface": "#e5e2e3",
        "on-tertiary-fixed": "#23005b",
        // Extra obsidian black from brand elev 0
        "obsidian-dark": "#0B0B0C"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "section-gap": "40px",
        "gutter": "16px",
        "base": "8px",
        "container-margin": "24px"
      },
      fontFamily: {
        "body-lg": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-md": ["Sora", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Sora", "sans-serif"],
        "headline-xl": ["Sora", "sans-serif"],
        "headline-lg": ["Sora", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "600" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
