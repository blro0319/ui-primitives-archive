import type { FieldLike, FieldValidateResult } from "~/validate";

export interface FormValidateResult {
  valid: boolean;
  fieldsResults: FieldValidateResult<string>[];
  invalidFields: FieldLike[];
  invalidIndexes: number[];
}
