<script setup lang="ts" generic="RuleName extends string">
import { computed, toRefs } from "vue";
import { useVInput } from "~/composables";
import type { VTextInputEmits, VTextInputProps } from "./types";

const props = defineProps<VTextInputProps<RuleName>>();
const emit = defineEmits<VTextInputEmits>();

const { modelValue, defaultValue, rules, validityMessages } = toRefs(props);

const model = computed<string>({
  get: () => modelValue.value,
  set: (value) => emit("update:modelValue", value),
});

const { rootElement, inputBind, focus, blur } = useVInput({
  value: model,
  defaultValue,
  rules,
  validityMessages,
});

function handleInput() {
  if (!rootElement.value) return;
  model.value = (rootElement.value as HTMLInputElement).value;
}

defineExpose({
  focus,
  blur,
});
</script>

<template>
  <input
    v-bind="inputBind"
    :type="type"
    :value="model"
    :disabled="disabled"
    @input="handleInput"
  />
</template>
