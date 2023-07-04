import type { ComponentAs } from "~/types";

export interface VPopoverEmits {
  (e: "show"): void;
  (e: "hide"): void;
}

export interface VPopoverTriggerProps {
  /**
   * @default
   * ```ts
   * "button"
   * ```
   */
  as?: ComponentAs;
}
