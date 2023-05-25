import { createRule } from "~/validate";

export function float() {
  return createRule("float", (value: number | string) => {
    if (typeof value === "number") return !isNaN(value);
    return /^-?[0-9]+(\.[0-9]*)?$/.test(value);
  });
}
