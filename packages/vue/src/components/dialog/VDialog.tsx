import {
  type ComponentOptionsMixin,
  defineComponent,
  nextTick,
  type PropType,
  ref,
  toRefs,
  Transition,
  type TransitionProps,
} from "vue";
import {
  useBodyScroll,
  useGlobalCancelStack,
  useListeners,
} from "@/composables";
import type { VCustomEventListener } from "@/types";
import { VCustomEvent, dispatchVCustomEventAsync } from "@/utils";
import { setVDialogContext } from "./context";

export default defineComponent<
  {
    transition: {
      type: PropType<TransitionProps>;
      required: false;
      default: undefined;
    };
  },
  () => false | JSX.Element,
  {},
  {},
  {
    show(): Promise<void>;
    showModal(): Promise<void>;
    close(): void;
    cancel(): Promise<void>;
  },
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    show(): void;
    afterShow(): void;
    close(): void;
    afterClose(): void;
    cancel(event: InstanceType<typeof VCustomEvent>): void;
  },
  string,
  {},
  string
>({
  name: "VDialog",
  inheritAttrs: false,
  props: {
    transition: {
      type: Object as PropType<TransitionProps>,
      required: false,
      default: undefined,
    },
  },
  emits: ["show", "afterShow", "close", "afterClose", "cancel"],
  setup(props, { attrs, emit, expose, slots }) {
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
      if (!transition.value) emit("afterShow");
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

      async function emitCancelEvent() {
        const event = new VCustomEvent("cancel", {
          cancelable: true,
          target: dialog.value,
        });
        const functions = (listeners.cancel || []) as VCustomEventListener[];
        return await dispatchVCustomEventAsync(event, functions);
      }
    }

    setVDialogContext({ cancel, close });

    function handleAfterClose() {
      dialog.value?.close();
      bodyScroll.enable();
      emit("afterClose");
    }

    expose({
      show: () => internalShow("show"),
      showModal: () => internalShow("showModal"),
      close,
      cancel,
    });

    return () => {
      const core = visible.value && (
        <dialog {...attrs} ref={dialog} onCancel={(e) => e.preventDefault()}>
          {slots.default?.()}
        </dialog>
      );
      if (!transition.value) return core;
      return (
        <Transition
          {...transition.value}
          onAfterEnter={() => emit("afterShow")}
          onAfterLeave={handleAfterClose}
        >
          {core}
        </Transition>
      );
    };
  },
});
