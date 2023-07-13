import type { MaybeRefOrGetter, Ref } from "vue";
import type { VRovingTabindexOrientation } from "~/components";
import type { ComponentAs } from "~/types";

export type VTabsOrientation = VRovingTabindexOrientation;
export type VTabsActivationMode = "automatic" | "manual";

export interface SetVTabsContextOptions {
  modelValue: Ref<string>;
  orientation: MaybeRefOrGetter<VTabsOrientation>;
  activationMode: MaybeRefOrGetter<VTabsActivationMode>;
}

// ---------- Root ---------- //

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

// ---------- List ---------- //

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

// ---------- Trigger ---------- //

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

// ---------- Panel ---------- //

export interface VTabsPanelProps {
  as?: ComponentAs;
  value: string;
}
