<script setup lang="ts">
import { useCurrentElement } from "@vueuse/core";
import { computed, toRefs } from "vue";
import { VRovingTabindexItem } from "~/components";
import type { VBindAttributes } from "~/types";
import { useVTabsContext } from "./context";
import type { VTabsTriggerProps } from "./types";

defineOptions({
  vCompoundType: "VTabsTrigger",
});

const props = withDefaults(defineProps<VTabsTriggerProps>(), {
  as: "button",
  asChild: false,
  disabled: false,
});

const { value, disabled } = toRefs(props);
const { modelValue, id, panels } = useVTabsContext();
const element = useCurrentElement<HTMLElement>();

const selected = computed(() => modelValue.value === value.value);
const controls = computed(() => {
  if (!panels.value.has(value.value)) return;
  return `${id.value}-${value.value}-panel`;
});

const attrs = computed(() => {
  return {
    id: `${id.value}-${value.value}-trigger`,
    disabled: disabled.value,
    role: "tab",
    "aria-selected": selected.value,
    "aria-controls": controls.value,
    "data-v-tabs-trigger": value.value,
    onClick() {
      if (disabled.value) return;
      element.value.focus();
      modelValue.value = value.value;
    },
  } satisfies VBindAttributes<"button">;
});
</script>

<template>
  <VRovingTabindexItem as-child :disabled="disabled" v-slot="props">
    <component v-if="!asChild" :is="as" v-bind="{ ...props, ...attrs }">
      <slot>{{ value }}</slot>
    </component>
    <slot v-else v-bind="{ ...props, ...attrs }">{{ value }}</slot>
  </VRovingTabindexItem>
</template>
