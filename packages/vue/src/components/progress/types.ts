import type { ComponentAs } from "~/types";

export interface VProgressProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
  value: number;
  /**
   * @default
   * ```ts
   * 0
   * ```
   */
  min?: number;
  /**
   * @default
   * ```ts
   * 1
   * ```
   */
  max?: number;
}
