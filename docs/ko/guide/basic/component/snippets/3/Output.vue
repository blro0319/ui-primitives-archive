<script setup lang="ts">
import { ref } from "vue";
import MySelect from "./MySelect.vue";

const value = ref("vue");
const options = [
  { value: "vue", label: "Vue.js" },
  { value: "nuxt", label: "Nuxt" },
  { value: "react", label: "React.js" },
  { value: "next", label: "Next.js" },
];
</script>

<template>
  <MySelect v-model="value" :options="options" />
</template>
