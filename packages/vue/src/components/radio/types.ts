export interface VRadioProps {
  modelValue?: VRadioValue;
  name?: string;
  value: VRadioValue;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
}

export interface VRadioEmits {
  (e: "update:modelValue", value: VRadioValue): void;
}

export type VRadioValue = string | number | bigint | boolean | null | undefined;
