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

const value1 = ref(1);
const value2 = ref("1");
</script>

<template>
  <div class="radio-group">
    <h1>VRadioGroup</h1>
    <article>
      <h2>Basic Usage - Number</h2>
      <VRadioGroup v-model="value1" ref="group">
        <VRadioGroupTitle>Group Title</VRadioGroupTitle>
        <VRadioGroupDescription>Group description</VRadioGroupDescription>
        <template v-for="i in 5" :key="i">
          <VField>
            <div style="display: block">
              <VRadio :value="i" />
              <VFieldLabel>Item {{ i }}</VFieldLabel>
            </div>
          </VField>
        </template>
      </VRadioGroup>
      {{ value1 }}
      <button @click="group?.focus()">Focus</button>
    </article>
    <article>
      <h2>Basic Usage - String</h2>
      <VRadioGroup v-model="value2" ref="group">
        <VRadioGroupTitle>Group Title</VRadioGroupTitle>
        <VRadioGroupDescription>Group description</VRadioGroupDescription>
        <template v-for="i in 5" :key="i">
          <VField>
            <div style="display: block">
              <VRadio :value="String(i)" />
              <VFieldLabel>Item {{ i }}</VFieldLabel>
            </div>
          </VField>
        </template>
      </VRadioGroup>
      {{ value2 }}
      <button @click="group?.focus()">Focus</button>
    </article>
  </div>
</template>

<style lang="scss" scoped></style>
