<script setup lang="ts">
const visible = ref(false);
const entered = ref(false);
</script>

<template>
  <div class="transition">
    <h1>VTransition</h1>
    <article>
      <h2>Basic Usage</h2>
      <button @click="visible = !visible">Toggle</button>
      {{ entered }}
      <VTransition
        name="transition"
        @after-enter="entered = true"
        @after-leave="entered = false"
      >
        <div v-if="visible">Hello, Transition!</div>
      </VTransition>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.transition {
  &-enter-active,
  &-leave-active {
    transition: opacity 500ms;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
