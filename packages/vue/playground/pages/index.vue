<script setup lang="ts">
import { COMPONENTS } from "#playground/constants";
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
