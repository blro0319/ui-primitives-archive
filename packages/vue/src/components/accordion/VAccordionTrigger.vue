<script setup lang="ts">
import { computed } from "vue";
import type { ComponentAs, VBindAttributes } from "~/types";
import type { VAccordionTriggerProps } from "./types";
import { useVAccordionContext, useVAccordionItemContext } from "./context";

withDefaults(defineProps<VAccordionTriggerProps>(), {
  as: (): ComponentAs => "button",
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
    "id": triggerId.value,
    "aria-controls": controls.value,
    "aria-expanded": visible.value,
    "data-v-accordion-trigger": id.value,
    "onClick": handleClick,
  } satisfies VBindAttributes<"button">;
});

function handleClick(event: MouseEvent) {
  event.preventDefault();
  toggleItem(panelId.value);
}
</script>

<template>
  <component :is="as" v-bind="bind">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </component>
</template>
