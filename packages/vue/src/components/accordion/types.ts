import type { ComponentAs } from "~/types";

export interface VAccordionProps {
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
   * "single"
   * ```
   */
  expandMode?: VAccordionExpandMode;
}

export type VAccordionExpandMode = "single" | "multiple";

// ----- Item ----- //

export interface VAccordionItemProps {
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  open?: boolean;
}

// ----- Header ----- //

export interface VAccordionHeaderProps {
  /**
   * @default
   * ```ts
   * "h3"
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

// ----- Trigger ----- //

export interface VAccordionTriggerProps {
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

// ----- Panel ----- //

export interface VAccordionPanelProps {
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
