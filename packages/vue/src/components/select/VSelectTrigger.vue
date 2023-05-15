<script setup lang="ts">
import { computed, onMounted } from "vue";
import { VButton } from "~/components";
import { useInstance } from "~/composables";
import type { ComponentAs } from "~/types";
import { useVSelectContext } from "./context";

interface Props {
  as?: ComponentAs;
}

withDefaults(defineProps<Props>(), { as: VButton });

const instance = useInstance();
const { triggerAttrs, triggerElement, toggleMenu, showMenu, selectedItems } =
  useVSelectContext("<VSelectTrigger>");
const defaultLabel = computed(() => {
  return selectedItems.value.map((item) => item.label).join(", ") || "-";
});

onMounted(() => {
  const el = instance.$el;
  if (!el || !(el instanceof HTMLElement)) return;
  triggerElement.value = el;
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
