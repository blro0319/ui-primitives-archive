<script setup lang="ts">
import { VContentDescription } from "~/components";
import type { VFieldsetDescriptionProps } from "./types";

defineProps<VFieldsetDescriptionProps>();
</script>

<template>
  <VContentDescription v-bind="$props">
    <slot />
  </VContentDescription>
</template>
