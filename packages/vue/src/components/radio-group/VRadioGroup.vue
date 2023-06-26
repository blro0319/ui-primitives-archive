<script setup lang="ts">
import { computed, toRefs } from "vue";
import { VFieldset } from "~/components";
import { setVRadioGroupContext } from "./context";
import type { VRadioGroupEmits, VRadioGroupProps } from "./types";

const props = defineProps<VRadioGroupProps>();
const emit = defineEmits<VRadioGroupEmits>();

const { modelValue } = toRefs(props);
const model = computed({
  get: () => modelValue.value,
  set: (value) => emit("update:modelValue", value),
});

const { rootBind, focus } = setVRadioGroupContext({ value: model });

defineExpose({
  focus,
});
</script>

<template>
  <VFieldset :as="as" v-bind="rootBind">
    <slot />
  </VFieldset>
</template>
