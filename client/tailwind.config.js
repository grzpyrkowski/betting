/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '440px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '2000px',
      '4k': '3000px'
    },
    extend: {
      boxShadow: {
        'fullShadow-3': '0 0 5px 5px',
      },
      fontFamily: {
        "inter": ['"Inter", sans-serif'],
        "open": ['"Open", sans-serif'],
        "ptFont": ['"PT", sans-serif'],
        "yeseva": ['"Yeseva", sans'],
        "montserrat": ['"Montserrat", serif']
      }
    },
  },
  plugins: [],
}

