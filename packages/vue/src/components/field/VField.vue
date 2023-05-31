<script setup lang="ts">
import { toRefs } from "vue";
import { setVFieldContext } from "./context";
import type { VFieldEmits, VFieldProps } from "./types";

const props = withDefaults(defineProps<VFieldProps>(), {
  reportWhen: "submit",
});
const emit = defineEmits<VFieldEmits>();

const { reportWhen } = toRefs(props);

const { hooks, validate, $validate, reportValidity } = setVFieldContext({
  reportWhen,
});

hooks.$on("valid", (event) => emit("valid", event));
hooks.$on("invalid", (event) => emit("invalid", event));
hooks.$on("reset", () => emit("reset"));
hooks.$on("submit", (event) => emit("submit", event));
hooks.$on("report", () => emit("report"));

defineExpose({
  validate,
  $validate,
  reportValidity,
});
</script>

<template>
  <slot />
</template>
