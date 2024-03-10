/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./layout/banner.jpg')",
        'gradient': 'linear-gradient(to top, rgba(15,23,42,1) 15%, rgba(15,23,42,0) 100%)',
      },
      boxShadow: {
        'fullShadow-3': '0 0 5px 5px',
      }
    },
  },
  plugins: [],
}

