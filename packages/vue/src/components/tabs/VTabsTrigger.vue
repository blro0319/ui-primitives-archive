<script setup lang="ts">
import { useCurrentElement } from "@vueuse/core";
import { computed, toRefs } from "vue";
import { useVTabsContext } from "./context";
import type { VTabsTriggerProps } from "./types";

defineOptions({
  vCompoundType: "VTabsTrigger",
});

const props = withDefaults(defineProps<VTabsTriggerProps>(), {
  as: "button",
  disabled: false,
});

const { value } = toRefs(props);
const { modelValue, id, triggerSelectMap, activeValue, panels } =
  useVTabsContext();
const element = useCurrentElement<HTMLElement>();

const selected = computed(() => modelValue.value === value.value);
const controls = computed(() => {
  if (!panels.value.has(value.value)) return;
  return `${id.value}-${value.value}-panel`;
});

function select(setModel = false) {
  element.value.focus();
  activeValue.value = value.value;
  if (setModel) modelValue.value = value.value;
}

triggerSelectMap.set(value.value, select);
</script>

<template>
  <component
    :is="as"
    :id="`${id}-${value}-trigger`"
    :disabled="disabled"
    :tabindex="activeValue === value ? 0 : -1"
    role="tab"
    :aria-selected="selected"
    :aria-controls="controls"
    @click="select(true)"
  >
    <slot>{{ value }}</slot>
  </component>
</template>
