<script setup lang="ts">
import { ref } from "vue";
import { VField, VFieldDescription, VFieldLabel, VSwitch } from "~/components";

defineOptions({
  name: "VSwitchTest",
});

const value1 = ref(false);
const value2 = ref("on");
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
  </div>
</template>
