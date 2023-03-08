import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/user/register": "http://localhost:3000",
      "/user/signin": "http://localhost:3000",
      "/user/signout": "http://localhost:3000",
      "/user/verified": "http://localhost:3000",
      "/user/info": "http://localhost:3000",
      "/user/update": "http://localhost:3000",
      "/user/update-password": "http://localhost:3000",
      "/blog/add-blog": "http://localhost:3000",
      "/blog/get-blog": "http://localhost:3000",
      "/blog/user-blog": "http://localhost:3000",
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
