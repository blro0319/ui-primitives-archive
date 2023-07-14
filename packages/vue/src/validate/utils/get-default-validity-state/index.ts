import type { FieldValidityState, Rule } from "~/validate";

export function getDefaultValidityState<Rules extends Rule[]>(rules: Rules) {
  const result: Record<string, boolean> = { valid: true };
  for (const rule of rules) result[rule.name] = false;
  return result as FieldValidityState<Rules>;
}
