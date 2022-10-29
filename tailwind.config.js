/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "big": "25rem",
      },
      zIndex: {
        "neg": -1,
      },
      fontFamily: {
        "spectral": ['Spectral', 'serif'],
        "league": ['League Spartan', 'sans-serif'],
      },
      animation: {
        'spin-once': 'spin 1s linear',
      },
    },

  },
  plugins: [],
}
