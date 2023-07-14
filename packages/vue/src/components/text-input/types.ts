import type {
  Rule,
  UseFieldValidateResult,
  ValidityMessages,
} from "~/validate";

export interface VTextInputProps<Rules extends Rule[] = []> {
  modelValue: string;
  defaultValue?: string;
  rules?: Rules;
  validityMessages?: ValidityMessages<Rules>;
  /**
   * @default
   * ```ts
   * "text"
   * ```
   */
  type?: string;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
  pattern?: string | RegExp;
}
export interface VTextInputEmits<Rules extends Rule[] = []> {
  (e: "update:modelValue", value: string): void;
  (e: "valid", event: UseFieldValidateResult<Rules>): void;
  (e: "invalid", event: UseFieldValidateResult<Rules>): void;
}
