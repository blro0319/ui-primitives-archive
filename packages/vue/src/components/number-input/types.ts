import type { Rule } from "~/validate";

export interface VNumberInputProps<RuleName extends string> {
  modelValue: number;
  defaultValue?: number;
  rules?: Rule<RuleName, number>[];
  validityMessages?: Partial<Record<RuleName, string>>;
  min?: number;
  max?: number;
  /**
   * @default
   * ```ts
   * 0.001
   * ```
   */
  step?: number;
  controlStep?: number;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
}
export interface VNumberInputEmits {
  (e: "update:modelValue", value: number): void;
}
