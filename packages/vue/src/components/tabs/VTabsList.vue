<script setup lang="ts">
import { ref } from "vue";
import { VRovingTabindex } from "~/components";
import { useVTabsContext } from "./context";
import type { VTabsListProps } from "./types";

withDefaults(defineProps<VTabsListProps>(), {
  as: "div",
  asChild: false,
  loop: false,
});

const { modelValue, orientation } = useVTabsContext("<VTabsList>");
const root = ref<InstanceType<typeof VRovingTabindex>>();

function handleKeyDown(event: KeyboardEvent) {
  const key = event.key;
  if ([" ", "Enter"].includes(key)) {
    event.preventDefault();
    const value = root.value?.activeItem?.dataset.vTabsTrigger;
    if (value) modelValue.value = value;
  }
}
</script>

<template>
  <VRovingTabindex
    :as="as"
    :as-child="asChild"
    :orientation="orientation"
    :loop="loop"
    ref="root"
    @keydown="handleKeyDown"
  >
    <slot />
  </VRovingTabindex>
</template>

<style lang="scss" scoped></style>
