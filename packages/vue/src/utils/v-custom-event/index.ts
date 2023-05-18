export class VCustomEvent {
  private _cancelable = false;
  get cancelable() {
    return this._cancelable;
  }

  private _defaultPrevented = false;
  get defaultPrevented() {
    return this._defaultPrevented;
  }

  private _target: EventTarget | null = null;
  get target() {
    return this._target;
  }

  private _timeStamp: number;
  get timeStamp() {
    return this._timeStamp;
  }

  private _type = "";
  get type() {
    return this._type;
  }

  constructor(type: string, options?: VCustomEventOptions) {
    this._cancelable = options?.cancelable || false;
    this._target = options?.target || null;
    this._timeStamp = performance.now();
    this._type = type;
  }

  preventDefault() {
    if (!this.cancelable) return;
    this._defaultPrevented = true;
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

export interface VCustomEventOptions {
  cancelable?: VCustomEvent["cancelable"];
  target?: VCustomEvent["target"];
}

export type VCustomEventListener = (event: VCustomEvent) => void;
