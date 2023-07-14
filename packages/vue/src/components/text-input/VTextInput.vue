<script setup lang="ts" generic="Rules extends Rule<string, string, any>[]">
import { computed, ref, toRefs } from "vue";
import { useInputSelectionRange, useVInput } from "~/composables";
import type { Rule } from "~/validate";
import type { VTextInputEmits, VTextInputProps } from "./types";

const props = withDefaults(defineProps<VTextInputProps<Rules>>(), {
  type: "text",
  disabled: false,
});
const emit = defineEmits<VTextInputEmits<Rules>>();

const { modelValue, defaultValue, rules, validityMessages, pattern } =
  toRefs<VTextInputProps<Rules>>(props);
const root = ref<HTMLInputElement>();

const model = computed({
  get: () => modelValue.value,
  set: (value) => emit("update:modelValue", value),
});

const { field, inputBind } = useVInput({
  value: model,
  defaultValue,
  rules: computed(() => rules?.value || []),
  validityMessages: computed(() => validityMessages?.value || {}),
  focus,
});
field.$on("valid", (event) => emit("valid", event));
field.$on("invalid", (event) => emit("invalid", event));

function focus(options: FocusOptions) {
  root.value?.focus(options);
}

const selection = useInputSelectionRange(root);
function handleInput() {
  if (!root.value) return;

  const prevValue = model.value;
  let value = root.value.value;

  if (pattern?.value) {
    const regex = new RegExp(pattern.value, "g");
    if (!regex.test(value)) value = prevValue;
  }

  model.value = value;

  if (prevValue === value) {
    root.value.value = value;
    root.value.setSelectionRange(
      selection.start,
      selection.end,
      selection.direction
    );
  }
}

defineExpose({
  focus,
  blur() {
    root.value?.blur();
  },
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
