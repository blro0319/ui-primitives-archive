<script setup lang="ts">
import { computed } from "vue";
import type { VBindAttributes } from "~/types";
import type { VAccordionTriggerProps } from "./types";
import { useVAccordionContext, useVAccordionItemContext } from "./context";

withDefaults(defineProps<VAccordionTriggerProps>(), {
  as: "button",
  asChild: false,
});

const { id, renderedItems, toggleItem } = useVAccordionContext(
  "<VAccordionTrigger>"
);
const { triggerId, panelId, visible } = useVAccordionItemContext(
  "<VAccordionTrigger>"
);

const controls = computed(() => {
  if (renderedItems.value.includes(panelId.value)) return panelId.value;
});

const bind = computed(() => {
  return {
    id: triggerId.value,
    "aria-controls": controls.value,
    "aria-expanded": visible.value,
    "data-v-accordion-trigger": id.value,
    onClick: handleClick,
  } satisfies VBindAttributes<"button">;
});

function handleClick(event: MouseEvent) {
  event.preventDefault();
  toggleItem(panelId.value);
}
</script>

<template>
  <slot v-if="asChild" v-bind="bind" />
  <component v-else :is="as" v-bind="bind">
    <slot />
  </component>
</template>
