const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      colors: {
        primary: "#780000",
        "primary-light": "#C1121F",
        bone: "#FDF0D5",
        secondary: "#003049",
        "secondary-light": "#669BBC",
        brown: colors.neutral[900],
      },
      fontFamily: {
        hand: ["Caveat", "cursive", "sans-serif"],
        elegant: ["Signika", "sans-serif"],
      },
      backgroundSize: {
        "gradient-size": "300% 100%",
      },
      backgroundImage: {
        hot: "linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))",
      },
      animation: {
        gradient: "gradient 2s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
}
