import type { MaybeRefOrGetter } from "vue";
import type { ComponentAs } from "~/types";

export interface VTooltipContextOptions {
  enterDelay?: MaybeRefOrGetter<number>;
  leaveDelay?: MaybeRefOrGetter<number>;
}

// ---------- Root ---------- //

export interface VTooltipProps {
  enterDelay?: number;
  leaveDelay?: number;
}
export interface VTooltipEmits {
  (e: "show"): void;
  (e: "hide"): void;
}

// ---------- Trigger ---------- //

export interface VTooltipTriggerProps {
  /**
   * @default
   * ```ts
   * "button"
   * ```
   */
  as?: ComponentAs;
}

// ---------- Content ---------- //

export interface VTooltipContentProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
}
