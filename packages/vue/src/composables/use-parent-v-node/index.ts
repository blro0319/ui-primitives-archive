import type { MaybeRefOrGetter } from "@vueuse/core";
import { shallowRef, toValue, type VNode, watch } from "vue";
import { useCurrentVNode } from "..";

export function useParentVNode(
  target: MaybeRefOrGetter<VNode | null | undefined> = useCurrentVNode()
) {
  const parentNode = shallowRef<VNode | null | undefined>();

  watch(
    () => toValue(target),
    () => {
      const node = toValue(target);
      if (node) parentNode.value = node.component?.parent?.vnode;
    },
    { immediate: true }
  );

  return parentNode;
}
