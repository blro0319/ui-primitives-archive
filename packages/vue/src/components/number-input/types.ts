import type { Rule } from "~/validate";

export interface VNumberInputProps<RuleName extends string> {
  modelValue: number;
  defaultValue?: number;
  rules?: Rule<RuleName, number>[];
  validityMessages?: Partial<Record<RuleName, string>>;
  /**
   * @default
   * ```ts
   * Number.MIN_SAFE_INTEGER
   * // -9,007,199,254,740,991
   * ```
   */
  min?: number;
  /**
   * @default
   * ```ts
   * Number.MAX_SAFE_INTEGER
   * // 9,007,199,254,740,991
   * ```
   */
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
