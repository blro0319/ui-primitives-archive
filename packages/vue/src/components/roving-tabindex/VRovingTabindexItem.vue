<script setup lang="ts">
import { unrefElement } from "@vueuse/core";
import { type ComponentPublicInstance, computed, ref, toRefs } from "vue";
import { VButton } from "~/components";
import type { ComponentAs, VBindAttributes } from "~/types";
import type { VRovingTabindexItemProps } from "./types";
import { useVRovingTabindexContext } from "./context";

const props = withDefaults(defineProps<VRovingTabindexItemProps>(), {
  as: (): ComponentAs => VButton,
  disabled: false,
});

const { disabled } = toRefs(props);
const { id, activeItem, setActiveItem } = useVRovingTabindexContext();
const node = ref<HTMLElement | ComponentPublicInstance>();
const nodeElement = computed(() => unrefElement(node.value));

const isActive = computed(() => activeItem.value === nodeElement.value);

const bind = computed(() => {
  return {
    "ref": node,
    "tabindex": isActive.value ? 0 : -1,
    "aria-disabled": disabled.value ? "true" : "false",
    [`data-v-roving-tabindex-item`]: id.value,
    "onFocus": () => {
      if (disabled.value || !nodeElement.value) return;
      setActiveItem(nodeElement.value as HTMLElement);
    },
  } satisfies VBindAttributes<"button">;
});
</script>

<template>
  <component :is="as" v-bind="bind">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </component>
</template>
