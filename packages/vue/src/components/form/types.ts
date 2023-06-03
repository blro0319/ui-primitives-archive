import type { ComponentAs } from "~/types";

export interface VFormEmits {
  (e: "submit"): void;
  (e: "invalid"): void;
}

export interface VFormTitleProps {
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
}

export interface VFormDescriptionProps {
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
}
