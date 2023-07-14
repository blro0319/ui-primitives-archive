export interface VRadioProps {
  modelValue?: string;
  name?: string;
  value: string;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
}
export interface VRadioEmits {
  (e: "update:modelValue", value: string): void;
}
