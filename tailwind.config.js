/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#FFF3E3",
      white: "#FFF",
      black: "#000",
      grey: "#9F9F9F",
      darkGrey: "#333",
      liteGray: "#666",
      orange: "#B88E2F",
      red: "#E97171",
      green: "#2EC1AC",
    },
    fontFamily: {
      poppins: "poppins",
    },
    extend: {},
  },
  plugins: [],
};
