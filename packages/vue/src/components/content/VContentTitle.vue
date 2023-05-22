<script setup lang="ts">
import { onMounted, ref } from "vue";
import { randomStr } from "~/utils";
import { useVContentContext } from "./context";
import type { VContentTitleProps } from "./types";

withDefaults(defineProps<VContentTitleProps>(), {
  as: "div",
  asChild: false,
});

const id = ref("");
onMounted(() => {
  id.value = `v-content-title-${randomStr()}`;

  const context = useVContentContext();
  if (context) {
    context.setLabel(id.value);
  }
});
</script>

<template>
  <component v-if="!asChild" :is="as" :id="id">
    <slot />
  </component>
  <slot v-else v-bind="{ id }" />
</template>
