<script setup lang="ts">
import { computed } from "vue";
import { VButton } from "~/components";
import type { ComponentAs } from "~/types";
import { useVTooltipContext } from "./context";
import { useGlobalEscapeStack } from "~/composables";

interface Props {
  as?: ComponentAs;
}

withDefaults(defineProps<Props>(), { as: VButton });

const { enterDelay, leaveDelay, id, trigger, visible, hooks } =
  useVTooltipContext("<VTooltipTrigger>");
const escapeStack = useGlobalEscapeStack(() => hide(true));
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
    escapeStack.create();
    hooks.trigger("show");
  }, enterDelay.value);
}
function hide(immediately = false) {
  clearAllTimeout();
  const delay = immediately ? 0 : leaveDelay.value;
  hideTimeout = setTimeout(() => {
    visible.value = false;
    escapeStack.revoke();
    hooks.trigger("hide");
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
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </component>
</template>
