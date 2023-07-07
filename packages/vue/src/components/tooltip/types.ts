import type { ComponentAs } from "~/types";

export interface VTooltipProps {
  enterDelay?: number;
  leaveDelay?: number;
}
export interface VTooltipEmits {
  (e: "show"): void;
  (e: "hide"): void;
}

export interface VTooltipTriggerProps {
  as?: ComponentAs;
}

export interface VTooltipContentProps {
  as?: ComponentAs;
}
