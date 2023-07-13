import type { Ref } from "vue";
import type { ComponentAs } from "~/types";

export interface VRadioGroupProps {
  /**
   * @default
   * ```ts
   * "fieldset"
   * ```
   */
  as?: ComponentAs;
  modelValue: string;
}
export interface VRadioGroupEmits {
  (e: "update:modelValue", value: string): boolean;
}

export interface SetVRadioGroupContextOptions {
  value: Ref<string>;
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
}
