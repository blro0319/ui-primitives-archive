export interface VSwitchProps {
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
   * false
   * ```
   */
  disabled?: boolean;
}

export interface VSwitchEmits {
  (e: "update:modelValue", value: any): void;
}
