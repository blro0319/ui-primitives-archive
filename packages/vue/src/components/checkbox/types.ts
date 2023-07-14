import type { Rule, ValidityMessages } from "~/validate";

export interface VCheckboxProps<Rules extends Rule[]> {
  modelValue?: any;
  value?: any;
  trueValue?: any;
  falseValue?: any;
  rules?: Rules;
  validityMessages?: ValidityMessages<Rules>;
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
