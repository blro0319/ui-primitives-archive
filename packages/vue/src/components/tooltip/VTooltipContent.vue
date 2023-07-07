<script setup lang="ts">
import type { ComponentAs } from "~/types";
import { useVTooltipContext } from "./context";
import type { VTooltipContentProps } from "./types";

withDefaults(defineProps<VTooltipContentProps>(), {
  as: (): ComponentAs => "div",
});

const { id, visible } = useVTooltipContext("<VTooltipContent>");
</script>

<template>
  <component v-show="visible" :is="as" :id="id">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </component>
</template>
