<script setup lang="ts">
import { VContent } from "~/components";
</script>

<template>
  <VContent as-child v-slot="props">
    <fieldset v-bind="props">
      <slot />
    </fieldset>
  </VContent>
</template>
