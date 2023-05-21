import { watchImmediate } from "@vueuse/core";
import { cloneDeep } from "lodash-es";
import {
  computed,
  type MaybeRefOrGetter,
  ref,
  type Ref,
  toValue,
  watch,
  type WatchStopHandle,
} from "vue";
import { createEventHooks } from "~/utils";
import {
  createField,
  type FieldValidateResult,
  type FieldValidityState,
  type Rule,
} from "~/validate";

export function useField<RuleName extends string, Value>(
  options: UseFieldOptions<RuleName, Value>
) {
  const hooks = createEventHooks<{
    valid(result: UseFieldValidateResult<RuleName>): void;
    invalid(result: UseFieldValidateResult<RuleName>): void;
    reset(): void;
  }>();

  const field = createField(options.value, options.rules);
  const { value } = options;
  const { rules } = field;
  const defaultValue = computed(() => toValue(options.defaultValue));
  const validityMessages = computed(() => toValue(options.validityMessages));
  const watchFlag = computed(() => toValue(options.watch) ?? false);

  const validityState = ref(field.getDefaultValidityState()) as Ref<
    FieldValidityState<RuleName>
  >;
  const invalidRules = ref([]) as Ref<RuleName[]>;
  const errors = computed(() => {
    return invalidRules.value.map<string>((ruleName) => {
      return validityMessages.value[ruleName] || ruleName;
    });
  });

  async function validate(): Promise<UseFieldValidateResult<RuleName>> {
    const fieldResult = await field.validate();

    validityState.value = fieldResult.state;
    invalidRules.value = fieldResult.invalidRules;

    const result = {
      ...fieldResult,
      errors: errors.value,
    };

    if (result.valid) hooks.trigger("valid", result);
    else hooks.trigger("invalid", result);

    return result;
  }
  async function $validate() {
    return (await validate()).valid;
  }

  function reset() {
    stopWatch();

    value.value = cloneDeep(defaultValue.value);
    validityState.value = field.getDefaultValidityState();
    invalidRules.value = [];

    hooks.trigger("reset");

    if (watchFlag.value) startWatch();
  }

  let watchStopHandler: WatchStopHandle | undefined;
  function startWatch() {
    if (watchStopHandler) return;
    watchStopHandler = watch([value, rules], () => validate());
  }
  function stopWatch() {
    if (!watchStopHandler) return;
    watchStopHandler();
    watchStopHandler = undefined;
  }

  watchImmediate(watchFlag, (flag) => {
    if (flag) startWatch();
    else stopWatch();
  });

  return {
    value,
    defaultValue,
    rules,
    validityMessages,
    validityState,
    invalidRules,
    errors,
    validate,
    $validate,
    reset,
    startWatch,
    stopWatch,
    on: hooks.on,
    once: hooks.once,
    off: hooks.off,
    $on: hooks.$on,
    $once: hooks.$once,
  };
}

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
