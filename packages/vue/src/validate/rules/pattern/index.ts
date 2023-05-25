import { type MaybeRefOrGetter, toValue } from "vue";
import { createRule } from "~/validate";

export function pattern(pattern: MaybeRefOrGetter<RegExp | string>) {
  return createRule("pattern", (value: string) => {
    return new RegExp(toValue(pattern)).test(value);
  });
}
