<script setup lang="ts">
import { omit } from "lodash-es";
import VCheckboxGroupDescription from "./VCheckboxGroupDescription.vue";
import { useVCheckboxGroupContext } from "./context";
import type { VCheckboxGroupErrorProps } from "./types";

defineProps<VCheckboxGroupErrorProps>();

const { reportedErrors } = useVCheckboxGroupContext() ?? {};
</script>

<template>
  <VCheckboxGroupDescription :as="as">
    <slot>{{ reportedErrors?.at(0) }}</slot>
    <template v-for="(_, name) in omit($slots, 'default')" #[name]>
      <slot :name="name" />
    </template>
  </VCheckboxGroupDescription>
</template>
