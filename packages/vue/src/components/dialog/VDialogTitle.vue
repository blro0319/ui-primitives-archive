<script setup lang="ts">
import { VContentTitle } from "~/components";
import type { VDialogTitleProps } from "./types";

defineProps<VDialogTitleProps>();
</script>

<template>
  <VContentTitle :as="as">
    <slot />
  </VContentTitle>
</template>
