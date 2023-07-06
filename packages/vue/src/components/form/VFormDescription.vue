<script setup lang="ts">
import { VContentDescription } from "~/components";
import type { VFormDescriptionProps } from "./types";

defineProps<VFormDescriptionProps>();
</script>

<template>
  <VContentDescription :as="as">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </VContentDescription>
</template>
