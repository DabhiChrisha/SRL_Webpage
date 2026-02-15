/** @type {import('tailwindcss').Config} */
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

      /* 🔄 Animations for Preloader */
      animation: {
        spinSlow: "spinSlow 2s linear infinite",
        pulseSoft: "pulseSoft 1.5s ease-in-out infinite",
        loadingBar: "loadingBar 2s linear infinite",
        fadeOut: "fadeOut 0.8s ease forwards",
      },

      keyframes: {
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        loadingBar: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
