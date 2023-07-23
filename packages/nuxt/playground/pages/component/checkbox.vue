<script setup lang="ts">
const value1 = ref(false);
const value2 = ref("on");
const value3 = ref([]);
const value4 = ref(new Set());
const value5 = ref(false);
const value6 = ref([]);
</script>

<template>
  <div class="checkbox">
    <h1>VCheckbox</h1>
    <article>
      <h2>Boolean Value</h2>
      <VField>
        <VCheckbox v-model="value1" />
        <VFieldLabel>{{ value1 }}</VFieldLabel>
      </VField>
    </article>
    <article>
      <h2>Custom Value</h2>
      <VField>
        <VCheckbox v-model="value2" true-value="on" false-value="off" />
        <VFieldLabel>{{ value2 }}</VFieldLabel>
      </VField>
    </article>
    <article>
      <h2>Array Value</h2>
      <VField v-for="i in [1, 2, 3]">
        <VCheckbox v-model="value3" :value="i" />
        <VFieldLabel>{{ i }}</VFieldLabel>
      </VField>
      {{ value3 }}
    </article>
    <article>
      <h2>Set Value</h2>
      <VField v-for="i in [1, 2, 3]">
        <VCheckbox v-model="value4" :value="i" />
        <VFieldLabel>{{ i }}</VFieldLabel>
      </VField>
      {{ value4 }}
    </article>
    <article>
      <h2>Required</h2>
      <VForm>
        <VField>
          <VCheckbox
            v-model="value5"
            :rules="[required()]"
            :validity-messages="{ required: 'This field is required' }"
          />
          <VFieldLabel>{{ value5 }}</VFieldLabel>
          <VFieldError />
        </VField>
        <button>Submit</button>
      </VForm>
    </article>
    <article>
      <h2>Max Length</h2>
      <VField v-for="i in [1, 2, 3]">
        <VCheckbox v-model="value6" :value="i" :max-length="2" />
        <VFieldLabel>{{ i }}</VFieldLabel>
      </VField>
      {{ value6 }}
    </article>
  </div>
</template>
