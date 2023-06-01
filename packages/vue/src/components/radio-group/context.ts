import { unrefElement } from "@vueuse/core";
import {
  type ComponentPublicInstance,
  computed,
  nextTick,
  onMounted,
  onUpdated,
  ref,
  type Ref,
} from "vue";
import { useId } from "~/composables";
import type { VBindAttributes } from "~/types";
import { createContext } from "~/utils";

const { setContext, useContext } = createContext(
  "<VRadioGroup>",
  (options: SetVRadioGroupContextOptions) => {
    const { value } = options;
    const id = useId();

    // ----- Root ----- //

    const root = ref<ComponentPublicInstance | HTMLElement>();
    const rootElement = computed(() => unrefElement(root.value));

    const rootBind = computed(() => {
      return {
        ref: root,
        role: "radiogroup",
      } satisfies VBindAttributes;
    });

    function focus(options?: FocusOptions) {
      const itemsArray = Array.from(items.value);
      const checkedItem = itemsArray.find((item) => item.checked);

      (checkedItem ?? itemsArray.at(0))?.focus(options);
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
      const selector = `[data-v-radio="${id.value}"]`;
      const children = rootElement.value.querySelectorAll(selector);
      items.value = new Set(Array.from(children) as HTMLInputElement[]);
    }

    return {
      value,
      id,
      // Root
      root,
      rootElement,
      rootBind,
      focus,
      // Items
      items,
      updateItems,
    };
  },
  null
);

export const setVRadioGroupContext = setContext;
export const useVRadioGroupContext = useContext;

interface SetVRadioGroupContextOptions {
  value: Ref<string>;
}
