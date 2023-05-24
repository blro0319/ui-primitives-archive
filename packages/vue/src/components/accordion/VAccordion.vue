<script setup lang="ts">
import { toRefs } from "vue";
import { setVAccordionContext } from "./context";
import type { VAccordionProps } from "./types";

const props = withDefaults(defineProps<VAccordionProps>(), {
  as: "div",
  asChild: false,
  expandMode: "single",
});

const { expandMode } = toRefs(props);
const { rootBind } = setVAccordionContext({ expandMode });
</script>

<template>
  <slot v-if="asChild" v-bind="rootBind" />
  <component v-else :is="as" v-bind="rootBind">
    <slot />
  </component>
</template>
