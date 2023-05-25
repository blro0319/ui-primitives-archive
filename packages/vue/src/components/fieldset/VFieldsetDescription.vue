<script setup lang="ts">
import { VContentDescription } from "~/components";
import type { VFieldsetDescriptionProps } from "./types";

defineProps<VFieldsetDescriptionProps>();
</script>

<template>
  <VContentDescription :as="as" :as-child="asChild" v-slot="slotBind">
    <slot v-bind="slotBind" />
  </VContentDescription>
</template>
