<script setup lang="ts" generic="Rules extends Rule[]">
import { computed, ref, toRefs } from "vue";
import { useVCheckboxGroupContext } from "~/components";
import { useVInput } from "~/composables";
import type { Rule, ValidityMessages } from "~/validate";
import type { VCheckboxEmits, VCheckboxProps } from "./types";

const props = withDefaults(defineProps<VCheckboxProps<Rules>>(), {
  trueValue: true,
  falseValue: false,
  rules: () => [] as any as Rules,
  validityMessages: (): ValidityMessages<Rules> => ({}),
});
const emit = defineEmits<VCheckboxEmits>();

const { modelValue, value, rules, validityMessages, disabled, maxLength } =
  toRefs(props);
const {
  value: groupModel,
  rules: groupRules,
  validityMessages: groupValidityMessages,
  maxLength: groupMaxLength,
  reportedErrors: groupReportedErrors,
} = useVCheckboxGroupContext() ?? {};
const input = ref<HTMLInputElement>();

const model = computed({
  get() {
    if (groupModel) return groupModel.value;
    return modelValue?.value;
  },
  set(value) {
    if (input.value?.checked && !getCheckable()) {
      input.value.checked = false;
      return;
    }

    if (groupModel) groupModel.value = value;
    else emit("update:modelValue", value);
  },
});
function getCheckable() {
  const max = groupMaxLength?.value ?? maxLength?.value;
  if (typeof max !== "number") return true;
  if (!Array.isArray(model.value) && !(model.value instanceof Set)) return true;

  const currentLength = Array.isArray(model.value)
    ? model.value.length
    : model.value.size;

  return currentLength < max;
}

const { inputBind, vFieldContext } = useVInput({
  value: model,
  rules: computed(() => {
    return [
      // Replace required rule
      ...(rules.value as Rules).map((rule) => {
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
