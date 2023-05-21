<script setup lang="ts">
import {
  VSelect,
  VSelectMenu,
  VSelectOption,
  type VSelectOptionProps,
  VSelectTrigger,
} from "@blro/ui-primitives-vue";
import { autoUpdate, flip, offset, size, useFloating } from "@floating-ui/vue";
import { computed, ref } from "vue";

const props = defineProps<{
  modelValue: string | string[];
  options: VSelectOptionProps[];
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string | string[]): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const valueLabel = computed(() => {
  const values = Array.isArray(model.value) ? model.value : [model.value];
  const labels = values.map((value) => {
    const option = props.options.find((option) => option.value === value);
    return option?.label ?? value;
  });
  return labels.join(", ") || "-";
});

const trigger = ref<InstanceType<typeof VSelectTrigger>>();
const menu = ref<InstanceType<typeof VSelectMenu>>();
const open = ref(false);

const { floatingStyles } = useFloating(trigger, menu, {
  placement: "bottom-start",
  strategy: "fixed",
  middleware: [
    offset(8),
    flip({ padding: 8 }),
    size({
      apply({ availableHeight, elements, rects }) {
        const floating = elements.floating;
        // 너비를 VSelectTrigger 요소의 너비로 설정합니다.
        floating.style.width = `${rects.reference.width}px`;
        // 최대 높이를 사용 가능한 높이와 320px 중 작은 값으로 설정합니다.
        floating.style.maxHeight = `${Math.min(availableHeight - 8, 320)}px`;
      },
    }),
  ],
  open,
  whileElementsMounted: autoUpdate,
});
</script>

<template>
  <VSelect v-model="model" @show-menu="open = true" @hide-menu="open = false">
    <VSelectTrigger ref="trigger" class="trigger">
      {{ valueLabel }}
    </VSelectTrigger>
    <VSelectMenu ref="menu" class="menu" :style="floatingStyles">
      <VSelectOption
        v-for="option in props.options"
        :value="option.value"
        class="option"
      >
        {{ option.label }}
      </VSelectOption>
    </VSelectMenu>
  </VSelect>
</template>

<style scoped>
.trigger {
  display: flex;
  align-items: center;

  width: 320px;
  height: 40px;
  padding: 0 8px 0 16px;

  background-color: var(--vp-c-bg-alt);
  border: 2px solid var(--vp-c-bg-alt);
  border-radius: 8px;

  color: var(--vp-c-text-1);
  font-size: 1rem;
  font-weight: normal;

  transition-property: background-color, border-color, color;
  transition-duration: 250ms;
}
.trigger:hover,
.trigger:focus-visible,
.trigger[aria-expanded="true"] {
  border-color: var(--vp-c-brand);
  text-decoration: none;
}

.menu {
  margin: 0;
  padding: 8px 0;

  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.option {
  cursor: pointer;
  list-style: none;

  margin: 0;
  padding: 8px 16px;

  transition: background-color 100ms;
}
.option:hover,
.option[data-v-activated="true"] {
  background-color: var(--vp-c-bg-elv);
}
</style>
