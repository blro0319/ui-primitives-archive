import { createRule } from "~/validate";

export function integer() {
  return createRule("integer", (value: number | string) => {
    if (typeof value === "number") return Number.isInteger(value);
    return /^-?[0-9]+$/.test(value);
  });
}
