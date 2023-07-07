<script setup lang="ts">
import { ref } from "vue";
import {
  VCheckbox,
  VCheckboxGroup,
  VCheckboxGroupDescription,
  VCheckboxGroupError,
  VCheckboxGroupTitle,
  VField,
  VFieldLabel,
  VForm,
} from "~/components";
import { maxLength, required } from "~/validate";

const form = ref<InstanceType<typeof VForm>>();
const disabled = ref(false);

const value1 = ref([1]);
const value2 = ref(new Set());
const value3 = ref([]);
const value4 = ref([]);
</script>

<template>
  <div class="checkbox-group">
    <h1>VCheckboxGroup</h1>
    <article>
      <h2>Basic Usage</h2>
      <VCheckboxGroup v-model="value1" :disabled="disabled">
        <VCheckboxGroupTitle>Checkbox Group Title</VCheckboxGroupTitle>
        <VCheckboxGroupDescription>
          Checkbox Group Description
        </VCheckboxGroupDescription>
        <VField v-for="i in [1, 2, 3, 4, 5]">
          <VCheckbox :value="i" />
          <VFieldLabel>Item {{ i }}</VFieldLabel>
        </VField>
      </VCheckboxGroup>
      {{ value1 }}
      <VField>
        <VCheckbox v-model="disabled" />
        <VFieldLabel>Disabled</VFieldLabel>
      </VField>
    </article>
    <article>
      <h2>Set Value</h2>
      <VCheckboxGroup v-model="value2">
        <VCheckboxGroupTitle>Checkbox Group Title</VCheckboxGroupTitle>
        <VCheckboxGroupDescription>
          Checkbox Group Description
        </VCheckboxGroupDescription>
        <VField v-for="i in [1, 2, 3, 4, 5]">
          <VCheckbox :value="i" />
          <VFieldLabel>Item {{ i }}</VFieldLabel>
        </VField>
      </VCheckboxGroup>
      {{ value2 }}
    </article>
    <article>
      <h2>Validation</h2>
      <VForm ref="form" @submit="form?.reset()">
        <VCheckboxGroup
          v-model="value3"
          :rules="[required(), maxLength(3)]"
          :validity-messages="{
            required: 'This field is required.',
            maxLength: 'Check no more than 3 items.',
          }"
        >
          <VCheckboxGroupTitle>Checkbox Group Title</VCheckboxGroupTitle>
          <VCheckboxGroupDescription>
            Checkbox Group Description
          </VCheckboxGroupDescription>
          <VField v-for="i in [1, 2, 3, 4, 5]">
            <VCheckbox :value="i" />
            <VFieldLabel>Item {{ i }}</VFieldLabel>
          </VField>
          <VCheckboxGroupError />
        </VCheckboxGroup>
        <button>Submit</button>
      </VForm>
      {{ value3 }}
    </article>
    <article>
      <h2>Max Length</h2>
      <VCheckboxGroup v-model="value4" :disabled="disabled" :max-length="3">
        <VField v-for="i in [1, 2, 3, 4, 5]">
          <VCheckbox :value="i" />
          <VFieldLabel>Item {{ i }}</VFieldLabel>
        </VField>
      </VCheckboxGroup>
      {{ value4 }}
    </article>
  </div>
</template>

<style lang="scss" scoped></style>
