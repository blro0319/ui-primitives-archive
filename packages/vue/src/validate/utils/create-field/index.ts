import { computed, type MaybeRefOrGetter, toValue } from "vue";
import type { Rule } from "~/validate";
import type { FieldValidateResult, FieldValidityState } from "./types";

export * from "./types";

export function createField<RuleName extends string, Value>(
  value: MaybeRefOrGetter<Value>,
  rules: MaybeRefOrGetter<Rule<RuleName, Value>[]>
) {
  const $value = computed(() => toValue(value));
  const $rules = computed(() => toValue(rules));

  const isRequired = computed(() => {
    return $rules.value.some((rule) => rule.name === "required");
  });

  async function validate(): Promise<FieldValidateResult<RuleName>> {
    const validityState = getDefaultValidityState();
    const invalidRules: RuleName[] = [];

    const promises = $rules.value.map(async (rule) => {
      const result = await rule.validator($value.value);
      validityState[rule.name] = result;
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
    return result as FieldValidityState<RuleName>;
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
