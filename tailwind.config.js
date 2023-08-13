/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        geo: ["Geo", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        background: {
          //dark: colors.neutral[900],
          DEFAULT: "#08091b",
          //light: colors.neutral[700],
        },
        primary: {
          //dark: "#1F236C",
          DEFAULT: "#e33748",
          //light: "#9CDCE2",
        },
        secondary: {
          dark: "#1F236C",
          DEFAULT: "#3F73A7",
          light: "#9CDCE2",
        },
        accent: {
          //dark: colors.red[700],
          DEFAULT: colors.red[500],
          //light: colors.red[300],
        },
        text: {
          dark: colors.neutral[500],
          DEFAULT: colors.neutral[300],
          light: colors.neutral[100],
        },
      }
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".center": {
          "@apply flex justify-center items-center": {}
        },
        ".heading": {
          "@apply text-text-light font-anton text-2xl": {}
        },
        ".rounded": {
          "@apply rounded-lg": {}
        }
      });
    },
  ],
}

