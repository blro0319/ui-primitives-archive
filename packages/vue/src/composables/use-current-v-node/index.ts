import { useInstance } from "..";

export function useCurrentVNode() {
  return useInstance().$.vnode;
}
