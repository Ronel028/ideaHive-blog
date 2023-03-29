import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createProxyMiddleware } from "http-proxy-middleware";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   middleware: [
  //     createProxyMiddleware("/user/*", {
  //       target: "https://api-ideahive.onrender.com",
  //     }),
  //     createProxyMiddleware("/blog/*", {
  //       target: "https://api-ideahive.onrender.com",
  //     }),
  //   ],
  // },
  server: {
    proxy: {
      "/user/user": "https://idea-h-ive-blog.vercel.app",
      "^/blog/.*": {
        target: "https://idea-h-ive-blog.vercel.app",
        rewrite: (path) => path.replace(/^\/blog/, "/blog/blog"),
      },
    },
  },
  // server: {
  //   proxy: {
  //     "/user/register": "https://api-ideahive.onrender.com/",
  //     "/user/signin": "https://api-ideahive.onrender.com/",
  //     "/user/signout": "https://api-ideahive.onrender.com/",
  //     "/user/verified": "https://api-ideahive.onrender.com",
  //     "/user/info": "https://api-ideahive.onrender.com",
  //     "/user/update": "https://api-ideahive.onrender.com/",
  //     "/user/update-password": "https://api-ideahive.onrender.com/",
  //     "/blog/add-blog": "https://api-ideahive.onrender.com/",
  //     "/blog/get-blog": "https://api-ideahive.onrender.com",
  //     "/blog/user-blog": "https://api-ideahive.onrender.com/",
  //     "/blog/blog-content": "https://api-ideahive.onrender.com/",
  //     "/blog/delete-blog": "https://api-ideahive.onrender.com/",
  //     "/blog/update-blog": "https://api-ideahive.onrender.com/",
  //   },
  //},
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  plugins: [react()],
});
