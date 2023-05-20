<script setup lang="ts">
import {
  VTooltip,
  VTooltipTrigger,
  VTooltipContent,
} from "@blro/ui-primitives-vue";
</script>

<template>
  <VTooltip>
    <VTooltipTrigger class="trigger">안녕하세요</VTooltipTrigger>
    <VTooltipContent class="content">반갑습니다</VTooltipContent>
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
