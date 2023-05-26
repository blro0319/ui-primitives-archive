<script setup lang="ts">
import type { ComponentAs } from "~/types";
import type { VAccordionHeaderProps } from "./types";

withDefaults(defineProps<VAccordionHeaderProps>(), {
  as: (): ComponentAs => "h3",
  asChild: false,
});
</script>

<template>
  <slot v-if="asChild" />
  <component v-else :is="as">
    <slot />
  </component>
</template>
