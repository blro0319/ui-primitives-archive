<script setup lang="ts">
import { randomStr } from "@blro/ui-primitives-vue";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");
</script>

<template>
  <div class="text-input">
    <h1>VTextInput</h1>
    <article>
      <h2>Basic Usage</h2>
      <VTextInput v-model="value1" />
      <output class="out">{{ value1 }}</output>
    </article>
    <article>
      <h2>Type</h2>
      <VTextInput v-model="value2" type="password" />
      <output class="out">{{ value2 }}</output>
    </article>
    <article>
      <h2>Field</h2>
      <VField>
        <VFieldLabel>Label</VFieldLabel>
        <VFieldDescription>Description</VFieldDescription>
        <VTextInput v-model="value3" />
      </VField>
      <output class="out">{{ value3 }}</output>
    </article>
    <article>
      <h2>Dynamic Value</h2>
      <VTextInput v-model="value4" />
      <output class="out">{{ value4 }}</output>
      <button @click="value4 = randomStr()">Change</button>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.out {
  display: block;
}
</style>
