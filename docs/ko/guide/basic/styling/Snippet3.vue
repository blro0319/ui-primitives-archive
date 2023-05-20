<script setup lang="ts">
import {
  VTooltip,
  VTooltipTrigger,
  VTooltipContent,
} from "@blro/ui-primitives-vue";
import { autoUpdate, offset, useFloating } from "@floating-ui/vue";
import { ref } from "vue";

const trigger = ref<InstanceType<typeof VTooltipTrigger>>();
const content = ref<InstanceType<typeof VTooltipContent>>();
const visible = ref(false);

const { floatingStyles } = useFloating(trigger, content, {
  middleware: [offset(8)],
  open: visible,
  whileElementsMounted: autoUpdate,
});
</script>

<template>
  <VTooltip @show="visible = true" @hide="visible = false">
    <VTooltipTrigger ref="trigger" class="trigger">안녕하세요</VTooltipTrigger>
    <VTooltipContent ref="content" class="content" :style="floatingStyles">
      반갑습니다
    </VTooltipContent>
  </VTooltip>
</template>

<style scoped>
.trigger {
  height: 40px;
  padding: 0 1em;

  border: 1px solid currentColor;
  border-radius: 20px;

  font-size: 1rem;
  font-weight: bold;
}

.content {
  padding: 4px 8px;

  border: 1px solid currentColor;
  border-radius: 8px;
}
</style>
