---
name: Apex
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#c3c5d9'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#8d90a2'
  outline-variant: '#434656'
  surface-tint: '#b7c4ff'
  primary: '#b7c4ff'
  on-primary: '#002682'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#004ced'
  secondary: '#a6e6ff'
  on-secondary: '#003543'
  secondary-container: '#14d1ff'
  on-secondary-container: '#00566b'
  tertiary: '#d1bcff'
  on-tertiary: '#3c0090'
  tertiary-container: '#792eff'
  on-tertiary-container: '#ebdfff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#b7eaff'
  secondary-fixed-dim: '#4cd6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d1bcff'
  on-tertiary-fixed: '#23005b'
  on-tertiary-fixed-variant: '#5700c9'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  section-gap: 40px
---

## Brand & Style

The brand personality is defined by speed, precision, and executive luxury. This design system bridges the gap between high-performance automotive engineering and high-tech software management. It targets fleet managers and premium car enthusiasts who value efficiency and a seamless, high-end experience.

The visual style is **Modern/High-Tech** with subtle **Glassmorphism**. It utilizes deep obsidian surfaces to create a cinematic backdrop that makes electric blue accents and high-quality car imagery pop. The interface feels expansive, reliable, and cutting-edge, evoking the sensation of a high-tech dashboard.

## Colors

This design system utilizes a "Midnight High-Contrast" palette. The foundation is **Deep Obsidian Black**, used for the primary background to minimize eye strain and maximize the premium feel.

- **Primary (Electric Blue):** A high-vibrancy blue used for critical actions, active states, and "Apex" moments of speed.
- **Secondary (Cyan/Electric):** Used for data visualization and secondary highlights.
- **Slate Grays:** A range of cool-toned grays used for surface containers, borders, and secondary text.
- **Accent (Violet):** A subtle tertiary color reserved for "Elite" or "Luxury" tier fleet categories.

## Typography

The typography system is designed for maximum clarity and a technical edge. 

**Sora** is utilized for headlines to provide a geometric, futuristic, and bold appearance that aligns with the "Apex" brand. It features slightly wider apertures which feel modern and premium.

**Inter** is the workhorse for body text and labels. Its systematic, neutral design ensures that complex data—like VIN numbers, rental durations, and pricing—remains highly legible at any size. Labels often use increased letter spacing and uppercase styling to denote technical categories or status indicators.

## Layout & Spacing

The design system employs a **12-column fluid grid** for desktop, collapsing to a **4-column grid** for mobile devices. 

- **Desktop:** 24px outer margins with 16px gutters.
- **Mobile:** 16px outer margins with 12px gutters.

The spacing rhythm is based on a **4px/8px incremental scale**. Larger gaps (40px+) are used to separate major functional blocks (e.g., Fleet Overview vs. Booking Stats) to maintain a clean, airy, and high-end feel despite the data-heavy nature of the application.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Glassmorphism** rather than traditional heavy shadows.

- **Level 0 (Background):** Deep Obsidian (#0B0B0C).
- **Level 1 (Cards/Containers):** Slate Gray (#1E2025) with a subtle 1px border (#ffffff10).
- **Level 2 (Modals/Overlays):** Semi-transparent Slate with a **20px backdrop blur**. This creates the signature high-tech "glass" effect.
- **Accents:** Active elements may feature a soft "Electric Blue" outer glow (0px 4px 20px rgba(0, 82, 255, 0.3)) to simulate light emission from a high-tech console.

## Shapes

The shape language is sophisticated and approachable. A **0.5rem (8px)** base roundedness is applied to smaller elements like inputs and tags, while primary containers and cards use **1rem (16px)** roundedness to create a "liquid" and premium silhouette.

Buttons and high-impact call-to-actions may utilize **Pill-shaped (rounded-full)** geometry to stand out against the more structured, rectangular grid of the fleet management dashboard.

## Components

### Buttons
Primary buttons are solid Electric Blue with bold white text. Secondary buttons use the "Ghost" style—a transparent background with a 1.5px Slate Gray border that shifts to Electric Blue on hover.

### Cards
Car imagery cards are the centerpiece. They feature a subtle gradient overlay at the bottom to ensure text legibility over photography. The card container has a 1px inner stroke to provide definition against the dark background.

### Inputs & Form Fields
Fields are dark-filled with a subtle bottom border. Upon focus, the border transforms into an Electric Blue glow. Icons within fields (e.g., search, calendar) use the secondary Cyan color for high visibility.

### Chips & Status Indicators
Status chips (e.g., "Available", "In Maintenance", "Rented") use a low-opacity background tint of the status color (Green, Orange, Blue) with high-contrast text and a small leading "dot" icon to indicate live status.

### Fleet List
Lists should be spacious, using 16px vertical padding between rows. Every third row should have a very faint "Zebra" stripe of #ffffff05 to assist in horizontal scanning of technical data.