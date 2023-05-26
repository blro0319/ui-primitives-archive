<script setup lang="ts">
import { watchImmediate } from "@vueuse/core";
import { onBeforeUnmount, toRefs } from "vue";
import type { ComponentAs } from "~/types";
import { useVTabsContext } from "./context";
import type { VTabsPanelProps } from "./types";

const props = withDefaults(defineProps<VTabsPanelProps>(), {
  as: (): ComponentAs => "div",
});

const { value } = toRefs(props);
const { modelValue, id, panels } = useVTabsContext();

watchImmediate(value, (newValue, oldValue) => {
  if (oldValue) panels.value.delete(oldValue);
  panels.value.add(newValue);
});
onBeforeUnmount(() => {
  panels.value.delete(value.value);
});
</script>

<template>
  <component
    v-lazy-show="modelValue === value"
    :is="as"
    :id="`${id}-${value}-panel`"
    tabindex="0"
    role="tabpanel"
    :aria-labelledby="`${id}-${value}-trigger`"
  >
    <slot />
  </component>
</template>
