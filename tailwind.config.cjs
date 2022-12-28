/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightCyan: "#EFFAFA",
        darkCyan:"#7B8E8E",
        veryDarkCyan:"#2C3A3A"
      }, 
      fontFamily: {
        'spartan': ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}