<script setup lang="ts">
import MyButton from "./MyButton.vue";
</script>

<template>
  <div class="my-buttons">
    <MyButton>Button</MyButton>
    <MyButton href="https://vuejs.org/">Vue.js</MyButton>
    <MyButton href="https://nuxt.com/">Nuxt</MyButton>
  </div>
</template>

<style scoped>
.my-buttons {
  display: flex;
  gap: 16px;
}
</style>
