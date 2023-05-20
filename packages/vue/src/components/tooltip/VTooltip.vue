<script setup lang="ts">
import { toRefs } from "vue";
import { setVTooltipContext } from "./context";
import type { VTooltipEmits, VTooltipProps } from "./types";

const props = withDefaults(defineProps<VTooltipProps>(), {
  enterDelay: 0,
  leaveDelay: 0,
});
const emit = defineEmits<VTooltipEmits>();

const { enterDelay, leaveDelay } = toRefs(props);

const { hooks } = setVTooltipContext({ enterDelay, leaveDelay });
hooks.$on("show", () => emit("show"));
hooks.$on("hide", () => emit("hide"));
</script>

<template>
  <slot />
</template>
