<script setup lang="ts">
import { VContentDescription } from "~/components";
import type { VFieldDescriptionProps } from "./types";

withDefaults(defineProps<VFieldDescriptionProps>(), {
  as: "div",
});
</script>

<template>
  <VContentDescription :as="as">
    <slot />
  </VContentDescription>
</template>
