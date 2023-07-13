import type { Rule } from "~/validate";

export interface VSwitchProps<RuleName extends string> {
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
  rules?: Rule<RuleName, boolean>[];
  /**
   * @default
   * ```ts
   * {}
   * ```
   */
  validityMessages?: Partial<Record<RuleName, string>>;
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
