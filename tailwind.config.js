/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7E90FE',
        'secondary': '#9873FF',
        'deep-dark': '#1A1919',
        'light-dark': '#A3A3A3',
        'background': '#F9F9FF',
      },
      fontFamily: {
        'primary': ['Manrope', 'sans-serif']

      }
    },
  },
  plugins: [],
}