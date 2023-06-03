<script setup lang="ts" generic=" RuleName extends string">
import { computed, ref, toRefs } from "vue";
import { useVCheckboxGroupContext } from "~/components";
import { useVInput } from "~/composables";
import type { Rule } from "~/validate";
import type { VCheckboxEmits, VCheckboxProps } from "./types";

const props = withDefaults(defineProps<VCheckboxProps<RuleName>>(), {
  trueValue: true,
  falseValue: false,
  rules: () => [] as Rule<any, RuleName>[],
  validityMessages: (): Partial<Record<RuleName, string>> => ({}),
});
const emit = defineEmits<VCheckboxEmits>();

const { modelValue, value, rules, validityMessages, disabled } = toRefs(props);
const {
  value: groupModel,
  rules: groupRules,
  validityMessages: groupValidityMessages,
  reportedErrors: groupReportedErrors,
} = useVCheckboxGroupContext() ?? {};
const input = ref<HTMLInputElement>();

const model = computed({
  get() {
    if (groupModel) return groupModel.value;
    return modelValue?.value;
  },
  set(value) {
    if (groupModel) groupModel.value = value;
    else emit("update:modelValue", value);
  },
});

const { inputBind, vFieldContext } = useVInput({
  value: model,
  rules: computed(() => {
    return [
      // Replace required rule
      ...(rules.value as Rule<any, RuleName>[]).map((rule) => {
        if (rule.name !== "required") return rule;
        return {
          name: "required",
          validator: () => !!input.value?.checked,
        };
      }),
      // Merge group rules
      ...(groupRules?.value ?? []),
    ];
  }),
  // Merge group validity messages
  validityMessages: computed(() => ({
    ...validityMessages.value,
    ...(groupValidityMessages?.value ?? {}),
  })),
  focus,
});

vFieldContext?.hooks.$on("report", () => {
  if (!groupReportedErrors?.value) return;
  groupReportedErrors.value = [...vFieldContext.reportedErrors.value];
});

function focus(options?: FocusOptions) {
  input.value?.focus(options);
}

defineExpose({
  focus,
  blur() {
    input.value?.blur();
  },
  click() {
    input.value?.click();
  },
});
</script>

<template>
  <input
    v-bind="inputBind"
    v-model="model"
    type="checkbox"
    :value="value"
    :true-value="trueValue"
    :false-value="falseValue"
    :disabled="(disabled as boolean)"
    ref="input"
  />
</template>
