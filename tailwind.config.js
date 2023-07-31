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
        blue1: "#F8FAFE",
        blue: {
          1: "#3046D9",
        },
        ash1: "#F8F8F8",
        ash: "#637381",
        ash2: "#DADCE0",
        white: "#FFFFFF",
        green: "#C8EBD8",
        darkGreen: "#16B312",
      },
    },
  },
  plugins: [],
};
