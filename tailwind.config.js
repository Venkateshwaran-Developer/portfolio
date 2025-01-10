/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rgba:'rgba(217, 217, 217, 0.6)',
      },
    },
    screens: {
      'sm': '100px',
      // => @media (min-width: 576px) { ... }

      'md': '780px',
      // => @media (min-width: 960px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}