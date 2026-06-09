/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4D3E', // Sidqly Deep Green
          foreground: '#FFFFFF',
        },
        sidqly: {
          deepGreen: "#0F4D3E",
          emeraldGreen: "#15803D",
          softGreen: "#A7F3D0",
          goldAccent: "#D4AF37",
          deepNavy: "#0B1D2A",
          warmIvory: "#F8FAFC",
          white: "#FFFFFF",
          slateText: "#475569",
          mutedBorder: "#E2E8F0",
          success: "#16A34A",
          warning: "#F59E0B",
          danger: "#DC2626"
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F4D3E 0%, #15803D 55%, #D4AF37 140%)',
        'soft-gradient': 'linear-gradient(180deg, #F8FAFC 0%, #ECFDF5 100%)',
        'card-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
      }
    },
  },
  plugins: [],
}
