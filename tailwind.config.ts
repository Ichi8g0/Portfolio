import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          50: "#1A1A1A",
          100: "#161616",
          200: "#1F1F1F",
          300: "#2A2A2A",
          400: "#3A3A3A",
          500: "#525252",
        },
        ember: {
          DEFAULT: "#D9481E",
          50: "#FBE8E1",
          400: "#E6612E",
          500: "#D9481E",
          600: "#B83A16",
          700: "#8F2D11",
        },
        bone: "#EDEAE3",
        ash: "#9A9A9A",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "10xl": ["8.5rem", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "9xl": ["7rem", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "8xl": ["5.5rem", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "7xl": ["4.25rem", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "6xl": ["3.25rem", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "click-burst": {
          "0%": { opacity: "0.9", transform: "scale(0.35)" },
          "100%": { opacity: "0", transform: "scale(6)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.9s ease forwards",
        "glow-pulse": "glow-pulse 8s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        "click-burst": "click-burst 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
