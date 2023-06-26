<script setup lang="ts">
import { VFieldsetTitle } from "~/components";
import type { VCheckboxGroupTitleProps } from "./types";

defineProps<VCheckboxGroupTitleProps>();
</script>

<template>
  <VFieldsetTitle :as="as">
    <slot />
  </VFieldsetTitle>
</template>
