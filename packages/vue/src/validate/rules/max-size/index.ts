import { toValue, type MaybeRefOrGetter } from "vue";
import { createRule } from "~/validate";

export function maxSize(maxSize: MaybeRefOrGetter<number>) {
  return createRule("maxSize", (value: { size: number }) => {
    return value.size <= toValue(maxSize);
  });
}
