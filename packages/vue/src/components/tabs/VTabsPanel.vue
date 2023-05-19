<script setup lang="ts">
import { toRefs } from "vue";
import { useVTabsContext } from "./context";
import type { VTabsPanelProps } from "./types";
import { onBeforeUnmount } from "vue";
import { watchImmediate } from "@vueuse/core";

const props = withDefaults(defineProps<VTabsPanelProps>(), {
  as: "div",
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
