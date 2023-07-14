import type { MaybeRefOrGetter, Ref } from "vue";
import type { Rule, ValidityMessages } from "~/validate";

export interface UseVInputOptions<
  Value = unknown,
  Rules extends Rule<string, Value>[] = []
> {
  value: Ref<Value>;
  defaultValue?: MaybeRefOrGetter<Value>;
  rules?: MaybeRefOrGetter<Rules>;
  validityMessages?: MaybeRefOrGetter<ValidityMessages<Rules>>;
  focus(options?: FocusOptions): void;
}
