<script setup lang="ts">
import { VContentDescription } from "~/components";
import type { VDialogDescriptionProps } from "./types";

defineProps<VDialogDescriptionProps>();
</script>

<template>
  <VContentDescription :as="as">
    <slot />
  </VContentDescription>
</template>
