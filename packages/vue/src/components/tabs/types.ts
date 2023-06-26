import type { VRovingTabindexOrientation } from "~/components";
import type { ComponentAs } from "~/types";

export interface VTabsProps {
  modelValue: string;
  /**
   * @default
   * ```ts
   * "horizontal"
   * ```
   */
  orientation?: VTabsOrientation;
  /**
   * @default
   * ```ts
   * "automatic"
   * ```
   */
  activationMode?: VTabsActivationMode;
}
export interface VTabsEmits {
  (e: "update:modelValue", value: string): void;
}

export interface VTabsListProps {
  /**
   * @default
   * ```ts
   * div
   * ```
   */
  as?: ComponentAs;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  loop?: boolean;
}

export interface VTabsTriggerProps {
  /**
   * @default
   * ```ts
   * "button"
   * ```
   */
  as?: ComponentAs;
  value: string;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
}

export interface VTabsPanelProps {
  as?: ComponentAs;
  value: string;
}

export type VTabsOrientation = VRovingTabindexOrientation;
export type VTabsActivationMode = "automatic" | "manual";
