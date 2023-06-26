<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { ComponentAs } from "~/types";
import { randomStr } from "~/utils";
import { useVContentContext } from "./context";
import type { VContentTitleProps } from "./types";

withDefaults(defineProps<VContentTitleProps>(), {
  as: (): ComponentAs => "div",
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
  <component :is="as" :id="id">
    <slot />
  </component>
</template>
