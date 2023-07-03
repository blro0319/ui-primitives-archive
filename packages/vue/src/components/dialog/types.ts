import type { ComponentAs } from "~/types";

export interface VDialogProps {
  cancelTrigger?: "all" | "escape" | "history";
}
export interface VDialogEmits {
  (e: "show"): void;
  (e: "close"): void;
  (e: "cancel", event: Event): void;
}

export interface VDialogTitleProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
}

export interface VDialogDescriptionProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
}

export interface VDialogContext {
  close(): void;
  cancel(): void;
}
