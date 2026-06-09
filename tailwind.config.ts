import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: "#065f46", // Deep green
        ivory: "#fffffd",   // Warm ivory
        gold: "#d4af37",    // Trust gold
        navy: "#1a202c",    // Charcoal navy
        mint: "#f0fff4",    // Soft mint
      }
    },
  },
  plugins: [],
} satisfies Config;
