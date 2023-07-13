import type { MaybeRefOrGetter } from "vue";
import type { ComponentAs } from "~/types";

// ---------- Root ---------- //

export interface VRovingTabindexProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
  /**
   * @default
   * ```ts
   * "horizontal"
   * ```
   */
  orientation?: VRovingTabindexOrientation;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  loop?: boolean;
}
export interface VRovingTabindexEmits {
  (e: "change", event: VRovingTabindexChangeEvent): void;
}

export interface VRovingTabindexChangeEvent {
  target: HTMLElement;
  old?: HTMLElement;
}

export interface SetVRovingTabindexContextOptions {
  orientation?: MaybeRefOrGetter<VRovingTabindexOrientation>;
  loop?: MaybeRefOrGetter<boolean>;
}

// ---------- Item ---------- //

export interface VRovingTabindexItemProps {
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
  disabled?: boolean;
}

export type VRovingTabindexOrientation = "horizontal" | "vertical";
