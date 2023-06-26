import { addComponent, defineNuxtModule } from "@nuxt/kit";
import { COMPONENTS } from "@blro/ui-primitives-vue";

export interface Options {
  /**
   * @default
   * ```ts
   * true
   * ```
   */
  components?: boolean;
}

export default defineNuxtModule<Options>({
  meta: {
    name: "@blro/ui-primitives-nuxt",
    configKey: "uiPrimitives",
  },
  defaults: {
    components: true,
  },
  setup() {
    COMPONENTS.forEach((name) => {
      addComponent({
        name: name,
        filePath: "@blro/ui-primitives-vue",
        export: name,
      });
    });
  },
});
