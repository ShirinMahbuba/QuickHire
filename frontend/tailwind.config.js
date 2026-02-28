/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B4EFC", 
        secondary: "#18191C",
        grayText: "#767F8C",
        bgLight: "#F1F2F4",
      },
    },
  },
  plugins: [],
}