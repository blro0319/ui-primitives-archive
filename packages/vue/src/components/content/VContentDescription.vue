<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { ComponentAs } from "~/types";
import { randomStr } from "~/utils";
import { useVContentContext } from "./context";
import type { VContentDescriptionProps } from "./types";
import { onBeforeUnmount } from "vue";

withDefaults(defineProps<VContentDescriptionProps>(), {
  as: (): ComponentAs => "div",
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
  <component :is="as" :id="id">
    <slot />
  </component>
</template>
