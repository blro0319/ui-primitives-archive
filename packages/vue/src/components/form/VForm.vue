<script setup lang="ts">
import { VContent } from "~/components";
import { setForm } from "~/validate";
import type { VFormEmits } from "./types";

const emit = defineEmits<VFormEmits>();

const { $validate, reset } = setForm();

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
  <VContent
    as="form"
    novalidate
    @submit.prevent="submit()"
    @reset.prevent="reset()"
  >
    <slot />
  </VContent>
</template>
