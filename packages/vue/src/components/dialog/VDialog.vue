<script lang="ts">
import {
  defineComponent,
  nextTick,
  ref,
  toRefs,
  type TransitionProps,
} from "vue";
import {
  useBodyScroll,
  useGlobalCancelStack,
  useListeners,
} from "~/composables";
import type { VCustomEventListener } from "~/types";
import { VCustomEvent, dispatchVCustomEventAsync } from "~/utils";
import { setVDialogContext } from "./context";

interface Props {
  transition?: TransitionProps;
}
interface Emits {
  (e: "show"): void;
  (e: "after-show"): void;
  (e: "close"): void;
  (e: "after-close"): void;
  (e: "cancel", event: VCustomEvent): void;
}

export default defineComponent({ inheritAttrs: false });
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<Props>(), { transition: undefined });
const emit = defineEmits<Emits>();

const { transition } = toRefs(props);
const dialog = ref<HTMLDialogElement>();
const visible = ref(false);

const listeners = useListeners();
const bodyScroll = useBodyScroll();
const cancelStack = useGlobalCancelStack(async () => {
  await cancel();
  if (visible.value) cancelStack.create();
});

async function internalShow(method: "show" | "showModal") {
  if (visible.value) return;
  cancelStack.create();
  visible.value = true;
  await nextTick();

  dialog.value?.[method]();
  if (method === "showModal") bodyScroll.disable();

  emit("show");
  if (!transition.value) emit("after-show");
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
  if (!transition.value) handleAfterClose();
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
  bodyScroll.enable();
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
    @after-leave="handleAfterClose()"
  >
    <dialog v-show="visible" v-bind="$attrs" ref="dialog" @cancel.prevent>
      <slot />
    </dialog>
  </Transition>
</template>
