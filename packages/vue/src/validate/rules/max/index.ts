import { toValue, type MaybeRefOrGetter } from "vue";
import { createRule } from "~/validate";

export function max(max: MaybeRefOrGetter<number>) {
  return createRule("max", (value: number) => value <= toValue(max));
}
