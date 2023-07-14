import type {
  Rule,
  UseFieldValidateResult,
  ValidityMessages,
} from "~/validate";

export interface VNumberInputProps<Rules extends Rule<string, number>[]> {
  modelValue: number;
  defaultValue?: number;
  rules?: Rules;
  validityMessages?: ValidityMessages<Rules>;
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
export interface VNumberInputEmits<Rules extends Rule<string, number>[]> {
  (e: "update:modelValue", value: number): void;
  (e: "valid", event: UseFieldValidateResult<Rules>): void;
  (e: "invalid", event: UseFieldValidateResult<Rules>): void;
}
