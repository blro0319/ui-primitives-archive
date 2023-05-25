import type { ComponentAs, MaybeString } from "~/types";

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
   * false
   * ```
   */
  asChild?: boolean;
  /**
   * @default
   * ```ts
   * 3
   * ```
   */
  level?: MaybeString<1 | 2 | 3 | 4 | 5 | 6>;
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
}
