<script setup lang="ts">
import { VContentDescription } from "~/components";
import type { VFieldDescriptionProps } from "./types";

withDefaults(defineProps<VFieldDescriptionProps>(), {
  as: "div",
  asChild: false,
});
</script>

<template>
  <VContentDescription :as="as" :as-child="asChild" v-slot="slotBind">
    <slot v-bind="slotBind" />
  </VContentDescription>
</template>
