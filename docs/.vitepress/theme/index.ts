import DefaultTheme from "vitepress/theme";
import VComponentPreview from "../components/VComponentPreview.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("VComponentPreview", VComponentPreview);
  },
};
