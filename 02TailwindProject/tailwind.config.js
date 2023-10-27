/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // media query to set the width of each section according to screens

        widescreen: { raw: "(min-aspect-ratio:3/2)" },
        tallscreen: { raw: "(min-aspect-ratio:13/20)" }, //same as 65/100
      },
    },
  },
  plugins: [],
};
