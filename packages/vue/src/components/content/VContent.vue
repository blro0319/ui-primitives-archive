<script setup lang="ts">
import type { ComponentAs } from "~/types";
import { setVContentContext } from "./context";
import type { VContentProps } from "./types";

withDefaults(defineProps<VContentProps>(), {
  as: (): ComponentAs => "div",
});

const { rootAttrs } = setVContentContext();
</script>

<template>
  <component :is="as" v-bind="rootAttrs">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </component>
</template>
