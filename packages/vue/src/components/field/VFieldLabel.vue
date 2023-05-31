<script setup lang="ts">
import { computed } from "vue";
import type { VBindAttributes } from "~/types";
import { useVFieldContext } from "./context";
import type { VFieldLabelProps } from "./types";

withDefaults(defineProps<VFieldLabelProps>(), {
  as: "label",
  asChild: false,
});

const { inputId } = useVFieldContext("<VFieldLabel>") || {};
const bind = computed(() => {
  return { for: inputId?.value } as VBindAttributes<"label">;
});
</script>

<template>
  <slot v-if="asChild" v-bind="bind" />
  <label v-else v-bind="bind">
    <slot />
  </label>
</template>
