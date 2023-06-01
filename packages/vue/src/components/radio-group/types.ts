import type { ComponentAs } from "~/types";

export interface VRadioGroupProps {
  /**
   * @default
   * ```ts
   * "fieldset"
   * ```
   */
  as?: ComponentAs;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  asChild?: boolean;
  modelValue: string;
}
export interface VRadioGroupEmits {
  (e: "update:modelValue", value: string): boolean;
}

// ----- Title ----- //

export interface VRadioGroupTitleProps {
  /**
   * @default
   * ```ts
   * "legend"
   * ```
   */
  as?: ComponentAs;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  asChild?: boolean;
}

// ----- Description ----- //

export interface VRadioGroupDescriptionProps {
  /**
   * @default
   * ```ts
   * VFieldsetDescription
   * ```
   */
  as?: ComponentAs;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  asChild?: boolean;
}
