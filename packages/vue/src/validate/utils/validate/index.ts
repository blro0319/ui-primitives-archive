import {
  type FieldValidateResult,
  getDefaultValidityState,
  type Rule,
  type RulesName,
} from "~/validate";

export async function validate<Value, Rules extends Rule<string, Value>[]>(
  value: Value,
  rules: Rules
): Promise<FieldValidateResult<Rules>> {
  const validityState = getDefaultValidityState(rules);
  const invalidRules: RulesName<Rules>[] = [];

  const promises = rules.map(async (rule) => {
    const result = await rule.validator(value);
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
