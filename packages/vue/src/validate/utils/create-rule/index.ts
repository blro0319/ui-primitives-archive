import type { MaybePromise } from "~/types";
import type { Rule } from "~/validate";

export function createRule<
  Name extends string,
  Value = unknown,
  Options = undefined
>(
  name: Name,
  validator: (value: Value) => MaybePromise<boolean>,
  options?: Options
): Rule<Name, Value, Options> {
  return { name, validator, options };
}
