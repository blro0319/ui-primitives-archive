<script setup lang="ts">
import { VDialog } from "@blro/ui-primitive-vue";
import { ref } from "vue";

const dialog = ref<InstanceType<typeof VDialog>>();
</script>

<template>
  <div class="dialog">
    <h1>VDialog</h1>
    <button @click="dialog?.show()">Show</button>
    <button @click="dialog?.showModal()">Show Modal</button>
    <VDialog ref="dialog">
      Hello, Dialog!
      <button @click="dialog?.close()">Close</button>
    </VDialog>
  </div>
</template>

<style lang="scss" scoped>
.dialog {
}
</style>
