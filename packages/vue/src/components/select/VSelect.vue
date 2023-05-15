<script setup lang="ts">
import { computed, toRefs } from "vue";
import type { MaybeArray } from "~/types";
import type { VSelectOptionValue } from "./types";
import { setVSelectContext } from "./context";

interface Props {
  modelValue: MaybeArray<VSelectOptionValue>;
}
interface Emits {
  (e: "update:modelValue", value: MaybeArray<VSelectOptionValue>): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { modelValue } = toRefs(props);
const model = computed({
  get: () => modelValue.value,
  set: (value) => emit("update:modelValue", value),
});

setVSelectContext({ value: model });
</script>

<template>
  <slot />
</template>
