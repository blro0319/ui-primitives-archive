import {
  type ComponentPublicInstance,
  computed,
  nextTick,
  onMounted,
  onUpdated,
  ref,
  toValue,
} from "vue";
import { unrefElement } from "@vueuse/core";
import { useId } from "~/composables";
import type { VBindAttributes } from "~/types";
import { createContext } from "~/utils";
import type { SetVCheckboxGroupContextOptions } from "./types";

const { setContext, useContext } = createContext(
  "<VCheckboxGroup>",
  (options: SetVCheckboxGroupContextOptions) => {
    const { value } = options;
    const defaultValue = computed(() => toValue(options.defaultValue));
    const rules = computed(() => toValue(options.rules));
    const validityMessages = computed(() => toValue(options.validityMessages));
    const maxLength = computed(() => toValue(options.maxLength));

    const reportedErrors = ref<string[]>([]);
    const id = useId();

    // ----- Root ----- //

    const root = ref<ComponentPublicInstance | HTMLElement>();
    const rootElement = computed(() => unrefElement(root.value));

    const rootBind = computed(() => {
      return { ref: root } satisfies VBindAttributes<"fieldset">;
    });

    function focus(options?: FocusOptions) {
      const itemsArray = Array.from(items.value);
      itemsArray.at(0)?.focus(options);
    }

    // ----- Items ----- //

    const items = ref(new Set<HTMLInputElement>());

    onMounted(() => {
      nextTick(updateItems);
    });
    onUpdated(() => {
      nextTick(updateItems);
    });

    function updateItems() {
      if (!rootElement.value) return;
      const selector = `[data-v-checkbox="${id.value}"]`;
      const children = rootElement.value.querySelectorAll(selector);
      items.value = new Set(Array.from(children) as HTMLInputElement[]);
    }

    return {
      value,
      defaultValue,
      rules,
      validityMessages,
      maxLength,
      reportedErrors,
      id,
      // Root
      root,
      rootElement,
      rootBind,
      focus,
      // Items
      items,
    };
  },
  null
);

export const setVCheckboxGroupContext = setContext;
export const useVCheckboxGroupContext = useContext;
