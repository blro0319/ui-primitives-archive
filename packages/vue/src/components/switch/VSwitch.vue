<script setup lang="ts">
import { computed, ref, toRefs } from "vue";
import { useVInput } from "~/composables";
import type { VSwitchEmits, VSwitchProps } from "./types";

const props = withDefaults(defineProps<VSwitchProps>(), {
  trueValue: true,
  falseValue: false,
  disabled: false,
});
const emit = defineEmits<VSwitchEmits>();

const { modelValue, trueValue, falseValue } = toRefs(props);
const model = computed({
  get: () => modelValue.value === trueValue.value,
  set(value) {
    emit("update:modelValue", value ? trueValue.value : falseValue.value);
  },
});

const button = ref<HTMLButtonElement>();
const { inputBind } = useVInput({
  value: model,
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
