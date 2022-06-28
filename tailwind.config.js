/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "big": "20rem",
      },
      zIndex: {
        "neg": -1,
      },
      fontFamily: {
        "lato": ['PT Sans', 'serif']
      },
      animation: {
        'spin-once': 'spin 1s linear',
      },
    },

  },
  plugins: [],
}
