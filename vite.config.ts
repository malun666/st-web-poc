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
  server: {
    port: 3000,
    host: true,
  },
});
