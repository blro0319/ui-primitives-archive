import type { ComponentAs } from "~/types";

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
   * false
   * ```
   */
  asChild?: boolean;
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
  old: HTMLElement | undefined;
}

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
  asChild?: boolean;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
}

export type VRovingTabindexOrientation = "horizontal" | "vertical";