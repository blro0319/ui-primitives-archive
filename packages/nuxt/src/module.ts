import { addComponent, addImports, defineNuxtModule } from "@nuxt/kit";
import {
  COMPONENTS,
  COMPOSABLES,
  RULES,
  TYPES,
  UTILS,
} from "@blro/ui-primitives-vue";

export interface ModuleOptions {
  autoImports: {
    /**
     * @default
     * ```ts
     * true
     * ```
     */
    components?: boolean;
    /**
     * @default
     * ```ts
     * true
     * ```
     */
    composables?: boolean;
    /**
     * @default
     * ```ts
     * true
     * ```
     */
    rules?: boolean;
    /**
     * @default
     * ```ts
     * true
     * ```
     */
    types?: boolean;
    /**
     * @default
     * ```ts
     * true
     * ```
     */
    utils?: boolean;
  };
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@blro/ui-primitives-nuxt",
    configKey: "uiPrimitives",
  },
  defaults: {
    autoImports: {
      components: true,
      composables: true,
      rules: true,
      types: true,
      utils: true,
    },
  },
  setup({ autoImports }) {
    if (autoImports.components) {
      COMPONENTS.forEach((name) => {
        addComponent({
          name: name,
          filePath: "@blro/ui-primitives-vue",
          export: name,
        });
      });
    }

    if (autoImports.composables) {
      addImports(
        COMPOSABLES.map((name) => ({
          name,
          as: name,
          from: "@blro/ui-primitives-vue",
        }))
      );
    }

    if (autoImports.rules) {
      addImports(
        RULES.map((name) => ({
          name,
          as: name,
          from: "@blro/ui-primitives-vue",
        }))
      );
    }

    if (autoImports.types) {
      addImports(
        TYPES.map((name) => ({
          name,
          as: name,
          from: "@blro/ui-primitives-vue",
          type: true,
        }))
      );
    }

    if (autoImports.utils) {
      addImports(
        UTILS.map((name) => ({
          name,
          as: name,
          from: "@blro/ui-primitives-vue",
        }))
      );
    }
  },
});
