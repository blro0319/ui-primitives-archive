import type { ComponentAs } from "~/types";

export interface VTabsProps {
  modelValue: string;
  as?: ComponentAs;
  orientation?: VTabsOrientation;
  activationMode?: VTabsActivationMode;
}
export interface VTabsEmits {
  (e: "update:modelValue", value: string): void;
}

export interface VTabsTriggerProps {
  as?: ComponentAs;
  value: string;
  disabled?: boolean;
}

export interface VTabsPanelProps {
  as?: ComponentAs;
  value: string;
}

export type VTabsOrientation = "horizontal" | "vertical";
export type VTabsActivationMode = "automatic" | "manual";
