<script setup lang="ts">
import { toRefs } from "vue";
import { setVAccordionItemContext } from "./context";
import type { VAccordionItemProps } from "./types";

const props = withDefaults(defineProps<VAccordionItemProps>(), {
  open: false,
});

const { open } = toRefs(props);
setVAccordionItemContext({ open });
</script>

<template>
  <slot />
</template>
