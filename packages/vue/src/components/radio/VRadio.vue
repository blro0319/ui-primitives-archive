<script setup lang="ts">
import { computed, ref, toRefs } from "vue";
import type { VRadioEmits, VRadioProps } from "./types";
import { useVRadioGroupContext } from "../radio-group/context";
import { useVInput } from "~/composables";

const props = defineProps<VRadioProps>();
const emit = defineEmits<VRadioEmits>();

const { modelValue } = toRefs(props);
const { value: groupValue, id: groupId } = useVRadioGroupContext() ?? {};
const input = ref<HTMLInputElement>();

const model = computed({
  get() {
    if (groupValue) return groupValue.value;
    return modelValue?.value ?? "";
  },
  set(value) {
    if (groupValue) groupValue.value = value;
    emit("update:modelValue", value);
  },
});

const { inputBind } = useVInput({ value: model, focus });

function focus(options?: FocusOptions) {
  input.value?.focus(options);
}

defineExpose({
  focus,
  blur() {
    input.value?.blur();
  },
  click() {
    input.value?.click();
  },
});
</script>

<template>
  <input
    v-model="model"
    v-bind="inputBind"
    type="radio"
    :name="groupId ?? name"
    :value="value"
    ref="input"
    :data-v-radio="groupId"
  />
</template>
