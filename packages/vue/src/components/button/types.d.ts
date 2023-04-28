import type { ButtonHTMLAttributes } from "vue";

export interface VButtonProps {
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
