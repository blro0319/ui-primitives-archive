<script setup lang="ts">
import { ref } from "vue";
import {
  VField,
  VFieldDescription,
  VFieldError,
  VFieldLabel,
  VForm,
  VTextInput,
} from "~/components";
import { maxLength, required } from "~/validate";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");

const field4 = ref<InstanceType<typeof VField>>();
</script>

<template>
  <div class="field">
    <h1>VField</h1>
    <article>
      <h2>Basic Usage</h2>
      <VField>
        <VFieldLabel>Label</VFieldLabel>
        <VFieldDescription>Description 1</VFieldDescription>
        <VFieldDescription>Description 2</VFieldDescription>
        <VTextInput v-model="value1" />
      </VField>
    </article>
    <article>
      <h2>Rules</h2>
      [required(), maxLength(8)]
      <h3>When Submit</h3>
      <VForm>
        <VField>
          <VTextInput v-model="value2" :rules="[required(), maxLength(8)]" />
          <VFieldError />
        </VField>
        <button>Submit</button>
      </VForm>
      <h3>When Blur</h3>
      <VField ref="field4" report-when="blur">
        <VTextInput v-model="value3" :rules="[required(), maxLength(8)]" />
        <VFieldError />
      </VField>
      <h3>When Change</h3>
      <VField ref="field4" report-when="change">
        <VTextInput
          v-model="value4"
          :rules="[required(), maxLength(8)]"
          :validity-messages="{
            required: 'Rule: Required',
            maxLength: 'Rule: Max Length (8)',
          }"
        />
        <VFieldError />
      </VField>
    </article>
  </div>
</template>

<style lang="scss" scoped></style>
