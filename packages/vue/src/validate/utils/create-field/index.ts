import { computed, type MaybeRefOrGetter, toValue } from "vue";
import type { Rule, RulesName } from "~/validate";
import type { FieldValidateResult, FieldValidityState } from "./types";

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

  async function validate(): Promise<FieldValidateResult<Rules>> {
    const validityState = getDefaultValidityState();
    const invalidRules: RulesName<Rules>[] = [];

    const promises = $rules.value.map(async (rule) => {
      const result = await rule.validator($value.value);
      validityState[rule.name as RulesName<Rules>] = result;
      if (!result) invalidRules.push(rule.name);
    });
    await Promise.all(promises);

    validityState.valid = invalidRules.length === 0;

    return {
      valid: validityState.valid,
      state: validityState,
      invalidRules,
    };
  }
  async function $validate() {
    return (await validate()).valid;
  }

  function getDefaultValidityState() {
    const result: Record<string, boolean> = { valid: true };
    for (const rule of toValue(rules)) result[rule.name] = false;
    return result as FieldValidityState<Rules>;
  }

  return {
    value: $value,
    rules: $rules,
    isRequired,
    validate,
    $validate,
    getDefaultValidityState,
  };
}
