import {
  type ComponentPublicInstance,
  computed,
  type MaybeRefOrGetter,
  nextTick,
  onMounted,
  onUpdated,
  ref,
  type Ref,
  toValue,
} from "vue";
import { unrefElement } from "@vueuse/core";
import { useId } from "~/composables";
import type { VBindAttributes } from "~/types";
import { createContext } from "~/utils";
import type { Rule } from "~/validate";

const { setContext, useContext } = createContext(
  "<VCheckboxGroup>",
  (options: SetVCheckboxGroupContextOptions) => {
    const { value } = options;
    const defaultValue = computed(() => toValue(options.defaultValue));
    const rules = computed(() => toValue(options.rules));
    const validityMessages = computed(() => toValue(options.validityMessages));
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

interface SetVCheckboxGroupContextOptions {
  value: Ref<any[] | Set<any>>;
  defaultValue?: MaybeRefOrGetter<any[] | Set<any>>;
  rules?: MaybeRefOrGetter<Rule<string, any[] | Set<any>>[]>;
  validityMessages?: MaybeRefOrGetter<Partial<Record<string, string>>>;
}
