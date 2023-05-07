<script setup lang="ts">
import { toRefs } from "vue";
import { setVTooltipContext } from "./context";

interface Props {
  enterDelay?: number;
  leaveDelay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  enterDelay: 0,
  leaveDelay: 0,
});

const { enterDelay, leaveDelay } = toRefs(props);

setVTooltipContext({ enterDelay, leaveDelay });
</script>

<template>
  <slot />
</template>
