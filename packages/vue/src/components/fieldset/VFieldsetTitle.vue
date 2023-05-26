<script setup lang="ts">
import type { ComponentAs } from "~/types";
import type { VFieldsetTitleProps } from "./types";

withDefaults(defineProps<VFieldsetTitleProps>(), {
  as: (): ComponentAs => "legend",
  asChild: false,
});
</script>

<template>
  <slot v-if="asChild" />
  <component v-else :is="as">
    <slot />
  </component>
</template>
