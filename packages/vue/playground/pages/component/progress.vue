<script setup lang="ts">
import { VProgress } from "~/components";
</script>

<template>
  <div>
    <h1>VProgress</h1>
    <h2>Basic</h2>
    <VProgress :value="5" :min="0" :max="10" class="progress" />
  </div>
</template>

<style lang="scss" scoped>
.progress {
  width: 128px;
  height: 128px;

  background-color: black;
}
</style>
