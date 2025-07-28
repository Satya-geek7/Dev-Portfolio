import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: 'Dev-Portfolio',
  plugins: [react()],
  build: {
    minify: "esbuild", // fastest JS minifier
    rollupOptions: {
      treeshake: true,
    },
    cssCodeSplit: true, // split large CSS
  },
});
