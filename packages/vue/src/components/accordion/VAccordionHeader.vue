<script setup lang="ts">
import type { VAccordionHeaderProps } from "./types";

withDefaults(defineProps<VAccordionHeaderProps>(), {
  asChild: false,
  level: 3,
});
</script>

<template>
  <slot v-if="asChild" />
  <component v-else :is="`h${level}`">
    <slot />
  </component>
</template>
