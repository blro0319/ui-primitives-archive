import { computed, toValue, type MaybeRefOrGetter } from "vue";
import { createRule } from "~/validate";

export function minLength(minLength: MaybeRefOrGetter<number>) {
  return createRule(
    "minLength",
    (value: ArrayLike<unknown>) => {
      return value.length >= toValue(minLength);
    },
    { minLength: computed(() => toValue(minLength)) }
  );
}
