import { type ComponentPublicInstance, ref } from "vue";
import { VDialog } from "~/components";
import { useId } from "~/composables";
import { createContext, createEventHooks } from "~/utils";

const { setContext, useContext } = createContext("<VPopover>", () => {
  const hooks = createEventHooks<{
    "request-show"(): void;
    "show"(): void;
    "request-hide"(): void;
    "hide"(): void;
  }>();

  const id = useId("v-popover");
  const trigger = ref<HTMLElement | ComponentPublicInstance>();
  const content = ref<InstanceType<typeof VDialog>>();

  return {
    hooks,
    id,
    trigger,
    content,
  };
});

export const setVPopoverContext = setContext;
export const useVPopoverContext = useContext;
