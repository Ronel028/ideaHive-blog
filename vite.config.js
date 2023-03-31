import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   manifest: true,
  //   rollupOptions: {
  //     input: "/src/main.jsx",
  //   },
  // },
  server: {
    proxy: {
      "/user": "http://localhost:3000",
      "/blog": "http://localhost:3000",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  plugins: [react()],
});
