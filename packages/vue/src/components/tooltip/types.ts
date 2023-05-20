export interface VTooltipProps {
  enterDelay?: number;
  leaveDelay?: number;
}
export interface VTooltipEmits {
  (e: "show"): void;
  (e: "hide"): void;
}
