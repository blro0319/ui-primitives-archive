<script setup lang="ts">
import type { ComponentAs } from "~/types";
import { setVContentContext } from "./context";
import type { VContentProps } from "./types";

withDefaults(defineProps<VContentProps>(), {
  as: (): ComponentAs => "div",
  asChild: false,
});

const { rootAttrs } = setVContentContext();
</script>

<template>
  <component v-if="!asChild" :is="as" v-bind="rootAttrs">
    <slot />
  </component>
  <slot v-else v-bind="rootAttrs" />
</template>
