import type { TransitionProps } from "vue";
import type { VCustomEvent } from "~/utils";

export interface VDialogProps {
  transition?: TransitionProps;
}
export interface VDialogEmits {
  (e: "show"): void;
  (e: "after-show"): void;
  (e: "close"): void;
  (e: "after-close"): void;
  (e: "cancel", event: VCustomEvent): void;
}

export interface VDialogContext {
  close(): void;
  cancel(): Promise<void>;
}
