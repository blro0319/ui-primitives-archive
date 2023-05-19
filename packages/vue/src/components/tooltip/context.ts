import { type MaybeRefOrGetter, toValue } from "@vueuse/core";
import { type ComponentPublicInstance, computed, onMounted, ref } from "vue";
import { createContext, randomStr } from "~/utils";

const { setContext, useContext } = createContext(
  "<VTooltip>",
  (options: VTooltipContextOptions) => {
    const { enterDelay, leaveDelay } = options;

    const id = ref("");
    onMounted(() => {
      id.value = "v-tooltip-" + randomStr(6);
    });

    const visible = ref(false);
    const trigger = ref<HTMLElement | ComponentPublicInstance>();

    return {
      id,
      visible,
      trigger,
      enterDelay: computed(() => toValue(enterDelay) || 0),
      leaveDelay: computed(() => toValue(leaveDelay) || 0),
    };
  }
);

export const setVTooltipContext = setContext;
export const useVTooltipContext = useContext;

interface VTooltipContextOptions {
  enterDelay?: MaybeRefOrGetter<number>;
  leaveDelay?: MaybeRefOrGetter<number>;
}