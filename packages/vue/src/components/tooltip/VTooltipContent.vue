<script setup lang="ts">
import type { ComponentAs } from "~/types";
import { useVTooltipContext } from "./context";

interface Props {
  as?: ComponentAs;
}

withDefaults(defineProps<Props>(), { as: "div" });

const { visible } = useVTooltipContext("<VTooltipContent>");
</script>

<template>
  <component v-show="visible" :is="as">
    <slot />
  </component>
</template>
