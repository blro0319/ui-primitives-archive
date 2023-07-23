<script setup lang="ts">
import { VField, VForm } from "@blro/ui-primitives-vue";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");
const value5 = ref("");

const field4 = ref<InstanceType<typeof VField>>();

const form2 = ref<InstanceType<typeof VForm>>();
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
    <article>
      <h2>Reset</h2>
      <VForm ref="form2">
        <VField :report-when="['change', 'submit']">
          <VTextInput v-model="value5" :rules="[required(), maxLength(8)]" />
          <VFieldError />
        </VField>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </VForm>
    </article>
  </div>
</template>

<style lang="scss" scoped></style>
