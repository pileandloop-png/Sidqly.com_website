/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidqly: {
          primary: '#006B3F', // Example professional green
          secondary: '#F4F7F5',
          accent: '#FFD700',
        }
      }
    },
  },
  plugins: [],
}
