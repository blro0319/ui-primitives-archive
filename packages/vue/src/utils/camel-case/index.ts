import { camelCase as lodashCamelCase } from "lodash-es";
import type { CamelCase } from "~/types";

export function camelCase<T extends string>(string: T) {
  return lodashCamelCase(string) as CamelCase<T>;
}
