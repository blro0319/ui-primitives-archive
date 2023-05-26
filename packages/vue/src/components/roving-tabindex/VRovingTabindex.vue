<script setup lang="ts">
import { toRefs } from "vue";
import type { ComponentAs } from "~/types";
import { setVRovingTabindexContext } from "./context";
import type { VRovingTabindexEmits, VRovingTabindexProps } from "./types";

const props = withDefaults(defineProps<VRovingTabindexProps>(), {
  as: (): ComponentAs => "div",
  asChild: false,
  orientation: "horizontal",
  loop: false,
});
const emit = defineEmits<VRovingTabindexEmits>();

const { orientation, loop } = toRefs(props);
const {
  hooks,
  id,
  rootAttrs,
  items,
  activeItem,
  updateItems,
  moveActiveItem,
  setActiveItemAt,
  setActiveItem,
} = setVRovingTabindexContext({ orientation, loop });

hooks.$on("change", (event) => emit("change", event));

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
