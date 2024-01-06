/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      beige: "#EBE2DB",
      brown: "#3A2D27",
      gray: "#756C68",
      blueish: "#E4DED9",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      grandslang: ["GrandSlang", "sans-serif"],
    },
  },
  plugins: [],
};
