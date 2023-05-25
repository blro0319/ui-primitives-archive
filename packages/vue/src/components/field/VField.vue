<script setup lang="ts">
import { toRefs } from "vue";
import { setVFieldContext } from "./context";
import type { VFieldProps } from "./types";

const props = withDefaults(defineProps<VFieldProps>(), {
  reportWhen: "submit",
});

const { reportWhen } = toRefs(props);

const { validate, $validate, reportValidity } = setVFieldContext({
  reportWhen,
});

defineExpose({
  validate,
  $validate,
  reportValidity,
});
</script>

<template>
  <slot />
</template>
