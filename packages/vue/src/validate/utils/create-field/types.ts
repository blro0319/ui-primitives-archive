export interface FieldValidateResult<RuleName extends string> {
  valid: boolean;
  state: FieldValidityState<RuleName>;
  invalidRules: RuleName[];
}
export type FieldValidityState<RuleName extends string> = Record<
  "valid" | RuleName,
  boolean
>;
