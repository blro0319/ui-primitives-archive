import {
  computed,
  type MaybeRefOrGetter,
  ref,
  type Ref,
  onMounted,
  toValue,
} from "vue";
import { createContext, randomStr } from "~/utils";
import type { VTabsActivationMode, VTabsOrientation } from "./types";

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

interface SetVTabsContextOptions {
  modelValue: Ref<string>;
  orientation: MaybeRefOrGetter<VTabsOrientation>;
  activationMode: MaybeRefOrGetter<VTabsActivationMode>;
}
