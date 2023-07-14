import type { MaybeRefOrGetter, Ref } from "vue";
import type { FieldValidateResult, Rule, ValidityMessages } from "~/validate";

export interface UseFieldOptions<Value, Rules extends Rule<string, Value>[]> {
  value: Ref<Value>;
  defaultValue: MaybeRefOrGetter<Value>;
  rules: MaybeRefOrGetter<Rules>;
  validityMessages: MaybeRefOrGetter<ValidityMessages<Rules>>;
  watch?: MaybeRefOrGetter<boolean>;
}

export interface UseFieldValidateResult<Rules extends Rule[]>
  extends FieldValidateResult<Rules> {
  errors: string[];
}
