<script
  setup
  lang="ts"
  generic="Value extends any[] | Set<any>, RuleName extends string"
>
import { computed, toRefs } from "vue";
import { VFieldset } from "~/components";
import type { Rule } from "~/validate";
import type { ComponentAs } from "~/types";
import { setVCheckboxGroupContext } from "./context";
import type { VCheckboxGroupEmits, VCheckboxGroupProps } from "./types";

const props = withDefaults(
  defineProps<VCheckboxGroupProps<Value, RuleName>>(),
  {
    as: (): ComponentAs => "fieldset",
    asChild: false,
    rules: (): Rule<RuleName, Value>[] => [],
    validityMessages: (): Partial<Record<RuleName, string>> => ({}),
    disabled: false,
  }
);
const emit = defineEmits<VCheckboxGroupEmits<Value>>();

const { modelValue, defaultValue, rules, validityMessages } = toRefs(props);

const model = computed({
  get: () => modelValue.value,
  set: (value) => emit("update:modelValue", value),
});

const { rootBind, focus } = setVCheckboxGroupContext({
  value: model,
  defaultValue,
  rules,
  validityMessages,
});

defineExpose({ focus });
</script>

<template>
  <VFieldset
    :as="as"
    :as-child="asChild"
    :disabled="disabled"
    v-bind="rootBind"
    v-slot="slotBind"
  >
    <slot v-bind="{ ...slotBind, ...rootBind }" />
  </VFieldset>
</template>
