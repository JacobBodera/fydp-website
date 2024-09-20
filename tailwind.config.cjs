/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#EFE6DA",
        accent: "#C4DAD2",
        light: "#6A9C89",
        dark: "#16423C",
      },
    },
  },
  plugins: [],
};
