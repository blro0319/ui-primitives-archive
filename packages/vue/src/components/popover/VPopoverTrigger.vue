<script setup lang="ts">
import { ref } from "vue";
import { VButton } from "~/components";
import type { ComponentAs } from "~/types";
import { useVPopoverContext } from "./context";
import type { VPopoverTriggerProps } from "./types";

withDefaults(defineProps<VPopoverTriggerProps>(), {
  as: (): ComponentAs => VButton,
});

const { hooks, id, trigger } = useVPopoverContext("<VPopoverTrigger>");
const visible = ref(false);

hooks.$on("show", () => (visible.value = true));
hooks.$on("hide", () => (visible.value = false));

function toggle() {
  hooks.trigger(visible.value ? "request-hide" : "request-show");
}
</script>

<template>
  <component
    :is="as"
    ref="trigger"
    aria-haspopup="dialog"
    :aria-controls="id"
    :aria-expanded="String(visible)"
    @click="toggle"
  >
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </component>
</template>
