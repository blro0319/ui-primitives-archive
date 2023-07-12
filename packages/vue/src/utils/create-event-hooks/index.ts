import { tryOnBeforeUnmount } from "@vueuse/core";
import type { AnyFunction } from "~/types";

/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/utils/create-event-hooks/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/utils/create-event-hooks/)
 *
 * ---
 *
 * **English**
 *
 * Creates event hooks. Similar to
 * [VueUse `createEventHook`](https://vueuse.org/shared/createEventHook/),
 * but can create multiple hooks at once.
 *
 * ---
 *
 * **한국어**
 *
 * 이벤트 후크들을 생성합니다.
 * [VueUse의 `createEventHook`](https://vueuse.org/shared/createEventHook/)와
 * 비슷하지만, 여러 후크를 한 번에 생성할 수 있습니다.
 */
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
