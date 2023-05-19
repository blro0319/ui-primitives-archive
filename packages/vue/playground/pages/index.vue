<script setup lang="ts">
const COMPONENTS = Object.keys(import.meta.glob("./component/*.vue")).map(
  (path) => path.replace(/.*?([^/]+)\.vue$/, "$1")
);
</script>

<template>
  <div>
    <h1>Blro UI Primitive Vue</h1>
    <h2>Components</h2>
    <ul>
      <li v-for="component in COMPONENTS" :key="component">
        <RouterLink :to="`/component/${component}`">
          {{ component }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
