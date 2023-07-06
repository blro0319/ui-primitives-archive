<script setup lang="ts">
import { omit } from "lodash-es";
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
    <template v-for="(_, name) in omit($slots, 'default')" #[name]>
      <slot :name="name" />
    </template>
  </VContentDescription>
</template>
