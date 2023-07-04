<script setup lang="ts">
import type { ComponentAs } from "~/types";
import { useVTooltipContext } from "./context";

interface Props {
  as?: ComponentAs;
}

withDefaults(defineProps<Props>(), {
  as: (): ComponentAs => "div",
});

const { id, visible } = useVTooltipContext("<VTooltipContent>");
</script>

<template>
  <component v-show="visible" :is="as" :id="id">
    <slot />
  </component>
</template>
