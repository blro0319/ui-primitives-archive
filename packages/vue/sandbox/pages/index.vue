<script setup lang="ts">
import { VButton } from "@/components";
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div>
    <h1>Blro UI Primitive Vue</h1>
    <VButton @click="count++">Counter: {{ count }}</VButton>
    <VButton to="/foo">Foo</VButton>
    <VButton href="https://vuejs.org">Vue.js</VButton>
  </div>
</template>
