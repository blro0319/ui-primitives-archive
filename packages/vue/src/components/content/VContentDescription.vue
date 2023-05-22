<script setup lang="ts">
import { onMounted, ref } from "vue";
import { randomStr } from "~/utils";
import { useVContentContext } from "./context";
import type { VContentDescriptionProps } from "./types";
import { onBeforeUnmount } from "vue";

withDefaults(defineProps<VContentDescriptionProps>(), {
  as: "div",
  asChild: false,
});

const id = ref("");
const context = useVContentContext();

onMounted(() => {
  id.value = `v-content-description-${randomStr()}`;
  context?.addDescription(id.value);
});
onBeforeUnmount(() => {
  context?.removeDescription(id.value);
});
</script>

<template>
  <component v-if="!asChild" :is="as" :id="id">
    <slot />
  </component>
  <slot v-else v-bind="{ id }" />
</template>
