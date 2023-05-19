import {
  computed,
  type MaybeRefOrGetter,
  ref,
  type Ref,
  onMounted,
  toValue,
} from "vue";
import { createContext, randomStr } from "~/utils";
import type {
  VTabsActivationMode,
  VTabsOrientation,
  VTabsTriggerProps,
} from "./types";

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

    const triggers = ref<VTabsTriggerProps[]>([]);
    const triggerSelectMap = new Map<string, (setModel?: boolean) => void>();
    const activeValue = ref(modelValue.value);

    const panels = ref(new Set<string>());

    return {
      modelValue,
      orientation,
      activationMode,
      id,
      // Triggers
      triggers,
      triggerSelectMap,
      activeValue,
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
