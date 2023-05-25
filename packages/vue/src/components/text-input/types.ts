import type { Rule } from "~/validate";

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
}
export interface VTextInputEmits {
  (e: "update:modelValue", value: string): void;
}
