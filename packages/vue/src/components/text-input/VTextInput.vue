<script setup lang="ts" generic="RuleName extends string">
import { computed, ref, toRefs } from "vue";
import { useVInput } from "~/composables";
import type { VTextInputEmits, VTextInputProps } from "./types";

const props = defineProps<VTextInputProps<RuleName>>();
const emit = defineEmits<VTextInputEmits>();

const { modelValue, defaultValue, rules, validityMessages } = toRefs(props);
const root = ref<HTMLInputElement>();

const model = computed<string>({
  get: () => modelValue.value,
  set: (value) => emit("update:modelValue", value),
});

const { inputBind } = useVInput({
  value: model,
  defaultValue,
  rules,
  validityMessages,
  focus,
});

function focus(options: FocusOptions) {
  root.value?.focus(options);
}

function handleInput() {
  if (!root.value) return;
  model.value = root.value.value;
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
    ref="root"
    @input="handleInput"
  />
</template>
