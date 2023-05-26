import deflist from "markdown-it-deflist";
import { defineConfig } from "vitepress";
import en from "./en";
import ko from "./ko";

export default defineConfig({
  title: "UI Primitives",
  description: "Headless Vue Components",
  locales: {
    root: en,
    ko,
  },
  markdown: {
    config(md) {
      md.use(deflist);
    },
  },
});
