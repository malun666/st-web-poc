import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "app",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
