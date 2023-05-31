<script setup lang="ts">
import { VContentDescription } from "~/components";
import { useVFieldContext } from "./context";
import type { VFieldErrorProps } from "./types";

withDefaults(defineProps<VFieldErrorProps>(), {
  as: "div",
  asChild: false,
});

const { reportedErrors } = useVFieldContext("<VFieldError>") || {};
</script>

<template>
  <VContentDescription v-if="asChild" as-child v-slot="slotBind">
    <slot v-bind="{ ...slotBind, reportedErrors }">
      {{ reportedErrors?.at(0) }}
    </slot>
  </VContentDescription>
  <VContentDescription v-else :as="as">
    <slot v-bind="{ reportedErrors }">{{ reportedErrors?.at(0) }}</slot>
  </VContentDescription>
</template>
