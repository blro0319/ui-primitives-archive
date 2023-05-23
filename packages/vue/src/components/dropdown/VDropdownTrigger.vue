<script setup lang="ts">
import type { VDropdownTriggerProps } from "./types";

withDefaults(defineProps<VDropdownTriggerProps>(), {
  as: "div",
  asChild: false,
});
</script>

<template>
  <component v-if="as" :is="as">
    <slot />
  </component>
  <slot v-else />
</template>
