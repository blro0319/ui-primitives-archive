<script setup lang="ts">
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  computed,
  ref,
  toRefs,
  type ComponentPublicInstance,
} from "vue";
import { type RouteLocationRaw } from "vue-router";

interface Props {
  href?: AnchorHTMLAttributes["href"];
  to?: RouteLocationRaw;
  /**
   * @default
   * ```ts
   * // When `href` is set
   * "_blank"
   *
   * // When `to` is set
   * "_self"
   * ```
   */
  target?: AnchorHTMLAttributes["target"];
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

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  disabled: false,
});

const { href, to, target } = toRefs(props);

const root = ref<HTMLElement | ComponentPublicInstance | null>(null);
const rootElement = computed(() => {
  if (!root.value) return;
  if (root.value instanceof HTMLElement) return root.value;
  if (root.value.$el instanceof HTMLElement) return root.value.$el;
});

const componentIs = computed(() => {
  if (typeof href?.value === "string") return "a";
  if (to?.value) return "RouterLink";
  return "button";
});
const attrs = computed(() => {
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
  <component :is="componentIs" v-bind="attrs" ref="root" class="v-button">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.v-button {
  cursor: pointer;

  &[disabled] {
    cursor: not-allowed;
  }
}
</style>
