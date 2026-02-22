import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("firebase")) {
            return "firebase";
          }
          if (id.includes("framer-motion")) {
            return "motion";
          }
          if (id.includes("gsap")) {
            return "gsap";
          }
          if (id.includes("cobe")) {
            return "cobe";
          }
          if (id.includes("@tsparticles") || id.includes("tsparticles")) {
            return "particles";
          }
          if (id.includes("supabase")) {
            return "supabase";
          }
          if (
            id.includes("react") ||
            id.includes("react-dom") ||
            id.includes("react-router-dom")
          ) {
            return "react-vendor";
          }
          if (id.includes("lucide-react")) {
            return "icons";
          }
          return "vendor";
        },
      },
    },
  },
});

