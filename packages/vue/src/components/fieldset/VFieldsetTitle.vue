<script setup lang="ts">
import { nextTick, onMounted, onUpdated } from "vue";
import type { ComponentAs } from "~/types";
import { useVFieldsetContext } from "./context";
import type { VFieldsetTitleProps } from "./types";

withDefaults(defineProps<VFieldsetTitleProps>(), {
  as: (): ComponentAs => "div",
});

const { updateLegendText, titleBind } = useVFieldsetContext("<VFieldsetTitle>");

onMounted(() => nextTick(updateLegendText));
onUpdated(() => nextTick(updateLegendText));
</script>

<template>
  <component :is="as" v-bind="titleBind">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </component>
</template>
