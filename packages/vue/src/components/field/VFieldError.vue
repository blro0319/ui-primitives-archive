<script setup lang="ts">
import { ref } from "vue";
import { VContentDescription } from "~/components";
import type { VFieldErrorProps } from "./types";
import { useVFieldContext } from "./context";

defineProps<VFieldErrorProps>();

const { reportedErrors = ref([]) } = useVFieldContext("<VFieldError>") || {};
</script>

<template>
  <VContentDescription v-if="asChild" as-child v-slot="slotBind">
    <slot v-bind="{ ...slotBind, reportedErrors }">
      {{ reportedErrors?.at(0) }}
    </slot>
  </VContentDescription>
  <VContentDescription v-else :as="as">
    <slot v-bind="{ reportedErrors }">{{ reportedErrors.at(0) }}</slot>
  </VContentDescription>
</template>
