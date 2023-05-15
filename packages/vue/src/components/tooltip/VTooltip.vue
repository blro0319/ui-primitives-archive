<script setup lang="ts">
import { toRefs } from "vue";
import { setVTooltipContext } from "./context";
import type { VTooltipProps } from "./types";

const props = withDefaults(defineProps<VTooltipProps>(), {
  enterDelay: 0,
  leaveDelay: 0,
});

const { enterDelay, leaveDelay } = toRefs(props);

setVTooltipContext({ enterDelay, leaveDelay });
</script>

<template>
  <slot />
</template>
