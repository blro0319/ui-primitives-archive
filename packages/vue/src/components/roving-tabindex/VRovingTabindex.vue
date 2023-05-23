<script setup lang="ts">
import { toRefs } from "vue";
import { setVRovingTabindexContext } from "./context";
import type { VRovingTabindexProps } from "./types";

const props = withDefaults(defineProps<VRovingTabindexProps>(), {
  as: "div",
  asChild: false,
  orientation: "horizontal",
  loop: false,
});

const { orientation, loop } = toRefs(props);
const {
  id,
  rootAttrs,
  items,
  activeItem,
  updateItems,
  moveActiveItem,
  setActiveItemAt,
  setActiveItem,
} = setVRovingTabindexContext({ orientation, loop });

defineExpose({
  id,
  orientation,
  loop,
  items,
  activeItem,
  updateItems,
  moveActiveItem,
  setActiveItemAt,
  setActiveItem,
});
</script>

<template>
  <component v-if="!asChild" :is="as" v-bind="rootAttrs">
    <slot />
  </component>
  <slot v-else v-bind="rootAttrs" />
</template>
