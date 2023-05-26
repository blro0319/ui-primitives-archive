<script setup lang="ts">
import { computed } from "vue";
import type { ComponentAs, VBindAttributes } from "~/types";
import type { VDropdownTriggerProps } from "./types";

withDefaults(defineProps<VDropdownTriggerProps>(), {
  as: (): ComponentAs => "button",
  asChild: false,
});

const attrs = computed(() => {
  return {
    "aria-haspopup": "menu",
  } as VBindAttributes<"button">;
});
</script>

<template>
  <component v-if="as" :is="as">
    <slot />
  </component>
  <slot v-else />
</template>
