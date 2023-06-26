<script setup lang="ts">
import { VFieldsetDescription } from "~/components";
import type { VCheckboxGroupDescriptionProps } from "./types";

defineProps<VCheckboxGroupDescriptionProps>();
</script>

<template>
  <VFieldsetDescription :as="as">
    <slot />
  </VFieldsetDescription>
</template>
