import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // base: mode === "production" ? "/karthi_portfolio/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "static/[name]-[hash][extname]",   // CSS, images, fonts
        chunkFileNames: "static/[name]-[hash].js",         // dynamic imports
        entryFileNames: "static/[name]-[hash].js",         // main JS
      },
    },
  },
}));
