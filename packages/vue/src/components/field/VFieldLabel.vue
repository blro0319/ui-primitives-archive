<script setup lang="ts">
import { ref } from "vue";
import { useVFieldContext } from "./context";

const { inputId = ref("") } = useVFieldContext("<VFieldLabel>") || {};
</script>

<template>
  <label :for="inputId">
    <slot />
  </label>
</template>
