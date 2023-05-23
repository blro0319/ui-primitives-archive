import { camelCase, upperFirst } from "~/utils";
import type { PascalCase } from "~/types";

export function pascalCase<T extends string>(string: T): PascalCase<T> {
  return upperFirst(camelCase(string));
}
