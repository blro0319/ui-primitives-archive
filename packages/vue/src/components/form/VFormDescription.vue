<script setup lang="ts">
import { VContentDescription } from "~/components";
import type { VFormDescriptionProps } from "./types";

defineProps<VFormDescriptionProps>();
</script>

<template>
  <VContentDescription v-bind="$props">
    <slot />
  </VContentDescription>
</template>
