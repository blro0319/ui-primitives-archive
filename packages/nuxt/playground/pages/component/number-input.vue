<script setup lang="ts">
const value1 = ref(0);
const invalid1 = ref(false);

const value2 = ref(0);
const value3 = ref(0);
const value4 = ref(0);
const value5 = ref(0);
</script>

<template>
  <div class="text-input">
    <h1>VNumberInput</h1>
    <article>
      <h2>Basic Usage</h2>
      <VField report-when="change">
        <VFieldLabel>Label</VFieldLabel>
        <VFieldDescription>Description</VFieldDescription>
        <VNumberInput
          v-model="value1"
          :rules="[min(5)]"
          @valid="invalid1 = false"
          @invalid="invalid1 = true"
        />
      </VField>
      <output class="out">{{ value1 }}</output>
      <output class="out">{{ invalid1 }}</output>
    </article>
    <article>
      <h2>Min/Max</h2>
      <VNumberInput v-model="value2" :min="-100" :max="100" />
      <output class="out">{{ value2 }}</output>
    </article>
    <article>
      <h2>Integer Only</h2>
      <VNumberInput v-model="value3" :step="1" />
      <output class="out">{{ value3 }}</output>
    </article>
    <article>
      <h2>Positive Only</h2>
      <VNumberInput v-model="value4" :min="0" />
      <output class="out">{{ value4 }}</output>
    </article>
    <article>
      <h2>Control Step</h2>
      <VNumberInput
        v-model="value5"
        :min="-9950"
        :max="550"
        :control-step="100"
      />
      <output class="out">{{ value5 }}</output>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.out {
  display: block;
}
</style>
