import { splitVendorChunkPlugin } from "vite";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    brotliSize: false,
    sourcemap: true,
  },
  server: {
    middlewareMode: true,
    fs: {
      strict: true,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
});
