<script setup lang="ts" generic="RuleName extends string">
import { clamp } from "lodash-es";
import { computed, nextTick, ref, toRefs, watch } from "vue";
import { VTextInput } from "~/components";
import { useVInput } from "~/composables";
import type { VNumberInputEmits, VNumberInputProps } from "./types";

const MIN_STEP_LEVEL = 1000;

const props = withDefaults(defineProps<VNumberInputProps<RuleName>>(), {
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  step: 1 / MIN_STEP_LEVEL,
});
const emit = defineEmits<VNumberInputEmits>();

const {
  modelValue,
  defaultValue,
  rules,
  validityMessages,
  min,
  max,
  step,
  controlStep,
} = toRefs(props);
const root = ref();

const model = computed<number>({
  get: () => modelValue.value,
  set(value) {
    let $value = clamp(value, min.value, max.value);
    $value = Math.round($value / step.value) * step.value;
    $value = Math.trunc($value * MIN_STEP_LEVEL) / MIN_STEP_LEVEL;
    emit("update:modelValue", $value);
  },
});

const { inputBind } = useVInput({
  value: model,
  defaultValue,
  rules,
  validityMessages,
  focus,
});

const displayModel = ref(String(model.value));
watch(displayModel, () => {
  let value = Number(displayModel.value);
  if (isNaN(value)) value = 0;
  model.value = value;

  nextTick(syncInputValue);
});
watch(model, syncInputValue);

function syncInputValue() {
  if (displayModel.value === "-") return;
  if (/\.0*$/.test(displayModel.value)) return;
  displayModel.value = String(model.value);
}

const pattern = computed(() => {
  const integerOnly = step.value % 1 === 0;
  const positiveOnly = min.value >= 0;

  const base = integerOnly ? "\\d*" : "(\\d+(\\.\\d*)?)?";
  return `^${positiveOnly ? base : "(-)?" + base}$`;
});

function handleKeyDown(event: KeyboardEvent) {
  const key = event.key;
  if (key === "ArrowUp") {
    event.preventDefault();
    model.value += controlStep?.value ?? step.value;
  } else if (key === "ArrowDown") {
    event.preventDefault();
    model.value -= controlStep?.value ?? step.value;
  }
}

function focus(options: FocusOptions) {
  root.value?.focus(options);
}

defineExpose({
  focus,
  blur() {
    root.value?.blur();
  },
});
</script>

<template>
  <VTextInput
    v-bind="inputBind"
    v-model="displayModel"
    :pattern="pattern"
    ref="root"
    @keydown="handleKeyDown"
  />
</template>
