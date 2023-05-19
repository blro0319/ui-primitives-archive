<script setup lang="ts">
import { VTooltip, VTooltipContent, VTooltipTrigger } from "~/components";
</script>

<template>
  <div class="tooltip">
    <h1>VTooltip</h1>
    <article>
      <h2>Basic Usage</h2>
      <VTooltip>
        <VTooltipTrigger>Hover Me!</VTooltipTrigger>
        <VTooltipContent>Tooltip :)</VTooltipContent>
      </VTooltip>
    </article>
    <article>
      <h2>With Delay</h2>
      <VTooltip :enter-delay="500" :leave-delay="1000">
        <VTooltipTrigger>[500, 1000]</VTooltipTrigger>
        <VTooltipContent>Tooltip :)</VTooltipContent>
      </VTooltip>
    </article>
    <article>
      <h2>With Transition</h2>
      <VTooltip>
        <VTooltipTrigger>Hover Me!</VTooltipTrigger>
        <Transition name="tooltip__transition">
          <VTooltipContent>Tooltip :)</VTooltipContent>
        </Transition>
      </VTooltip>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.tooltip {
  &__transition {
    &-enter-active,
    &-leave-active {
      transition: opacity 250ms;
    }
    &-enter-from,
    &-leave-to {
      opacity: 0;
    }
  }
}
</style>
