import { isAfter } from "date-fns";
import { toValue, type MaybeRefOrGetter } from "vue";
import { createRule } from "~/validate";

export function after(date: MaybeRefOrGetter<Date>) {
  return createRule("after", (value: Date) => {
    return isAfter(value, toValue(date));
  });
}
