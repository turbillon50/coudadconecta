---
name: Urban Connectivity Framework
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#3c4a47'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#6b7a77'
  outline-variant: '#bacac6'
  surface-tint: '#006a62'
  primary: '#006a62'
  on-primary: '#ffffff'
  primary-container: '#40e0d0'
  on-primary-container: '#006058'
  inverse-primary: '#3adccc'
  secondary: '#3a5f94'
  on-secondary: '#ffffff'
  secondary-container: '#9fc2fe'
  on-secondary-container: '#294f83'
  tertiary: '#5b5f61'
  on-tertiary: '#ffffff'
  tertiary-container: '#c8cacd'
  on-tertiary-container: '#525558'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#61f9e9'
  primary-fixed-dim: '#3adccc'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a7c8ff'
  on-secondary-fixed: '#001b3c'
  on-secondary-fixed-variant: '#1f477b'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#44474a'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
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
  container-margin: 24px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 64px
---

## Brand & Style

The design system is engineered to feel like a high-end digital concierge for the modern urban dweller. It bridges the gap between civic utility and lifestyle aspiration, evoking a sense of reliability, intelligence, and effortless navigation. 

The visual style is a sophisticated blend of **Modern Corporate** and **Glassmorphism**. It prioritizes clarity and utility through generous whitespace (Minimalism) while using depth and translucency to create a premium, tactile feel. The goal is to move away from "government-utility" aesthetics toward a "lifestyle-ecosystem" vibe that feels as polished as top-tier travel and productivity apps.

- **Tone:** Professional yet welcoming, community-centric, and technologically advanced.
- **Visual Pillars:** Soft depth, crisp iconography, and high-legibility typography.

## Colors

The palette is anchored by the deep, authoritative **Deep Blue**, representing the stability of the city infrastructure. **Turquoise** serves as the high-energy primary action color, used strategically for interactivity, CTAs, and wayfinding to ensure the UI feels vibrant and "connected."

- **Primary (Turquoise):** Use for active states, primary buttons, and critical path highlights.
- **Secondary (Deep Blue):** Use for headers, navigation backgrounds, and brand-heavy moments.
- **Surface (Soft Gray):** Used for background canvas to reduce eye strain and provide a soft contrast for cards.
- **Success/Warning/Error:** Standard semantic variants should be tinted with the Primary Turquoise hue to maintain palette harmony.

## Typography

The system utilizes **Inter** for its neutral, highly legible, and modern character. The hierarchy is designed for rapid scanning of information-dense screens like business directories or maps.

- **Weight Usage:** Reserve Bold/700 for Display titles only. SemiBold/600 is the standard for headlines to maintain a "premium" but not "heavy" feel.
- **Line Height:** Generous line heights are applied to body text (1.5x - 1.6x) to create the airy, Notion-like feel requested.
- **Optical Sizing:** For mobile devices, headlines downscale to prevent awkward word-wrapping in narrow containers.

## Layout & Spacing

This design system uses a **Fluid Grid** with fixed maximum widths for desktop to ensure content remains readable.

- **Grid Model:** 12-column grid for desktop, 8-column for tablet, and 4-column for mobile.
- **Margins:** A standard 24px side margin is maintained on mobile to reinforce the "floating card" aesthetic, preventing elements from feeling cramped against the screen edge.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Adaptability:** On desktop, the layout centers with a max-width of 1280px. Content cards reflow from a vertical list (mobile) to a multi-column masonry or grid layout (desktop).

## Elevation & Depth

To achieve the Apple-inspired "premium" feel, the system relies on **Ambient Shadows** and **Glassmorphism** rather than heavy borders.

- **Surface Levels:** 
    - **L0 (Canvas):** Soft Gray (#F5F7FA).
    - **L1 (Cards):** Pure White (#FFFFFF) with a 15% opacity, 30px blur shadow.
    - **L2 (Overlays/Modals):** Glassmorphic surfaces using a 70% white tint with a 20px backdrop blur.
- **Shadow Character:** Shadows should be tinted with a hint of the Secondary Deep Blue to prevent them from looking "dirty" or "muddy." Use high blur radii with low opacity (4-8%) for a soft, natural lift.

## Shapes

The shape language is defined by large, friendly radii that mirror the rounded corners of modern hardware devices.

- **Standard Radius:** 16px (rounded-lg) for most components.
- **Container Radius:** 24px (rounded-xl) for main content cards and map overlays.
- **Interactive Elements:** Buttons and input fields use a consistent 12px radius to feel tactile but professional.
- **Iconography:** Use 2pt stroke weight with rounded caps and joins to match the component geometry.

## Components

### Buttons
- **Primary:** Turquoise background, white text. No shadow, or a very subtle Turquoise glow on hover.
- **Secondary:** Deep Blue text, transparent background with a 1px Deep Blue border or a light Turquoise tint.
- **Tertiary:** Text-only with an arrow icon for "See all" or "Read more" actions.

### Cards
- **Directory Cards:** White background, 24px corner radius, soft ambient shadow. Images should have a top-only 24px radius.
- **Floating Map Cards:** Glassmorphic background (backdrop-blur: 20px) with a subtle 1px white inner border to define the edge.

### Input Fields
- **Search Bar:** Large (56px height), 16px radius, Soft Gray background with a subtle inner shadow. Iconography should be the Deep Blue color at 50% opacity.

### Navigation
- **Mobile Tab Bar:** Glassmorphic blur with active states highlighted in Turquoise.
- **Desktop Sidebar:** Minimalist, using Deep Blue for active icons and text.

### Chips & Badges
- **Status Chips:** Pill-shaped (rounded-full), low-saturation background colors (e.g., light turquoise tint) with high-saturation text for readability.