<script setup lang="ts">
import { VContentTitle } from "~/components";
import type { VDialogTitleProps } from "./types";

defineProps<VDialogTitleProps>();
</script>

<template>
  <VContentTitle :as="as">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </VContentTitle>
</template>
