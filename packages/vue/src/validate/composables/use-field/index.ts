import { watchImmediate } from "@vueuse/core";
import { cloneDeep } from "lodash-es";
import {
  computed,
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
  type FieldValidityState,
  type Rule,
  useForm,
  type UseFormSubmitEvent,
  RulesName,
} from "~/validate";
import type { UseFieldOptions, UseFieldValidateResult } from "./types";

export * from "./types";

export function useField<Value, Rules extends Rule<string, Value>[]>(
  options: UseFieldOptions<Value, Rules>
) {
  const hooks = createEventHooks<{
    valid(result: UseFieldValidateResult<Rules>): void;
    invalid(result: UseFieldValidateResult<Rules>): void;
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
    FieldValidityState<Rules>
  >;
  const invalidRules = ref([]) as Ref<RulesName<Rules>[]>;
  const errors = computed(() => {
    return invalidRules.value.map<string>((ruleName) => {
      return validityMessages.value[ruleName] || ruleName;
    });
  });

  async function validate(): Promise<UseFieldValidateResult<Rules>> {
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
