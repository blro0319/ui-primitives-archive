<script setup lang="ts">
import {
  VButton,
  VDialog,
  VSelect,
  VSelectMenu,
  VSelectTrigger,
  VTooltip,
  VTooltipContent,
  VTooltipTrigger,
} from "~/components";
import { ref } from "vue";
import TestOption from "#playground/components/TestOption.vue";

const count = ref(0);
const dialog = ref<InstanceType<typeof VDialog>>();
const value = ref(["0"]);
</script>

<template>
  <div>
    <h1>Blro UI Primitive Vue</h1>
    <VTooltip :enter-delay="1000" :leave-delay="1000">
      <VTooltipTrigger :as="VButton" @click="count++">Counter</VTooltipTrigger>
      <VTooltipContent style="position: fixed">{{ count }}</VTooltipContent>
    </VTooltip>
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
    <VSelect v-model="value">
      <VSelectTrigger />
      <VSelectMenu>
        <TestOption
          v-for="value in [0, 1, 2, 3]"
          :label="`${value}`"
          :value="`${value}`"
        >
          {{ value }}
        </TestOption>
      </VSelectMenu>
    </VSelect>
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
