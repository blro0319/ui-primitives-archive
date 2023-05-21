import type { MaybePromise } from "~/types";
import type { Rule } from "~/validate";

export function createRule<Name extends string, Value = unknown>(
  name: Name,
  validator: (value: Value) => MaybePromise<boolean>
): Rule<Name, Value> {
  return { name, validator };
}
