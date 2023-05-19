<script setup lang="ts">
import { ref } from "vue";
import { VButton } from "~/components";

const counter = ref(0);
</script>

<template>
  <div class="button">
    <h1>VButton</h1>
    <h2>Basic</h2>
    <div class="button__group">
      <VButton @click="counter++">Basic Button: {{ counter }}</VButton>
    </div>
    <h2>External Link</h2>
    <div class="button__group">
      <VButton href="https://example.com">Default</VButton>
      <VButton href="https://example.com" target="_self">Target _self</VButton>
    </div>
    <h2>Router Link</h2>
    <div class="button__group">
      <VButton to="/">Home</VButton>
      <VButton to="/component/button">Current</VButton>
      <VButton to="/component/dialog">Next</VButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button {
  &__group {
    display: flex;
    gap: 8px;
  }
}
</style>
