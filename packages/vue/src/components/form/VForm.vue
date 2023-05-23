<script setup lang="ts">
import { VContent } from "~/components";
import { setFormContext } from "~/validate";
import type { VFormEmits } from "./types";

const emit = defineEmits<VFormEmits>();

const { $validate, reset } = setFormContext();

let whileSubmitting = false;
async function submit() {
  if (whileSubmitting) return;
  whileSubmitting = true;

  const valid = await $validate();
  if (valid) emit("submit");
  else emit("invalid");

  whileSubmitting = false;
}

defineExpose({
  submit,
  reset,
});
</script>

<template>
  <VContent as-child v-slot="props">
    <form
      v-bind="props"
      novalidate
      @submit.prevent="submit()"
      @reset.prevent="reset()"
    >
      <slot />
    </form>
  </VContent>
</template>
