<script setup lang="ts">
import type { ComponentAs } from "~/types";
import { setVContentContext } from "./context";
import type { VContentProps } from "./types";

withDefaults(defineProps<VContentProps>(), {
  as: (): ComponentAs => "div",
});

const { rootAttrs } = setVContentContext();
</script>

<template>
  <component :is="as" v-bind="rootAttrs">
    <slot />
  </component>
</template>
