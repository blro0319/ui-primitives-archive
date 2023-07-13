import type { MaybeRefOrGetter, Ref } from "vue";
import type { Rule } from "~/validate";

export interface UseVInputOptions<
  Value = unknown,
  RuleName extends string = string
> {
  value: Ref<Value>;
  defaultValue?: MaybeRefOrGetter<Value>;
  rules?: MaybeRefOrGetter<Rule<RuleName, Value>[]>;
  validityMessages?: MaybeRefOrGetter<Partial<Record<RuleName, string>>>;
  focus(options?: FocusOptions): void;
}
