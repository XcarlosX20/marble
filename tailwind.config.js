/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      light: { 100: "#D9D9D9", 200: "#E7E7E7", 300: "#C4C4C4" },
      gray: "#B0B0B0",
      dark: {
        100: "#080808",
        200: "#0F0F0F",
        300: "#1E1E1E",
      },
      blue: {
        100: "#25CCC7",
      },
      fontWhite: "#FCFCFC",
    },
  },
  plugins: [],
};
