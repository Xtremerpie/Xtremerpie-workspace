import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#08080c",
        surface: {
          DEFAULT: "#0f1017",
          subtle: "#141520",
          card: "#12131d",
          elevated: "#181a27",
          border: "rgba(255, 255, 255, 0.08)",
        },
        gold: {
          50: "#fdfbf5",
          100: "#faf4e4",
          200: "#f4e6be",
          300: "#edd292",
          400: "#e5c158",
          500: "#d4af37", // Champagne Gold Primary
          600: "#b99026",
          700: "#946f1e",
          800: "#79571e",
          900: "#66481d",
        },
        crimson: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#e63946", // Dark Crimson Accent
          600: "#b91c1c",
          700: "#991b1b",
          800: "#7f1d1d",
          900: "#450a0a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse": "spin-reverse 35s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "beam-sweep": "beamSweep 8s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        beamSweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      boxShadow: {
        "gold-glow": "0 0 25px -5px rgba(212, 175, 55, 0.3)",
        "gold-sm": "0 0 15px -3px rgba(212, 175, 55, 0.25)",
        "crimson-glow": "0 0 25px -5px rgba(230, 57, 70, 0.35)",
        "glow-combined": "0 0 30px -5px rgba(212, 175, 55, 0.2), 0 0 50px -10px rgba(230, 57, 70, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
