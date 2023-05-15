<script lang="ts">
import { computed, defineComponent, ref, toRefs, watch } from "vue";
import type { VSelectOptionValue } from "./types";
import { useVSelectContext } from "./context";

interface Props {
  label: string;
  value: VSelectOptionValue;
  disabled?: boolean;
}

export default defineComponent({ vCompoundType: "VSelectOption" });
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), { disabled: false });

const { label, value } = toRefs(props);
const {
  model,
  multiple,
  id,
  focus,
  closeMenu,
  items,
  activeIndex,
  setActiveIndex,
  toggleOption,
  selectOption,
} = useVSelectContext("<VSelectOption>");

const index = computed(() => {
  return items.value.findIndex((item) => item.value === value.value);
});
const selected = computed(() => {
  if (Array.isArray(model.value)) {
    return model.value.includes(value.value);
  } else return model.value === value.value;
});
const activated = computed(() => activeIndex.value === index.value);

const root = ref<HTMLLIElement>();
watch(activated, (activated) => {
  if (!activated) return;
  root.value?.scrollIntoView({ block: "nearest" });
});

function handleClick() {
  if (index.value === -1) return;

  setActiveIndex(index.value);
  if (!multiple.value) {
    selectOption(index.value);
    closeMenu();
    focus();
  } else {
    toggleOption(index.value);
  }
}
function handlePointerEnter() {
  if (index.value === -1) return;
  setActiveIndex(index.value);
}
</script>

<template>
  <li
    ref="root"
    :id="id + '-option-' + value"
    class="v-select-option"
    role="option"
    :aria-disabled="disabled ? 'true' : 'false'"
    :aria-selected="selected ? 'true' : 'false'"
    :data-v-activated="activated ? 'true' : 'false'"
    @click="handleClick()"
    @pointerenter="handlePointerEnter()"
  >
    <slot>{{ label }}</slot>
  </li>
</template>

<style lang="scss" scoped>
.v-select-option {
  cursor: pointer;

  &[aria-disabled="true"] {
    cursor: not-allowed;
  }
}
</style>
