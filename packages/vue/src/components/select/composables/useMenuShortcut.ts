import { useEventListener, type MaybeRefOrGetter } from "@vueuse/core";

// TODO: implement
export function useSelectMenuShortcut(
  target: MaybeRefOrGetter<EventTarget | undefined>
) {
  useEventListener(target, "keydown", () => {});
}
