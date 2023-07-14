import type { Rule, ValidityMessages } from "~/validate";

export interface VSwitchProps<Rules extends Rule<string, boolean>[]> {
  modelValue: any;
  /**
   * @default
   * ```ts
   * true
   * ```
   */
  trueValue?: any;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  falseValue?: any;
  /**
   * @default
   * ```ts
   * []
   * ```
   */
  rules?: Rules;
  /**
   * @default
   * ```ts
   * {}
   * ```
   */
  validityMessages?: ValidityMessages<Rules>;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
}

export interface VSwitchEmits {
  (e: "update:modelValue", value: any): void;
}
