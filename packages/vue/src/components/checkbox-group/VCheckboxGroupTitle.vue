<script setup lang="ts">
import { VFieldsetTitle } from "~/components";
import type { VCheckboxGroupTitleProps } from "./types";

defineProps<VCheckboxGroupTitleProps>();
</script>

<template>
  <VFieldsetTitle :as="as">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </VFieldsetTitle>
</template>
