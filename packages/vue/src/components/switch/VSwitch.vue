<script setup lang="ts" generic="Rules extends Rule<string, boolean>[]">
import { computed, ref, toRefs } from "vue";
import { useVInput } from "~/composables";
import type { Rule, ValidityMessages } from "~/validate";
import type { VSwitchEmits, VSwitchProps } from "./types";

const props = withDefaults(defineProps<VSwitchProps<Rules>>(), {
  trueValue: true,
  falseValue: false,
  rules: () => [] as unknown as Rules,
  validityMessages: (): ValidityMessages<Rules> => ({}),
  disabled: false,
});
const emit = defineEmits<VSwitchEmits>();

const { modelValue, trueValue, falseValue, rules, validityMessages } =
  toRefs(props);
const model = computed({
  get: () => modelValue.value === trueValue.value,
  set(value) {
    emit("update:modelValue", value ? trueValue.value : falseValue.value);
  },
});

const button = ref<HTMLButtonElement>();
const { inputBind } = useVInput({
  value: model,
  rules,
  validityMessages,
  focus(options: FocusOptions) {
    button.value?.focus(options);
  },
});

function handleClick() {
  if (!props.disabled) model.value = !model.value;
}

defineExpose({
  focus() {
    button.value?.focus();
  },
  blur() {
    button.value?.blur();
  },
  toggle() {
    model.value = !model.value;
  },
});
</script>

<template>
  <button
    v-bind="inputBind"
    type="button"
    ref="button"
    class="v-switch"
    role="switch"
    :aria-checked="model"
    :aria-readonly="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.v-switch[aria-readonly="true"] {
  cursor: not-allowed;
}
</style>
