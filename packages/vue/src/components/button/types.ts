import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "vue";
import type { RouteLocationRaw } from "vue-router";

export interface VButtonProps {
  href?: AnchorHTMLAttributes["href"];
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
  target?: AnchorHTMLAttributes["target"];
  /**
   * @default
   * ```ts
   * "button"
   * ```
   */
  type?: ButtonHTMLAttributes["type"];
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
}
