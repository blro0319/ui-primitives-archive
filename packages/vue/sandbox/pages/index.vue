<script setup lang="ts">
import { VButton, VDialog } from "@/components";
import { ref } from "vue";

const count = ref(0);
const dialog = ref<InstanceType<typeof VDialog>>();
</script>

<template>
  <div>
    <h1>Blro UI Primitive Vue</h1>
    <VButton @click="count++">Counter: {{ count }}</VButton>
    <VButton to="/foo">Foo</VButton>
    <VButton href="https://vuejs.org">Vue.js</VButton>
    <VButton @click="dialog?.show()">Show</VButton>
    <VButton @click="dialog?.showModal()">Show Modal</VButton>
    <VDialog :transition="{}" ref="dialog">
      Dialog
      <VButton @click="dialog?.close()">Close</VButton>
    </VDialog>
    <VDialog>
      Dialog
      <VButton @click="dialog?.close()">Close</VButton>
    </VDialog>
  </div>
</template>

<style lang="scss" scoped>
.v {
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
