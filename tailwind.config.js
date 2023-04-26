/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      light: { 100: "#D9D9D9", 200: "#E7E7E7" },
      gray: "#B0B0B0",
      dark: {
        100: "#080808",
        200: "#0F0F0F",
      },
      fontWhite: "#FCFCFC",
    },
  },
  plugins: [],
};
