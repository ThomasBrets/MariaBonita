/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary:'Caveat',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      colors: {
        primary: '#eb2023',
        secondary: {
          DEFAULT: '#00944a',
          hover: '#1a9f5c',
        },
      },
      backgroundImage: {
        restaurant: "url('./assets/img/restaurant.png')",
      },
    },
  },
  plugins: [],
}

