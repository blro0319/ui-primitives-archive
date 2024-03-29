import { isBefore } from "date-fns";
import { computed, toValue, type MaybeRefOrGetter } from "vue";
import { createRule } from "~/validate";

export function before(date: MaybeRefOrGetter<Date>) {
  return createRule(
    "before",
    (value: Date) => {
      return isBefore(value, toValue(date));
    },
    { date: computed(() => toValue(date)) }
  );
}
