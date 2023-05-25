import { computed, type MaybeRefOrGetter, toValue } from "vue";
import { createContext } from "~/utils";

const { setContext, useContext } = createContext(
  "<VFieldset>",
  (options?: VFieldsetContextOptions) => {
    const disabled = computed(() => toValue(options?.disabled) ?? false);
    return { disabled };
  }
);

export const setVFieldsetContext = setContext;
export const useVFieldsetContext = useContext;

export interface VFieldsetContextOptions {
  disabled?: MaybeRefOrGetter<boolean>;
}
