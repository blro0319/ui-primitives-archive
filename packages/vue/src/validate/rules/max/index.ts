import { computed, toValue, type MaybeRefOrGetter } from "vue";
import { createRule } from "~/validate";

export function max(max: MaybeRefOrGetter<number>) {
  return createRule(
    "max",
    (value: number) => {
      return value <= toValue(max);
    },
    { max: computed(() => toValue(max)) }
  );
}
