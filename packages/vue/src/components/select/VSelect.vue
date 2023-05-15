<script setup lang="ts">
import { computed, toRefs } from "vue";
import type { VSelectEmits, VSelectProps } from "./types";
import { setVSelectContext } from "./context";

const props = defineProps<VSelectProps>();
const emit = defineEmits<VSelectEmits>();

const { modelValue } = toRefs(props);
const model = computed({
  get: () => modelValue.value,
  set: (value) => emit("update:modelValue", value),
});

setVSelectContext({ value: model });
</script>

<template>
  <slot />
</template>
