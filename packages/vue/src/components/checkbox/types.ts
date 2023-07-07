import type { Rule } from "~/validate";

export interface VCheckboxProps<RuleName extends string> {
  modelValue?: any;
  value?: any;
  trueValue?: any;
  falseValue?: any;
  rules?: Rule<RuleName, any>[];
  validityMessages?: Partial<Record<RuleName, string>>;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
  maxLength?: number;
}
export interface VCheckboxEmits {
  (e: "update:modelValue", value: any): void;
}
