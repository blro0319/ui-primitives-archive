<script setup lang="ts">
import { ref } from "vue";
import { VRovingTabindex, type VRovingTabindexChangeEvent } from "~/components";
import type { ComponentAs } from "~/types";
import { useVTabsContext } from "./context";
import type { VTabsListProps } from "./types";

withDefaults(defineProps<VTabsListProps>(), {
  as: (): ComponentAs => "div",
  loop: false,
});

const { modelValue, orientation, activationMode } =
  useVTabsContext("<VTabsList>");
const root = ref<InstanceType<typeof VRovingTabindex>>();

function handleKeyDown(event: KeyboardEvent) {
  const key = event.key;
  if ([" ", "Enter"].includes(key)) {
    event.preventDefault();
    const value = root.value?.activeItem?.dataset.vTabsTrigger;
    if (value) modelValue.value = value;
  }
}

function handleChangeTabindex(event: VRovingTabindexChangeEvent) {
  if (activationMode.value === "automatic") {
    const value = event.target.dataset.vTabsTrigger;
    if (value) modelValue.value = value;
  }
}
</script>

<template>
  <VRovingTabindex
    :as="as"
    :orientation="orientation"
    :loop="loop"
    role="tablist"
    ref="root"
    @keydown="handleKeyDown"
    @change="handleChangeTabindex"
  >
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </VRovingTabindex>
</template>
