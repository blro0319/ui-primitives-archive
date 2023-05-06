import { useInstance } from "~/composables";
import type { MaybeArray } from "~/types";

export function useListeners() {
  return Object.entries(useInstance().$.vnode.props || {})
    .filter(([key]) => key.startsWith("on"))
    .reduce<Record<string, Function[]>>((acc, [key, listeners]) => {
      const normalized = normalizeListeners(listeners as MaybeArray<Function>);
      return { ...acc, [getName(key)]: normalized };
    }, {});

  function getName(key: string) {
    const name = key.slice(2);
    return name.charAt(0).toLowerCase() + name.slice(1);
  }
  function normalizeListeners(listeners: Function | Function[]) {
    return Array.isArray(listeners) ? listeners : [listeners];
  }
}
