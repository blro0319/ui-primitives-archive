import type { VNode } from "vue";
import type { VCompoundType } from "~/index";

export function matchCompoundType(target: VNode, match: VCompoundType) {
  const type = target.type;
  if (typeof type !== "object" || !("vCompoundType" in type)) return false;
  return type.vCompoundType === match;
}
