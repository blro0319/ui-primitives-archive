<script setup lang="ts">
import { VFieldsetTitle } from "~/components";
import type { VRadioGroupTitleProps } from "./types";

defineProps<VRadioGroupTitleProps>();
</script>

<template>
  <VFieldsetTitle :as="as">
    <slot />
  </VFieldsetTitle>
</template>
