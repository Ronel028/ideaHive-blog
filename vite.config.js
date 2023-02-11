import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/user/register": "http://localhost:3000",
      "/user/signin": "http://localhost:3000",
      "/user/verified": "http://localhost:3000",
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
