import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/user/register": "https://idea-h-ive-blog.vercel.app",
      "/user/signin": "https://idea-h-ive-blog.vercel.app",
      "/user/signout": "https://idea-h-ive-blog.vercel.app",
      "/user/verified": "https://idea-h-ive-blog.vercel.app",
      "/user/info": "https://idea-h-ive-blog.vercel.app",
      "/user/update": "https://idea-h-ive-blog.vercel.app",
      "/user/update-password": "https://idea-h-ive-blog.vercel.app",
      "/blog/add-blog": "https://idea-h-ive-blog.vercel.app",
      "/blog/get-blog": {
        target: "https://idea-h-ive-blog.vercel.app",
        changeOrigin: true,
        secure: true,
        cookieDomainRewrite: {
          "*": ".ideahive.vercel.app",
        },
      },
      "/blog/user-blog": "https://idea-h-ive-blog.vercel.app",
      "/blog/blog-content": "https://idea-h-ive-blog.vercel.app",
      "/blog/delete-blog": "https://idea-h-ive-blog.vercel.app",
      "/blog/update-blog": "https://idea-h-ive-blog.vercel.app",
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
