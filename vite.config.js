import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/user/register": "https://api-ideahive.onrender.com/",
      "/user/signin": "https://api-ideahive.onrender.com/",
      "/user/signout": "https://api-ideahive.onrender.com/",
      "/user/verified": "https://api-ideahive.onrender.com/",
      "/user/info": "https://api-ideahive.onrender.com/",
      "/user/update": "https://api-ideahive.onrender.com/",
      "/user/update-password": "https://api-ideahive.onrender.com/",
      "/blog/add-blog": "https://api-ideahive.onrender.com/",
      "/blog/get-blog": "https://api-ideahive.onrender.com/",
      "/blog/user-blog": "https://api-ideahive.onrender.com/",
      "/blog/blog-content": "https://api-ideahive.onrender.com/",
      "/blog/delete-blog": "https://api-ideahive.onrender.com/",
      "/blog/update-blog": "https://api-ideahive.onrender.com/",
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
