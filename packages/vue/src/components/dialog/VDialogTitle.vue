<script setup lang="ts">
import { VContentTitle } from "~/components";
import type { VDialogTitleProps } from "./types";

defineProps<VDialogTitleProps>();
</script>

<template>
  <VContentTitle :as="as" :as-child="asChild" v-slot="props">
    <slot v-bind="props" />
  </VContentTitle>
</template>
