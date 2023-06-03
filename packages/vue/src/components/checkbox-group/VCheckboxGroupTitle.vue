<script setup lang="ts">
import { VFieldsetTitle } from "~/components";
import type { VCheckboxGroupTitleProps } from "./types";

defineProps<VCheckboxGroupTitleProps>();
</script>

<template>
  <VFieldsetTitle :as="as" :as-child="asChild" v-slot="slotBind">
    <slot v-bind="slotBind" />
  </VFieldsetTitle>
</template>
