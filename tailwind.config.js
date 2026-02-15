/** type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#0f4c45",
        deepgreen: "#0b3d3a",
        beige: "#f6f1e9",
        gold: "#c9a24d",
      },
      keyframes: {
        scrollUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "scroll-up": "scrollUp 20s linear infinite",
      },
    },
  },
  plugins: [],
};
