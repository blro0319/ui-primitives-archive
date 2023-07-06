<script setup lang="ts">
import { VContentTitle } from "~/components";
import type { VFormTitleProps } from "./types";

defineProps<VFormTitleProps>();
</script>

<template>
  <VContentTitle :as="as">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </VContentTitle>
</template>
