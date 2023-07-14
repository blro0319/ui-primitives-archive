import type { FieldLike, FieldValidateResult, Rule } from "~/validate";

export interface FormValidateResult {
  valid: boolean;
  fieldsResults: FieldValidateResult<Rule[]>[];
  invalidFields: FieldLike[];
  invalidIndexes: number[];
}
