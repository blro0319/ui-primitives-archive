import { computed, type MaybeRefOrGetter, toValue } from "vue";
import {
  getDefaultValidityState,
  type Rule,
  validate as _validate,
} from "~/validate";

export * from "./types";

export function createField<Value, Rules extends Rule<string, Value>[]>(
  value: MaybeRefOrGetter<Value>,
  rules: MaybeRefOrGetter<Rules>
) {
  const $value = computed(() => toValue(value));
  const $rules = computed(() => toValue(rules));

  const isRequired = computed(() => {
    return $rules.value.some((rule) => rule.name === "required");
  });

  function validate() {
    return _validate($value.value, $rules.value);
  }
  async function $validate() {
    return (await validate()).valid;
  }

  return {
    value: $value,
    rules: $rules,
    isRequired,
    validate,
    $validate,
    getDefaultValidityState: () => getDefaultValidityState($rules.value),
  };
}
