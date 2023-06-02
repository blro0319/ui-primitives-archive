<script setup lang="ts" generic=" RuleName extends string">
import { computed, ref, toRefs } from "vue";
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
const input = ref<HTMLInputElement>();

const model = computed({
  get: () => modelValue.value,
  set: (value) => emit("update:modelValue", value),
});

const { inputBind } = useVInput({
  value: model,
  rules: computed(() => {
    return (rules.value as Rule<any, RuleName>[]).map((rule) => {
      if (rule.name !== "required") return rule;
      return {
        name: "required",
        validator: () => !!input.value?.checked,
      };
    });
  }),
  validityMessages,
  focus,
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
