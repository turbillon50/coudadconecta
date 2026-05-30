import type { Config } from "tailwindcss";

/**
 * Tokens extraídos de design-reference/stitch — "Urban Connectivity Framework".
 * Paleta Material 3: Turquesa (primary) + Azul profundo (secondary) sobre gris suave.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#f9f9fc",
        "surface-dim": "#dadadc",
        "surface-bright": "#f9f9fc",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f3f6",
        "surface-container": "#eeeef0",
        "surface-container-high": "#e8e8ea",
        "surface-container-highest": "#e2e2e5",
        "on-surface": "#1a1c1e",
        "on-surface-variant": "#3c4a47",
        "inverse-surface": "#2f3133",
        "inverse-on-surface": "#f0f0f3",
        outline: "#6b7a77",
        "outline-variant": "#bacac6",
        "surface-tint": "#006a62",
        primary: "#006a62",
        "on-primary": "#ffffff",
        "primary-container": "#40e0d0",
        "on-primary-container": "#006058",
        "inverse-primary": "#3adccc",
        secondary: "#3a5f94",
        "on-secondary": "#ffffff",
        "secondary-container": "#9fc2fe",
        "on-secondary-container": "#294f83",
        tertiary: "#5b5f61",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#c8cacd",
        "on-tertiary-container": "#525558",
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "primary-fixed": "#61f9e9",
        "primary-fixed-dim": "#3adccc",
        "on-primary-fixed": "#00201d",
        "on-primary-fixed-variant": "#005049",
        "secondary-fixed": "#d5e3ff",
        "secondary-fixed-dim": "#a7c8ff",
        "on-secondary-fixed": "#001b3c",
        "on-secondary-fixed-variant": "#1f477b",
        "tertiary-fixed": "#e0e3e6",
        "tertiary-fixed-dim": "#c4c7ca",
        "on-tertiary-fixed": "#191c1e",
        "on-tertiary-fixed-variant": "#44474a",
        background: "#f9f9fc",
        "on-background": "#1a1c1e",
        "surface-variant": "#e2e2e5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        sm: "0.25rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      spacing: {
        "container-margin": "24px",
        gutter: "16px",
        "stack-sm": "8px",
        "stack-md": "16px",
        "stack-lg": "32px",
        "section-gap": "64px",
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "title-lg": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "500" }],
      },
      boxShadow: {
        ambient: "0 8px 30px rgba(58, 95, 148, 0.08)",
        lift: "0 4px 20px rgba(58, 95, 148, 0.06)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-pin": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.9" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out both",
        "pulse-pin": "pulse-pin 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
