<script setup lang="ts">
import { VFieldsetDescription } from "~/components";
import type { VRadioGroupDescriptionProps } from "./types";

defineProps<VRadioGroupDescriptionProps>();
</script>

<template>
  <VFieldsetDescription :as="as">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </VFieldsetDescription>
</template>
