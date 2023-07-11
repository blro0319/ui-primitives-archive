<script setup lang="ts">
import type { ComponentAs } from "~/types";
import type { VProgressProps } from "./types";

withDefaults(defineProps<VProgressProps>(), {
  as: (): ComponentAs => "div",
  min: 0,
  max: 1,
});
</script>

<template>
  <component
    :is="as"
    role="progressbar"
    :aria-valuenow="value"
    :aria-valuemin="min"
    :aria-valuemax="max"
  >
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </component>
</template>
