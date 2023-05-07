<script setup lang="ts">
import { computed } from "vue";
import { VButton } from "~/components";
import type { ComponentAs } from "~/types";
import { useVTooltipContext } from "./context";

interface Props {
  as?: ComponentAs;
}

withDefaults(defineProps<Props>(), { as: VButton });

const { enterDelay, leaveDelay, id, trigger, visible } =
  useVTooltipContext("<VTooltipTrigger>");
const ariaDescribedby = computed(() => (visible.value ? id.value : undefined));

let showTimeout: NodeJS.Timeout | number | undefined;
let hideTimeout: NodeJS.Timeout | number | undefined;
function clearAllTimeout() {
  clearTimeout(showTimeout);
  clearTimeout(hideTimeout);
}

function show() {
  clearAllTimeout();
  showTimeout = setTimeout(() => {
    visible.value = true;
  }, enterDelay.value);
}
function hide(immediately = false) {
  clearAllTimeout();
  const delay = immediately ? 0 : leaveDelay.value;
  hideTimeout = setTimeout(() => {
    visible.value = false;
  }, delay);
}

function handlePointerEvent(event: PointerEvent, toVisible: boolean) {
  if (event.pointerType === "touch") return;
  toVisible ? show() : hide();
}
</script>

<template>
  <component
    :is="as"
    ref="trigger"
    :aria-describedby="ariaDescribedby"
    @focus="show()"
    @blur="hide()"
    @pointerenter="handlePointerEvent($event, true)"
    @pointerleave="handlePointerEvent($event, false)"
    @click="hide(true)"
  >
    <slot />
  </component>
</template>
