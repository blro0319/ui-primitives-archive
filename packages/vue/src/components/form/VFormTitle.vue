<script setup lang="ts">
import { VContentTitle } from "~/components";
import type { VFormTitleProps } from "./types";

defineProps<VFormTitleProps>();
</script>

<template>
  <VContentTitle :as="as">
    <slot />
  </VContentTitle>
</template>
