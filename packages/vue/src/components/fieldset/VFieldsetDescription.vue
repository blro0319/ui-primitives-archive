<script setup lang="ts">
import { VContentDescription } from "~/components";
import type { VFieldsetDescriptionProps } from "./types";

defineProps<VFieldsetDescriptionProps>();
</script>

<template>
  <VContentDescription :as="as">
    <slot />
  </VContentDescription>
</template>
