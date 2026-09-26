import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/src/figma/Desktop.tsx")) return "figma-desktop";
          if (id.includes("/src/figma/Mobile.tsx")) return "figma-mobile";
          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) return "react-vendor";
          if (id.includes("/node_modules/motion/")) return "motion-vendor";
        },
      },
    },
  },
});
