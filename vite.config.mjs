import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import vue from "@vitejs/plugin-vue";

import copy from "./rollup/copy.mjs";
import archive from "./rollup/archive.mjs";

export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:8080",
    },
  },

  build: {
    outDir: "static",
    sourcemap: true,
    manifest: "manifest.json",
    emptyOutDir: true,
  },

  plugins: [
    eslint(),
    vue(),
    copy({
      assets: [["public/favicon.ico", "favicon.ico"]],
    }),
    archive(),
  ],
});
