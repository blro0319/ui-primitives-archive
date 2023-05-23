import type { VRovingTabindexOrientation } from "~/components";
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
  asChild?: boolean;
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
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  asChild?: boolean;
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
