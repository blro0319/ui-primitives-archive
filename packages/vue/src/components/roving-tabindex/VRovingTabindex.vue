<script setup lang="ts">
import { toRefs } from "vue";
import type { ComponentAs } from "~/types";
import { setVRovingTabindexContext } from "./context";
import type { VRovingTabindexEmits, VRovingTabindexProps } from "./types";

const props = withDefaults(defineProps<VRovingTabindexProps>(), {
  as: (): ComponentAs => "div",
  orientation: "horizontal",
  loop: false,
});
const emit = defineEmits<VRovingTabindexEmits>();

const { orientation, loop } = toRefs(props);
const {
  hooks,
  id,
  rootBind,
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
  <component :is="as" v-bind="rootBind">
    <slot />
  </component>
</template>
