<script setup lang="ts">
import { computed } from "vue";
import { VContent } from "~/components";
import type { VBindAttributes } from "~/types";
import { useVAccordionItemContext } from "./context";
import type { VAccordionPanelProps } from "./types";

withDefaults(defineProps<VAccordionPanelProps>(), {
  as: "div",
});

const { triggerId, panelId, visible } =
  useVAccordionItemContext("<VAccordionPanel>");

const bind = computed<VBindAttributes>(() => {
  return {
    "id": panelId.value,
    "role": "region",
    "aria-labelledby": triggerId.value,
  } satisfies VBindAttributes;
});
</script>

<template>
  <VContent v-show="visible" :as="as" v-bind="bind">
    <slot />
  </VContent>
</template>
