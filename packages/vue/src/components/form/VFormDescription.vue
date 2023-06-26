<script setup lang="ts">
import { VContentDescription } from "~/components";
import type { VFormDescriptionProps } from "./types";

defineProps<VFormDescriptionProps>();
</script>

<template>
  <VContentDescription :as="as">
    <slot />
  </VContentDescription>
</template>
