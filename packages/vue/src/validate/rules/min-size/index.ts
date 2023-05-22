import { toValue, type MaybeRefOrGetter } from "vue";
import { createRule } from "~/validate";

export function minSize(minSize: MaybeRefOrGetter<number>) {
  return createRule("minSize", (value: { size: number }) => {
    return value.size >= toValue(minSize);
  });
}
