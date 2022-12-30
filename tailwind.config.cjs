/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightCyan: '#EFFAFA',
        darkCyan: '#66a3a3',
        veryDarkCyan: '#2C3A3A',
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
      backgroundImage: {
        bgHeader: "url('./images/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
}
