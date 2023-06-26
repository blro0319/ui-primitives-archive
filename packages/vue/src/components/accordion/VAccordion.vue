<script setup lang="ts">
import { toRefs } from "vue";
import type { ComponentAs } from "~/types";
import { setVAccordionContext } from "./context";
import type { VAccordionProps } from "./types";

const props = withDefaults(defineProps<VAccordionProps>(), {
  as: (): ComponentAs => "div",
  expandMode: "single",
});

const { expandMode } = toRefs(props);
const { rootBind } = setVAccordionContext({ expandMode });
</script>

<template>
  <component :is="as" v-bind="rootBind">
    <slot />
  </component>
</template>
