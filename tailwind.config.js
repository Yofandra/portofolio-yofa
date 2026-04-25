/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E1E1E',
        'secondary' : '#ffffff',
      },
      fontFamily: {
        barlow: ['Barlow Semi Condensed', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
        baskerville: ['Baskerville SC', 'Libre Baskerville', 'serif'],
        poppins: ["Poppins", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
      },
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
