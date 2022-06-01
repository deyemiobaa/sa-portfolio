module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
        "elsie": 'Elsie, serif',
        "lato": 'Lato, serif',
      },
      animation: {
        'spin-once': 'spin 1s linear',
      },
    },
    
  },
  plugins: [],
}