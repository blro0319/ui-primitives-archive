<script setup lang="ts">
const disabled = ref(false);

const value1 = ref("");
const value2 = ref("");
</script>

<template>
  <div class="fieldset">
    <h1>VFieldset</h1>
    <article>
      <h2>Basic Usage</h2>
      <VFieldset :disabled="disabled">
        <VFieldsetTitle>Title</VFieldsetTitle>
        <VFieldsetDescription>Description</VFieldsetDescription>
        <VField>
          <VFieldLabel>Label 1</VFieldLabel>
          <VTextInput v-model="value1" />
        </VField>
        <VField>
          <VFieldLabel>Label 2</VFieldLabel>
          <VTextInput v-model="value2" />
        </VField>
      </VFieldset>
      <input v-model="disabled" type="checkbox" id="disabled" />
      <label for="disabled">Disabled</label>
    </article>
  </div>
</template>

<style lang="scss" scoped></style>
