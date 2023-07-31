/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue1: "#5570F1",

        ash1: "#8B8D97",
        ash: "#A6A8B1",
        ash2: "#A6A8B1",
        white: "#FFFFFF",

        black: "#1C1D22",
      },
    },
  },
  plugins: [],
};
