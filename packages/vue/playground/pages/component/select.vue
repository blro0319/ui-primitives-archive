<script setup lang="ts">
import {
  VSelect,
  VSelectMenu,
  VSelectOption,
  VSelectTrigger,
} from "@blro/ui-primitive-vue";
import { ref } from "vue";

const value = ref<string>("");
const multiple = ref<string[]>([]);

const OPTIONS = ["Option 1", "Option 2", "Option 3"];
</script>

<template>
  <div class="select">
    <h1>VSelect</h1>
    <article>
      <h2>Basic Usage</h2>
      <VSelect v-model="value">
        <VSelectTrigger>{{ value || "-" }}</VSelectTrigger>
        <VSelectMenu>
          <VSelectOption v-for="option in OPTIONS" :value="option" />
        </VSelectMenu>
      </VSelect>
    </article>
    <article>
      <h2>Multiple</h2>
      <VSelect v-model="multiple" multiple>
        <VSelectTrigger>{{ multiple.join(", ") || "-" }}</VSelectTrigger>
        <VSelectMenu>
          <VSelectOption v-for="option in OPTIONS" :value="option" />
        </VSelectMenu>
      </VSelect>
    </article>
  </div>
</template>

<style lang="scss" scoped></style>
