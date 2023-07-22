<script setup lang="ts">
import { unrefElement } from "@vueuse/core";
import { omit } from "lodash-es";
import { type ComponentPublicInstance, computed, ref, toRefs } from "vue";
import { VButton, VRovingTabindexItem } from "~/components";
import type { ComponentAs, VBindAttributes } from "~/types";
import { useVTabsContext } from "./context";
import type { VTabsTriggerProps } from "./types";

defineOptions({
  vCompoundType: "VTabsTrigger",
});

const props = withDefaults(defineProps<VTabsTriggerProps>(), {
  as: (): ComponentAs => VButton,
  disabled: false,
});

const { value, disabled } = toRefs(props);
const { modelValue, id, panels } = useVTabsContext();
const trigger = ref<ComponentPublicInstance | HTMLElement>();
const triggerElement = computed(() => unrefElement(trigger));

const selected = computed(() => modelValue.value === value.value);
const controls = computed(() => {
  if (!panels.value.has(value.value)) return;
  return `${id.value}-${value.value}-panel`;
});

const bind = computed(() => {
  return {
    "disabled": disabled.value,
    "id": `${id.value}-${value.value}-trigger`,
    "role": "tab",
    "aria-selected": selected.value,
    "aria-controls": controls.value,
    "data-v-tabs-trigger": value.value,
    "onClick"(event: MouseEvent) {
      if (disabled.value) return;
      event.preventDefault();
      triggerElement.value?.focus();
      modelValue.value = value.value;
    },
  } satisfies VBindAttributes<"button">;
});
</script>

<template>
  <VRovingTabindexItem v-bind="bind" :as="as" :disabled="disabled">
    <slot>{{ value }}</slot>
    <template v-for="(_, name) in omit($slots, 'default')" #[name]>
      <slot :name="name" />
    </template>
  </VRovingTabindexItem>
</template>
