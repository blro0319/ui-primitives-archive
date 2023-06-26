<script setup lang="ts">
import { VContentDescription } from "~/components";
import { useVFieldContext } from "./context";
import type { VFieldErrorProps } from "./types";

withDefaults(defineProps<VFieldErrorProps>(), {
  as: "div",
});

const { reportedErrors } = useVFieldContext("<VFieldError>") || {};
</script>

<template>
  <VContentDescription :as="as">
    <slot v-bind="{ reportedErrors }">{{ reportedErrors?.at(0) }}</slot>
  </VContentDescription>
</template>
