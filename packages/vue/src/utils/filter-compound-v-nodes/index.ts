import type { VNode, VNodeNormalizedChildren } from "vue";
import { matchCompoundType } from "..";
import type { VCompoundType } from "~/index";

export function filterCompoundVNodes(
  targets: VNode[] | VNodeNormalizedChildren,
  type: VCompoundType
) {
  if (!Array.isArray(targets)) return [];

  const nodes: VNode[] = [];
  targets.forEach((target) => {
    if (!target || typeof target !== "object") return;
    if (Array.isArray(target)) {
      nodes.push(...filterCompoundVNodes(target, type));
      return;
    }
    if (matchCompoundType(target, type)) {
      nodes.push(target);
      return;
    }
    if (target.children?.length) {
      nodes.push(...filterCompoundVNodes(target.children, type));
    }
  });

  return nodes;
}
