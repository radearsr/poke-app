/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cs-black": "#454545",
        "cs-yellow": "#FFD93D",
        "cs-warm": "#FFEEBB",
        "cs-dark-warm": "#FFE081",
        "cs-orange": "#F86F03",
        "cs-red": "#F24C3D",
      },
      dropShadow: {
        "text": "0 2px 2px #F86F03",
      }
    },
  },
  plugins: [],
}

