import { computed, toValue } from "vue";
import { useVFieldContext } from "~/components";
import type { VBindAttributes } from "~/types";
import { useField } from "~/validate";
import type { UseVInputOptions } from "./types";

export * from "./types";

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
  const { value, focus } = options;
  const initial = value.value;

  const defaultValue = computed(() => toValue(options.defaultValue) ?? initial);
  const rules = computed(() => toValue(options.rules) ?? []);
  const validityMessages = computed(() => {
    return toValue(options.validityMessages) ?? {};
  });

  const vFieldContext = useVFieldContext();
  const field = useField({
    value,
    defaultValue,
    rules,
    validityMessages,
    watch: vFieldContext?.watchInputValue,
  });

  vFieldContext?.registerField(field);

  field.$on("submit", (event) => {
    if (event.type === "invalid" && event.order === 0) focus();
  });

  const inputBind = computed(() => {
    return {
      ...(vFieldContext?.inputBind.value ?? {}),
      onBlur() {
        if (vFieldContext?.reportWhen.value === "blur") {
          vFieldContext.validate()?.then(() => {
            vFieldContext?.reportValidity();
          });
        }
      },
    } satisfies VBindAttributes<"input">;
  });

  return {
    vFieldContext,
    field,
    inputBind,
  };
}
