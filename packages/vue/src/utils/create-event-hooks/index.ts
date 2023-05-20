import { tryOnBeforeUnmount } from "@vueuse/core";
import type { AnyFunction } from "~/types";

export function createEventHooks<
  Listeners extends Record<string, AnyFunction>
>() {
  const listenerMap = new Map<
    keyof Listeners,
    Set<Listeners[keyof Listeners]>
  >();

  async function trigger<T extends keyof Listeners>(
    hook: T,
    ...args: Parameters<Listeners[T]>
  ) {
    const results = [] as ReturnType<Listeners[T]>[];
    const listeners = listenerMap.get(hook) || [];
    listeners.forEach((listener) => results.push(listener(...args)));
    return await Promise.all(results);
  }

  function on<EventName extends keyof Listeners>(
    hook: EventName,
    listener: Listeners[EventName]
  ) {
    if (!listenerMap.has(hook)) listenerMap.set(hook, new Set());
    listenerMap.get(hook)?.add(listener);
    return () => off(hook, listener);
  }
  function once<EventName extends keyof Listeners>(
    hook: EventName,
    listener: Listeners[EventName]
  ) {
    const off = on(hook, ((...args) => {
      off();
      return listener(...args);
    }) as Listeners[EventName]);
    return off;
  }
  function off<EventName extends keyof Listeners>(
    hook: EventName,
    listener: Listeners[EventName]
  ) {
    listenerMap.get(hook)?.delete(listener);
  }

  function $on<EventName extends keyof Listeners>(
    hook: EventName,
    listener: Listeners[EventName]
  ) {
    const off = on(hook, listener);
    tryOnBeforeUnmount(off);
    return off;
  }
  function $once<EventName extends keyof Listeners>(
    hook: EventName,
    listener: Listeners[EventName]
  ) {
    const off = once(hook, listener);
    tryOnBeforeUnmount(off);
    return off;
  }

  return {
    trigger,
    on,
    once,
    off,
    $on,
    $once,
  };
}
