<script setup lang="ts">
import {
  VTooltip,
  VTooltipContent,
  VTooltipTrigger,
} from "@blro/ui-primitive-vue";
</script>

<template>
  <div class="tooltip">
    <h1>VTooltip</h1>
    <VTooltip>
      <VTooltipTrigger>Hover Me!</VTooltipTrigger>
      <VTooltipContent>Tooltip :)</VTooltipContent>
    </VTooltip>
  </div>
</template>

<style lang="scss" scoped></style>
