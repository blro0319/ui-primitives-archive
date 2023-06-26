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
}

export interface VFormDescriptionProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
}
