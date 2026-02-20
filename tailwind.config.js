export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ["Libre Baskerville", "serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        forest: "#0f4c45",
        deepgreen: "#0b3d3a",
        beige: "#f6f1e9",
        gold: "#c9a24d"
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        float1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(10px, 20px)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-15px, -25px)" },
        },
      },
      animation: {
        pulseSlow: "pulseSlow 6s ease-in-out infinite",
        float1: "float1 10s ease-in-out infinite",
        float2: "float2 14s ease-in-out infinite",
      },
    }
  },
  plugins: []
};
