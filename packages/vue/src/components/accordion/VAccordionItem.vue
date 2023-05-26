<script setup lang="ts">
import { toRefs } from "vue";
import { setVAccordionItemContext } from "./context";
import type { VAccordionItemProps } from "./types";

const props = withDefaults(defineProps<VAccordionItemProps>(), {
  open: false,
});

const { open } = toRefs(props);
const { visible } = setVAccordionItemContext({ open });
</script>

<template>
  <slot v-bind="{ opened: visible }" />
</template>
