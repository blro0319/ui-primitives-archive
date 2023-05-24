<script setup lang="ts">
import { computed } from "vue";
import type { VDropdownMenuProps } from "./types";
import type { VBindAttributes } from "~/types";
import { useVDropdownContext } from "./context";

withDefaults(defineProps<VDropdownMenuProps>(), {
  as: "div",
  asChild: false,
});

const { visible } = useVDropdownContext();

const attrs = computed(() => {
  return {
    role: "menu",
  } satisfies VBindAttributes;
});
</script>

<template>
  <template v-lazy-if="visible">
    <component v-if="!asChild" :is="as" v-bind="attrs">
      <slot />
    </component>
    <slot v-else v-bind="attrs" />
  </template>
</template>
