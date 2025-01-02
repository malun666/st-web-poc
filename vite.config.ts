import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "app",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app/src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "mui-vendor": ["@mui/joy", "@mui/icons-material"],
          "chart-vendor": ["recharts"],
          "redux-vendor": ["@reduxjs/toolkit", "react-redux"],
        },
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
