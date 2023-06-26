import type { TransitionProps } from "vue";
import type { ComponentAs } from "~/types";

export interface VDialogProps {
  transition?: TransitionProps;
  cancelTrigger?: "all" | "escape" | "history";
}
export interface VDialogEmits {
  (e: "show"): void;
  (e: "after-show"): void;
  (e: "close"): void;
  (e: "after-close"): void;
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
