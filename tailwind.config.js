/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        "dark":"#282936",
        "light":"#f5f5f5"
      }
    },
  },
  plugins: [],
};
