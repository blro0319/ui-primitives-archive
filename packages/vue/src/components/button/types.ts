import type { RouteLocationRaw } from "vue-router";

export interface VButtonProps {
  href?: string;
  to?: RouteLocationRaw;
  /**
   * @default
   * ```ts
   * // When `href` is set
   * "_blank"
   *
   * // When `to` is set
   * "_self"
   * ```
   */
  target?: string;
  /**
   * @default
   * ```ts
   * "button"
   * ```
   */
  type?: "submit" | "reset" | "button";
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
}
