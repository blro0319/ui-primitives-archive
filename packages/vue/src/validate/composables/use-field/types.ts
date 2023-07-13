import type { MaybeRefOrGetter, Ref } from "vue";
import type { FieldValidateResult, Rule } from "~/validate";

export interface UseFieldOptions<RuleName extends string, Value> {
  value: Ref<Value>;
  defaultValue: MaybeRefOrGetter<Value>;
  rules: MaybeRefOrGetter<Rule<RuleName, Value>[]>;
  validityMessages: MaybeRefOrGetter<Partial<Record<RuleName, string>>>;
  watch?: MaybeRefOrGetter<boolean>;
}

export interface UseFieldValidateResult<RuleName extends string>
  extends FieldValidateResult<RuleName> {
  errors: string[];
}
