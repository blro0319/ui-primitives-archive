<script setup lang="ts">
import { VContentDescription } from "~/components";
import type { VFieldDescriptionProps } from "./types";

withDefaults(defineProps<VFieldDescriptionProps>(), {
  as: "div",
});
</script>

<template>
  <VContentDescription :as="as">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </VContentDescription>
</template>
