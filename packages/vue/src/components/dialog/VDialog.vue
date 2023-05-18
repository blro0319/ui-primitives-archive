<script lang="ts">
export default defineComponent({ inheritAttrs: false });
</script>

<script setup lang="ts">
import { disableBodyScroll, enableBodyScroll } from "@blro/body-scroll-lock";
import { defineComponent, nextTick, ref, toRefs } from "vue";
import { useGlobalCancelStack, useListeners } from "~/composables";
import {
  VCustomEvent,
  dispatchVCustomEventAsync,
  type VCustomEventListener,
} from "~/utils";
import { setVDialogContext } from "./context";
import type { VDialogEmits, VDialogProps } from ".";

const props = defineProps<VDialogProps>();
const emit = defineEmits<VDialogEmits>();

const { transition, cancelTrigger } = toRefs(props);
const dialog = ref<HTMLDialogElement>();
const visible = ref(false);
let activeElement: HTMLElement | null = null;
let mode: "show" | "showModal" = "show";

const listeners = useListeners();
const cancelStack = useGlobalCancelStack(async () => {
  await cancel();
  if (visible.value) cancelStack.create();
}, cancelTrigger?.value);

async function internalShow(method: "show" | "showModal") {
  if (visible.value) return;
  cancelStack.create();
  visible.value = true;
  await nextTick();

  activeElement = document.activeElement as HTMLElement;
  dialog.value?.[method]();
  if (method === "showModal") {
    disableBodyScroll();
  }

  mode = method;
  emit("show");
  if (!transition?.value) emit("after-show");
}

function close() {
  if (!visible.value) return;
  cancelStack.revoke({ historyBack: true });
  visible.value = false;
  emit("close");
}
async function cancel() {
  if (!visible.value) return;
  const prevented = !(await emitCancelEvent());
  if (prevented) return;
  close();
}
async function emitCancelEvent() {
  const event = new VCustomEvent("cancel", {
    cancelable: true,
    target: dialog.value,
  });
  const functions = (listeners.cancel || []) as VCustomEventListener[];
  return await dispatchVCustomEventAsync(event, functions);
}

setVDialogContext({ cancel, close });

function handleAfterClose() {
  dialog.value?.close();
  activeElement?.focus();
  if (mode === "showModal") enableBodyScroll();
  emit("after-close");
}

defineExpose({
  show: () => internalShow("show"),
  showModal: () => internalShow("showModal"),
  close,
  cancel,
});
</script>

<template>
  <Transition
    v-bind="transition"
    @after-enter="emit('after-show')"
    @after-leave="handleAfterClose"
  >
    <dialog
      v-show="visible"
      v-bind="$attrs"
      ref="dialog"
      class="v-dialog"
      @cancel.prevent
    >
      <slot />
    </dialog>
  </Transition>
</template>

<style lang="scss" scoped>
.v-dialog {
  :where(&) {
    display: block;
  }
}
</style>
