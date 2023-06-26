<script setup lang="ts">
import type { ComponentAs } from "~/types";
import type { VAccordionHeaderProps } from "./types";

withDefaults(defineProps<VAccordionHeaderProps>(), {
  as: (): ComponentAs => "h3",
});
</script>

<template>
  <component :is="as">
    <slot />
  </component>
</template>
