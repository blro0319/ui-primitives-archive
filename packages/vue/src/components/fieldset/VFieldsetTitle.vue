<script setup lang="ts">
import { nextTick, onMounted, onUpdated } from "vue";
import type { ComponentAs } from "~/types";
import { useVFieldsetContext } from "./context";
import type { VFieldsetTitleProps } from "./types";

withDefaults(defineProps<VFieldsetTitleProps>(), {
  as: (): ComponentAs => "div",
  asChild: false,
});

const { updateLegendText, titleBind } = useVFieldsetContext("<VFieldsetTitle>");

onMounted(() => nextTick(updateLegendText));
onUpdated(() => nextTick(updateLegendText));
</script>

<template>
  <slot v-if="asChild" v-bind="titleBind" />
  <component v-else :is="as" v-bind="titleBind">
    <slot />
  </component>
</template>
