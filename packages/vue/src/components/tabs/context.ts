import { computed, ref, onMounted, toValue } from "vue";
import { createContext, randomStr } from "~/utils";
import type { SetVTabsContextOptions } from "./types";

const { setContext, useContext } = createContext(
  "<VTabs>",
  (options: SetVTabsContextOptions) => {
    const { modelValue } = options;
    const orientation = computed(() => toValue(options.orientation));
    const activationMode = computed(() => toValue(options.activationMode));

    const id = ref("");
    onMounted(() => {
      id.value = `v-tabs-${randomStr()}`;
    });

    // ----- Panels ----- //

    const panels = ref(new Set<string>());

    return {
      modelValue,
      orientation,
      activationMode,
      id,
      // Panels
      panels,
    };
  }
);

export const setVTabsContext = setContext;
export const useVTabsContext = useContext;
