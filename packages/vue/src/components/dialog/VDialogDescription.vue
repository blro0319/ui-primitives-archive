<script setup lang="ts">
import { VContentDescription } from "~/components";
import type { VDialogDescriptionProps } from "./types";

defineProps<VDialogDescriptionProps>();
</script>

<template>
  <VContentDescription :as="as" :as-child="asChild" v-slot="props">
    <slot v-bind="props" />
  </VContentDescription>
</template>
