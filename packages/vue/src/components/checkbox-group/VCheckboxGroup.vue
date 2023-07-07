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
    rules: (): Rule<RuleName, Value>[] => [],
    validityMessages: (): Partial<Record<RuleName, string>> => ({}),
    disabled: false,
  }
);
const emit = defineEmits<VCheckboxGroupEmits<Value>>();

const { modelValue, defaultValue, rules, validityMessages, maxLength } =
  toRefs(props);

const model = computed({
  get: () => modelValue.value,
  set: (value) => emit("update:modelValue", value),
});

const { rootBind, focus } = setVCheckboxGroupContext({
  value: model,
  defaultValue,
  rules,
  validityMessages,
  maxLength,
});

defineExpose({ focus });
</script>

<template>
  <VFieldset :as="as" :disabled="disabled" v-bind="rootBind">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </VFieldset>
</template>
