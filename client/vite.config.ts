import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import scssDts from "vite-plugin-sass-dts";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), scssDts({ enabledMode: [mode] })],
  envPrefix: "GLASS_MARK",

  server: {
    proxy: {
      "/api": "http://151.248.118.164",
      // "/api":{
      //   target: "http://localhost:5000",
      //   rewrite(path) {
      //     const data = path.replace("/api", "");
      //     return data;
      //   },
      // },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "./src/styles/variables.scss" as *;
        @use "./src/styles/mixins.scss" as *;
      `,
      },
    },
  },
}));
