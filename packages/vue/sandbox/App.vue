<script setup lang="ts">
import { VButton } from "@blro/ui-primitive-vue";
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="app">
    <h1>Blro UI Primitive Vue</h1>
    <VButton @click="count++">Counter: {{ count }}</VButton>
  </div>
</template>
