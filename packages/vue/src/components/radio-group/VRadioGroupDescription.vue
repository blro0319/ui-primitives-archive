<script setup lang="ts">
import { VFieldsetDescription } from "~/components";
import type { VRadioGroupDescriptionProps } from "./types";

defineProps<VRadioGroupDescriptionProps>();
</script>

<template>
  <VFieldsetDescription :as="as" :as-child="asChild">
    <slot />
  </VFieldsetDescription>
</template>
