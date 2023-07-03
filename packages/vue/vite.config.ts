import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { camelCase } from "lodash-es";
import path from "node:path";
import { transformLazyShow } from "v-lazy-show";
import { defineConfig } from "vite";
import { dependencies, peerDependencies } from "./package.json";

const external = [
  ...Object.keys(dependencies),
  ...Object.keys(peerDependencies),
];

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
      fileName(format) {
        if (format === "es") return "primitives-vue.mjs";
        return "primitives-vue.cjs";
      },
    },
    rollupOptions: {
      external: external,
      output: {
        globals: external.reduce(
          (acc, name) => ({ ...acc, [name]: camelCase(name) }),
          {} as Record<string, string>
        ),
      },
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src/"),
      "#playground": path.resolve(__dirname, "playground/"),
    },
  },
});
