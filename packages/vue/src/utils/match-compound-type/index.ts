import type { VNode } from "vue";

export function matchCompoundType(target: VNode, match: string) {
  const type = target.type;
  if (typeof type !== "object" || !("vCompoundType" in type)) return false;
  return type.vCompoundType === match;
}
