import type { Rule, UseFieldValidateResult } from "~/validate";

export interface VTextInputProps<RuleName extends string> {
  modelValue: string;
  defaultValue?: string;
  rules?: Rule<RuleName, string>[];
  validityMessages?: Partial<Record<RuleName, string>>;
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
export interface VTextInputEmits<RuleName extends string> {
  (e: "update:modelValue", value: string): void;
  (e: "invalid", event: UseFieldValidateResult<RuleName>): void;
  (e: "valid", event: UseFieldValidateResult<RuleName>): void;
}
