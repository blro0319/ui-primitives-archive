import { isEqual as lodashIsEqual } from "lodash-es";
import { computed, toValue, type MaybeRefOrGetter } from "vue";
import { createRule } from "~/validate";

export function isEqual(value: MaybeRefOrGetter<any>) {
  return createRule(
    "isEqual",
    (target: any) => {
      return lodashIsEqual(target, toValue(value));
    },
    { equalTo: computed(() => toValue(value)) }
  );
}
