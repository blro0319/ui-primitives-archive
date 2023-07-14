import { computed, toValue, type MaybeRefOrGetter } from "vue";
import { createRule } from "~/validate";

export function min(min: MaybeRefOrGetter<number>) {
  return createRule(
    "min",
    (value: number) => {
      return value >= toValue(min);
    },
    { min: computed(() => toValue(min)) }
  );
}
