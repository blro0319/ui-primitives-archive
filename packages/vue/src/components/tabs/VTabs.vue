<script setup lang="ts">
import { toRefs } from "vue";
import type { VTabsProps, VTabsEmits } from "./types";
import { computed } from "vue";
import { setVTabsContext } from "./context";

const props = withDefaults(defineProps<VTabsProps>(), {
  orientation: "horizontal",
  activationMode: "automatic",
});
const emit = defineEmits<VTabsEmits>();

const { modelValue, orientation, activationMode } = toRefs(props);
const model = computed({
  get: () => modelValue.value,
  set: (value) => emit("update:modelValue", value),
});

setVTabsContext({
  modelValue: model,
  orientation,
  activationMode,
});
</script>

<template>
  <slot />
</template>
