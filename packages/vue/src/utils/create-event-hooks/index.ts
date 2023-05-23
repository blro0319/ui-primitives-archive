import { tryOnBeforeUnmount } from "@vueuse/core";
import type { AnyFunction } from "~/types";

export function createEventHooks<L extends Record<string, AnyFunction>>() {
  const listenerMap = new Map<keyof L, Set<L[keyof L]>>();

  async function trigger<T extends keyof L>(
    hook: T,
    ...args: Parameters<L[T]>
  ) {
    const results = [] as ReturnType<L[T]>[];
    const listeners = listenerMap.get(hook) || [];
    listeners.forEach((listener) => results.push(listener(...args)));
    return await Promise.all(results);
  }

  function on<E extends keyof L>(hook: E, listener: L[E]) {
    if (!listenerMap.has(hook)) listenerMap.set(hook, new Set());
    listenerMap.get(hook)?.add(listener);
    return () => off(hook, listener);
  }
  function once<E extends keyof L>(hook: E, listener: L[E]) {
    const off = on(hook, ((...args) => {
      off();
      return listener(...args);
    }) as L[E]);
    return off;
  }
  function off<E extends keyof L>(hook: E, listener: L[E]) {
    listenerMap.get(hook)?.delete(listener);
  }

  function clear() {
    listenerMap.clear();
  }

  function $on<E extends keyof L>(hook: E, listener: L[E]) {
    const off = on(hook, listener);
    tryOnBeforeUnmount(off);
    return off;
  }
  function $once<E extends keyof L>(hook: E, listener: L[E]) {
    const off = once(hook, listener);
    tryOnBeforeUnmount(off);
    return off;
  }

  return {
    trigger,
    on,
    once,
    off,
    clear,
    $on,
    $once,
  };
}
