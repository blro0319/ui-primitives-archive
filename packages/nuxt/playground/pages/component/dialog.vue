<script setup lang="ts">
import { VDialog } from "@blro/ui-primitives-vue";

const basic = ref<InstanceType<typeof VDialog>>();
const transition = ref<InstanceType<typeof VDialog>>();
const content = ref<InstanceType<typeof VDialog>>();
const cancelAll = ref<InstanceType<typeof VDialog>>();
const cancelEscape = ref<InstanceType<typeof VDialog>>();
const cancelHistory = ref<InstanceType<typeof VDialog>>();
const preventCancel = ref<InstanceType<typeof VDialog>>();
const halfPreventCancel = ref<InstanceType<typeof VDialog>>();
const nested = ref<InstanceType<typeof VDialog>>();
const nested2 = ref<InstanceType<typeof VDialog>>();

function preventCancelHalf(event: Event) {
  if (Math.random() < 0.5) event.preventDefault();
}
</script>

<template>
  <div class="dialog">
    <h1>VDialog</h1>
    <article>
      <h2>Basic Usage</h2>
      <div class="dialog__button-group">
        <button @click="basic?.show()">Show</button>
        <button @click="basic?.showModal()">Show Modal</button>
      </div>
      <VDialog ref="basic">
        Hello, Dialog!
        <button @click="basic?.close()">Close</button>
      </VDialog>
    </article>
    <article>
      <h2>With Transition</h2>
      <div class="dialog__button-group">
        <button @click="transition?.show()">Show</button>
        <button @click="transition?.showModal()">Show Modal</button>
      </div>
      <VTransition name="dialog__transition">
        <VDialog ref="transition">
          Hello, Transition Dialog!
          <button @click="transition?.close()">Close</button>
        </VDialog>
      </VTransition>
    </article>
    <article>
      <h2>Title & Description</h2>
      <div class="dialog__button-group">
        <button @click="content?.show()">Show</button>
        <button @click="content?.showModal()">Show Modal</button>
      </div>
      <VDialog ref="content">
        <VDialogTitle>Title</VDialogTitle>
        <VDialogDescription>Description</VDialogDescription>
        <button @click="content?.close()">Close</button>
      </VDialog>
    </article>
    <article>
      <h2>Control Cancel Triggers</h2>
      <div class="dialog__button-group">
        <button @click="cancelAll?.show()">Cancel by Escape & History</button>
        <button @click="cancelEscape?.show()">Cancel by Escape</button>
        <button @click="cancelHistory?.show()">Cancel by History</button>
      </div>
      <VDialog ref="cancelAll">
        This dialog will be canceled by escape key and history.
      </VDialog>
      <VDialog cancel-trigger="escape" ref="cancelEscape">
        This dialog will be canceled by escape key.
      </VDialog>
      <VDialog cancel-trigger="history" ref="cancelHistory">
        This dialog will be canceled by history.
      </VDialog>
    </article>
    <article>
      <h2>Prevent Cancel Event</h2>
      <div class="dialog__button-group">
        <button @click="preventCancel?.show()">Show</button>
        <button @click="halfPreventCancel?.show()">Show (50%)</button>
      </div>
      <VDialog ref="preventCancel" @cancel.prevent>
        This dialog will not be canceled.
        <button @click="preventCancel?.close()">Close</button>
        <button @click="preventCancel?.cancel()">
          Cancel (will not working)
        </button>
      </VDialog>
      <VDialog ref="halfPreventCancel" @cancel="preventCancelHalf">
        50% chance to prevent cancel.
        <button @click="halfPreventCancel?.close()">Close</button>
        <button @click="halfPreventCancel?.cancel()">Cancel</button>
      </VDialog>
    </article>
    <article>
      <h2>Nested Dialog</h2>
      <div class="dialog__button-group">
        <button @click="nested?.showModal()">Show</button>
      </div>
      <VDialog ref="nested">
        This is a dialog.
        <button @click="nested2?.showModal()">Show Nested</button>
        <VDialog ref="nested2">This is a nested dialog.</VDialog>
      </VDialog>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.dialog {
  &__button-group {
    display: flex;
    gap: 8px;
  }

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
