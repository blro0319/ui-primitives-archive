import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "node:path";
import { transformLazyShow } from "v-lazy-show";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          nodeTransforms: [transformLazyShow],
        },
      },
    }),
    vueJsx(),
  ],
  build: {
    outDir: "./dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "primitives-vue",
      fileName: (format) => `primitives-vue.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: { globals: { vue: "Vue" } },
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src/"),
      "#playground": path.resolve(__dirname, "playground/"),
    },
  },
});
