<script setup lang="ts">
import { VFieldsetDescription } from "~/components";
import type { VCheckboxGroupDescriptionProps } from "./types";

defineProps<VCheckboxGroupDescriptionProps>();
</script>

<template>
  <VFieldsetDescription :as="as">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </VFieldsetDescription>
</template>
