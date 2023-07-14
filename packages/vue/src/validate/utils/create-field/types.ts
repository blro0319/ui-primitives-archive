import type { Rule, RulesName } from "~/validate";

export interface FieldValidateResult<Rules extends Rule[]> {
  valid: boolean;
  state: FieldValidityState<Rules>;
  invalidRules: RulesName<Rules>[];
}
export type FieldValidityState<Rules extends Rule[]> = Record<
  "valid" | RulesName<Rules>,
  boolean
>;
