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
}

export interface VDropdownMenuProps {
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
  loop?: boolean;
}

export interface VDropdownItemProps {
  /**
   * @default
   * ```ts
   * "button"
   * ```
   */
  as?: ComponentAs;
}
