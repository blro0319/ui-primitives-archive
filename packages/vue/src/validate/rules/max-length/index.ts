import { computed, toValue, type MaybeRefOrGetter } from "vue";
import { createRule } from "~/validate";

export function maxLength(maxLength: MaybeRefOrGetter<number>) {
  return createRule(
    "maxLength",
    (value: ArrayLike<unknown>) => {
      return value.length <= toValue(maxLength);
    },
    { maxLength: computed(() => toValue(maxLength)) }
  );
}
