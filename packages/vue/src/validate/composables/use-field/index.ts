import { watchImmediate } from "@vueuse/core";
import { cloneDeep } from "lodash-es";
import {
  computed,
  type MaybeRefOrGetter,
  nextTick,
  onUnmounted,
  ref,
  type Ref,
  toValue,
  watch,
  type WatchStopHandle,
} from "vue";
import { createEventHooks } from "~/utils";
import {
  createField,
  useForm,
  type FieldValidateResult,
  type FieldValidityState,
  type Rule,
  type UseFormSubmitEvent,
} from "~/validate";

export function useField<RuleName extends string, Value>(
  options: UseFieldOptions<RuleName, Value>
) {
  const hooks = createEventHooks<{
    valid(result: UseFieldValidateResult<RuleName>): void;
    invalid(result: UseFieldValidateResult<RuleName>): void;
    submit(event: UseFormSubmitEvent): void;
    reset(): void;
  }>();

  const field = createField(options.value, options.rules);
  const { value } = options;
  const { rules, isRequired } = field;
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

    nextTick(() => {
      if (watchFlag.value) startWatch();
      hooks.trigger("reset");
    });
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

  const context = {
    value,
    defaultValue,
    rules,
    isRequired,
    validityMessages,
    validityState,
    invalidRules,
    errors,
    validate,
    $validate,
    reset,
    on: hooks.on,
    once: hooks.once,
    off: hooks.off,
    $on: hooks.$on,
    $once: hooks.$once,
  };

  const form = useForm();
  if (form) {
    const deleteField = form.addField(context, (event) => {
      hooks.trigger("submit", event);
    });
    onUnmounted(deleteField);
  }

  return context;
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
