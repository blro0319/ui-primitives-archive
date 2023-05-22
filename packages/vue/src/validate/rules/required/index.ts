import { createRule } from "~/validate";

export function required() {
  return createRule("required", (value: any) => {
    if (typeof value === "string") return value.trim().length > 0;
    if (value && typeof value === "object") {
      if ("length" in value && typeof value.length === "number") {
        return value.length > 0;
      }
      if ("size" in value && typeof value.size === "number") {
        return value.size > 0;
      }
    }
    return !!value;
  });
}
