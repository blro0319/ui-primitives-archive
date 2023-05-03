import { useInstance } from "@/composables";

export function useListeners() {
  return Object.entries(useInstance().$.vnode.props || {})
    .filter(([key]) => key.startsWith("on"))
    .reduce<Record<string, Function[]>>((acc, [key, listeners]) => {
      return { ...acc, [getName(key)]: normalizeListeners(listeners) };
    }, {});

  function getName(key: string) {
    const name = key.slice(2);
    return name[0].toLowerCase() + name.slice(1);
  }
  function normalizeListeners(listeners: Function | Function[]) {
    return Array.isArray(listeners) ? listeners : [listeners];
  }
}
