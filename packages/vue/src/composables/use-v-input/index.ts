import { unrefElement } from "@vueuse/core";
import {
  type ComponentPublicInstance,
  computed,
  type MaybeRefOrGetter,
  ref,
  type Ref,
  toValue,
} from "vue";
import { useVFieldContext } from "~/components";
import type { VBindAttributes } from "~/types";
import { useField, type Rule } from "~/validate";

/**
 * [English](https://ui-primitives.blro.dev/api/composables/use-v-input/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/composables/use-v-input/)
 *
 * ---
 *
 * **English**
 *
 * ---
 *
 * **한국어**
 */
export function useVInput<Value = unknown, RuleName extends string = string>(
  options: UseVInputOptions<Value, RuleName>
) {
  const { value } = options;
  const initial = value.value;

  const defaultValue = computed(() => toValue(options.defaultValue) ?? initial);
  const rules = computed(() => toValue(options.rules) ?? []);
  const validityMessages = computed(() => {
    return toValue(options.validityMessages) ?? {};
  });

  const root = ref<ComponentPublicInstance | HTMLElement>();
  const rootElement = computed(() => unrefElement(root.value));

  const vFieldContext = useVFieldContext();
  const field = useField({ value, defaultValue, rules, validityMessages });

  vFieldContext?.registerField(field);

  field.$on("submit", (event) => {
    if (event.type === "invalid" && event.order === 0) {
      rootElement.value?.focus();
    }
  });

  const inputBind = computed(() => {
    return {
      ...(vFieldContext?.inputBind.value ?? {}),
      ref: root,
      onBlur() {
        if (vFieldContext?.reportWhen.value === "blur") {
          vFieldContext.validate()?.then(() => {
            vFieldContext?.reportValidity();
          });
        }
      },
    } satisfies VBindAttributes<"input">;
  });

  function focus(options?: FocusOptions) {
    rootElement.value?.focus(options);
  }
  function blur() {
    rootElement.value?.blur();
  }

  return {
    root,
    rootElement,
    vFieldContext,
    field,
    inputBind,
    focus,
    blur,
  };
}

export interface UseVInputOptions<
  Value = unknown,
  RuleName extends string = string
> {
  value: Ref<Value>;
  defaultValue?: MaybeRefOrGetter<Value>;
  rules?: MaybeRefOrGetter<Rule<RuleName, Value>[]>;
  validityMessages?: MaybeRefOrGetter<Partial<Record<RuleName, string>>>;
}
