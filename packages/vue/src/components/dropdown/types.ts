import type { ComponentAs } from "~/types";

export interface VDropdownEmits {
  (e: "show-menu"): void;
  (e: "hide-menu"): void;
}

export interface VDropdownTriggerProps {
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
}

export interface VDropdownMenuProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
}

export interface VDropdownItemProps {
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
}
