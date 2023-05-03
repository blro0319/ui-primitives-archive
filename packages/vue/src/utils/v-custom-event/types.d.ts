import type { VCustomEvent } from ".";

export interface VCustomEventOptions {
  cancelable?: VCustomEvent["cancelable"];
  target?: VCustomEvent["target"];
}

export type VCustomEventListener = (event: VCustomEvent) => void;
