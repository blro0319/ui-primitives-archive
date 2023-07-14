<script setup lang="ts">
import { ref } from "vue";
import { VField, VFieldDescription, VFieldLabel, VRadio } from "~/components";

const input = ref<InstanceType<typeof VRadio>>();

const value1 = ref("1");
</script>

<template>
  <div class="radio">
    <h1>VRadio</h1>
    <article>
      <h2>Basic Usage</h2>
      <VField>
        <div style="display: block">
          <VRadio v-model="value1" name="1" value="1" ref="input" />
          <VFieldLabel>Item 1</VFieldLabel>
          <VFieldDescription>Item 1 description 1</VFieldDescription>
          <VFieldDescription>Item 1 description 2</VFieldDescription>
        </div>
      </VField>
      <VField v-for="i in [2, 3, 4, 5]" :key="i">
        <div style="display: block">
          <VRadio
            v-model="value1"
            name="1"
            :value="`${i}`"
            :disabled="i === 4"
          />
          <VFieldLabel>Item {{ i }}</VFieldLabel>
        </div>
      </VField>
      <output>Selected: {{ value1 }}</output>
    </article>
  </div>
</template>

<style lang="scss" scoped></style>
