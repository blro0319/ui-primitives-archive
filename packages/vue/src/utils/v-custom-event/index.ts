import type { VCustomEventListener, VCustomEventOptions } from "./types";

export class VCustomEvent {
  #cancelable = false;
  get cancelable() {
    return this.#cancelable;
  }

  #defaultPrevented = false;
  get defaultPrevented() {
    return this.#defaultPrevented;
  }

  #target: EventTarget | null = null;
  get target() {
    return this.#target;
  }

  #timeStamp: number;
  get timeStamp() {
    return this.#timeStamp;
  }

  #type = "";
  get type() {
    return this.#type;
  }

  constructor(type: string, options?: VCustomEventOptions) {
    this.#cancelable = options?.cancelable || false;
    this.#target = options?.target || null;
    this.#timeStamp = performance.now();
    this.#type = type;
  }

  preventDefault() {
    if (!this.cancelable) return;
    this.#defaultPrevented = true;
  }
}

export function dispatchVCustomEvent(
  event: InstanceType<typeof VCustomEvent>,
  listeners: VCustomEventListener[]
) {
  listeners.forEach((listener) => listener(event));
  return !event.defaultPrevented;
}
export async function dispatchVCustomEventAsync(
  event: InstanceType<typeof VCustomEvent>,
  listeners: VCustomEventListener[]
) {
  await Promise.all(listeners.map((listener) => listener(event)));
  return !event.defaultPrevented;
}
