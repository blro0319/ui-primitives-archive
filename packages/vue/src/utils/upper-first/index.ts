import { upperFirst as lodashUpperFirst } from "lodash-es";

export function upperFirst<T extends string>(string: T) {
  return lodashUpperFirst(string) as Capitalize<T>;
}
