<script setup lang="ts">
import { useCurrentElement } from "@vueuse/core";
import { computed, onMounted } from "vue";
import { VButton } from "~/components";
import type { ComponentAs } from "~/types";
import { useVSelectContext } from "./context";

interface Props {
  as?: ComponentAs;
}

withDefaults(defineProps<Props>(), { as: VButton });

const element = useCurrentElement<HTMLElement>();
const { triggerAttrs, triggerElement, toggleMenu, showMenu, selectedItems } =
  useVSelectContext("<VSelectTrigger>");
const defaultLabel = computed(() => {
  return selectedItems.value.map((item) => item.label).join(", ") || "-";
});

onMounted(() => {
  triggerElement.value = element.value;
});

function handleKeyDown(event: KeyboardEvent) {
  if (event.key !== "ArrowDown") return;
  event.preventDefault();
  showMenu();
}
</script>

<template>
  <component
    :is="as"
    v-bind="triggerAttrs"
    @click="toggleMenu()"
    @keydown="handleKeyDown"
  >
    <slot>{{ defaultLabel }}</slot>
  </component>
</template>
