import type { Ref } from "vue";
import type { VRadioValue } from "~/components";
import type { ComponentAs } from "~/types";

export interface VRadioGroupProps {
  /**
   * @default
   * ```ts
   * "fieldset"
   * ```
   */
  as?: ComponentAs;
  modelValue: VRadioValue;
}
export interface VRadioGroupEmits {
  (e: "update:modelValue", value: VRadioValue): boolean;
}

export interface SetVRadioGroupContextOptions {
  value: Ref<VRadioValue>;
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
