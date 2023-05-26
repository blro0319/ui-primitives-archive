<script setup lang="ts">
import { unrefElement } from "@vueuse/core";
import { computed, ref, toRefs, type ComponentPublicInstance } from "vue";
import type { VButtonProps } from "./types";

const props = withDefaults(defineProps<VButtonProps>(), {
  type: "button",
  disabled: false,
});

const { href, to, target } = toRefs(props);

const root = ref<HTMLElement | ComponentPublicInstance | null>(null);
const rootElement = computed(() => unrefElement(root.value) as HTMLElement);

const componentIs = computed(() => {
  if (typeof href?.value === "string") return "a";
  if (to?.value) return "RouterLink";
  return "button";
});
const bind = computed(() => {
  return {
    a: {
      href: href?.value,
      rel: "noopener noreferrer",
      target: target?.value ?? "_blank",
    },
    button: {
      type: props.type,
      disabled: props.disabled,
    },
    RouterLink: {
      to: to?.value,
      target: target?.value ?? "_self",
    },
  }[componentIs.value];
});

defineExpose({
  focus(options?: FocusOptions) {
    rootElement.value?.focus(options);
  },
  blur() {
    rootElement.value?.blur();
  },
  click() {
    rootElement.value?.click();
  },
});
</script>

<template>
  <component :is="componentIs" v-bind="bind" ref="root" class="v-button">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.v-button {
  cursor: pointer;

  &[disabled],
  &[aria-disabled="true"] {
    cursor: not-allowed;
  }
}
</style>
