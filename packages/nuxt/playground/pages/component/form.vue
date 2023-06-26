<script setup lang="ts">
import { integer, pattern, required } from "@blro/ui-primitives-vue";

const value1 = ref("");
const value2 = ref("");
</script>

<template>
  <div class="form">
    <h1>VForm</h1>
    <article>
      <h2>Basic Usage</h2>
      <VForm>
        <VFormTitle>Title</VFormTitle>
        <VFormDescription>Description</VFormDescription>
        <VField>
          <VFieldLabel>Field 1</VFieldLabel>
          <VFieldDescription>
            Starts with "Blro", Ends with ":)"
          </VFieldDescription>
          <VTextInput
            v-model="value1"
            :rules="[required(), pattern(/^Blro.*?:\)$/)]"
            :validity-messages="{ pattern: 'Pattern mismatch!' }"
          />
          <VFieldError />
        </VField>
        <VField>
          <VFieldLabel>Field 2</VFieldLabel>
          <VFieldDescription>Integer only</VFieldDescription>
          <VTextInput
            v-model="value2"
            :rules="[required(), integer()]"
            :validity-messages="{ integer: 'Not integer!' }"
          />
          <VFieldError />
        </VField>
        <button>Submit</button>
      </VForm>
    </article>
  </div>
</template>

<style lang="scss" scoped></style>
