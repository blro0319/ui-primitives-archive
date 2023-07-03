<script setup lang="ts">
import { computed } from "vue";
import { V_TRANSITION_EVENTS } from "./constants";
import { setVTransitionContext } from "./context";
import type { VTransitionEmits, VTransitionProps } from "./types";

const props = withDefaults(defineProps<VTransitionProps>(), {
  appear: false,
  css: true,
});
const emit = defineEmits<VTransitionEmits>();

const hooks = setVTransitionContext();
const listeners = computed(() => {
  const listeners: Record<string, Function> = {};
  V_TRANSITION_EVENTS.forEach((event) => {
    listeners[event] = (...args: any[]) => {
      // @ts-ignore
      emit(event, ...args);
      // @ts-ignore
      hooks.trigger(event, ...args);
    };
  });
  return listeners;
});
</script>

<template>
  <Transition v-bind="props" v-on="listeners">
    <slot />
  </Transition>
</template>
