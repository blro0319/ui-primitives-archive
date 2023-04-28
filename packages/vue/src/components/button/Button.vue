<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";

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
</script>

<template>
  <button :type="type" :disabled="disabled" class="button">
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
