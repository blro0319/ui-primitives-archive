<script setup lang="ts">
import { ref } from "vue";
import {
  VField,
  VFieldLabel,
  VRadio,
  VRadioGroup,
  VRadioGroupDescription,
  VRadioGroupTitle,
} from "~/components";

const group = ref<InstanceType<typeof VRadioGroup>>();

const value1 = ref("");
</script>

<template>
  <div class="radio-group">
    <h1>VRadioGroup</h1>
    <article>
      <h2>Basic Usage</h2>
      <VRadioGroup v-model="value1" ref="group">
        <VRadioGroupTitle>Group Title</VRadioGroupTitle>
        <VRadioGroupDescription>Group description</VRadioGroupDescription>
        <VField v-for="i in [1, 2, 3, 4, 5]" :key="i">
          <div style="display: block">
            <VRadio :value="`${i}`" />
            <VFieldLabel>Item {{ i }}</VFieldLabel>
          </div>
        </VField>
      </VRadioGroup>
      <button @click="group?.focus()">Focus</button>
    </article>
  </div>
</template>

<style lang="scss" scoped></style>
