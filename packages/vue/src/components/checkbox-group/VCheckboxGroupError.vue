<script setup lang="ts">
import VCheckboxGroupDescription from "./VCheckboxGroupDescription.vue";
import { useVCheckboxGroupContext } from "./context";
import type { VCheckboxGroupErrorProps } from "./types";

defineProps<VCheckboxGroupErrorProps>();

const { reportedErrors } = useVCheckboxGroupContext() ?? {};
</script>

<template>
  <VCheckboxGroupDescription :as="as">
    <slot>{{ reportedErrors?.at(0) }}</slot>
  </VCheckboxGroupDescription>
</template>
