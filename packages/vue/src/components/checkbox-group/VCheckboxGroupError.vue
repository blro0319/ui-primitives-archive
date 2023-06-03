<script setup lang="ts">
import VCheckboxGroupDescription from "./VCheckboxGroupDescription.vue";
import { useVCheckboxGroupContext } from "./context";
import type { VCheckboxGroupErrorProps } from "./types";

defineProps<VCheckboxGroupErrorProps>();

const { reportedErrors } = useVCheckboxGroupContext() ?? {};
</script>

<template>
  <VCheckboxGroupDescription :as="as" :as-child="asChild" v-slot="slotBind">
    <slot v-bind="{ ...slotBind, reportedErrors }">
      {{ reportedErrors?.at(0) }}
    </slot>
  </VCheckboxGroupDescription>
</template>
