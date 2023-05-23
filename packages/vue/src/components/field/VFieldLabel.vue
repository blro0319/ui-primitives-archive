<script setup lang="ts">
import { useVFieldContext } from "./context";

const { id } = useVFieldContext("<VFieldLabel>");
</script>

<template>
  <label :for="id">
    <slot />
  </label>
</template>
