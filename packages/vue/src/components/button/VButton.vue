<script setup lang="ts">
import { type ButtonHTMLAttributes, ref } from "vue";

interface Props {
  /**
   * @default
   * ```ts
   * "button"
   * ```
   */
  type?: ButtonHTMLAttributes["type"];
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  type: "button",
  disabled: false,
});

const root = ref<HTMLButtonElement | null>(null);

defineExpose({
  focus(options?: FocusOptions) {
    root.value?.focus(options);
  },
  blur() {
    root.value?.blur();
  },
  click() {
    root.value?.click();
  },
});
</script>

<template>
  <button :type="type" :disabled="disabled" ref="root" class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  cursor: pointer;

  &[disabled] {
    cursor: not-allowed;
  }
}
</style>
