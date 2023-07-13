<script setup lang="ts">
import { ref } from "vue";
import {
  VField,
  VFieldDescription,
  VFieldError,
  VFieldLabel,
  VForm,
  VSwitch,
} from "~/components";
import { required } from "~/validate";

defineOptions({
  name: "VSwitchTest",
});

const value1 = ref(false);
const value2 = ref("on");
const value3 = ref(false);
</script>

<template>
  <div class="switch">
    <h1>VSwitch</h1>
    <article>
      <h2>Boolean Value</h2>
      <VField>
        <VFieldLabel>Label</VFieldLabel>
        <VSwitch v-model="value1">{{ value1 }}</VSwitch>
      </VField>
    </article>
    <article>
      <h2>Custom Value</h2>
      <VField>
        <VFieldLabel>Label</VFieldLabel>
        <VSwitch v-model="value2" true-value="on" false-value="off">
          {{ value2 }}
        </VSwitch>
        <VFieldDescription>on/off</VFieldDescription>
      </VField>
    </article>
    <article>
      <h2>Validation</h2>
      <VForm>
        <VField>
          <VFieldLabel>Label</VFieldLabel>
          <VSwitch v-model="value3" :rules="[required()]">
            {{ value3 }}
          </VSwitch>
          <VFieldError />
        </VField>
        <button>Submit</button>
      </VForm>
    </article>
  </div>
</template>
