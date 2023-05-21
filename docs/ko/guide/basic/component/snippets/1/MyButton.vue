<script setup lang="ts">
import { VButton } from "@blro/ui-primitives-vue";
</script>

<template>
  <VButton class="my-button">
    <slot />
  </VButton>
</template>

<style scoped>
.my-button {
  display: inline-flex;
  align-items: center;

  height: 40px;
  padding: 0 16px;

  background-color: var(--vp-c-bg-alt);
  border: 2px solid var(--vp-c-bg-alt);
  border-radius: 8px;

  color: var(--vp-c-text-1);
  font-size: 1rem;
  font-weight: normal;
  text-decoration: none;

  transition-property: background-color, border-color, color;
  transition-duration: 250ms;
}
.my-button:hover,
.my-button:focus-visible {
  border-color: var(--vp-c-brand);
  text-decoration: none;
}
.my-button:active {
  background-color: var(--vp-c-brand);
  color: white;
}
</style>
