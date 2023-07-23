<template>
  <div class="popover">
    <h1>VPopover</h1>
    <article>
      <h2>Basic Usage</h2>
      <VPopover>
        <VPopoverTrigger>Trigger</VPopoverTrigger>
        <VPopoverContent>Content</VPopoverContent>
      </VPopover>
    </article>
    <article>
      <h2>Transition</h2>
      <VPopover>
        <VPopoverTrigger>Trigger</VPopoverTrigger>
        <VTransition name="popover">
          <VPopoverContent>Content</VPopoverContent>
        </VTransition>
      </VPopover>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.popover {
  &-enter-active,
  &-leave-active {
    transition: opacity 300ms;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
