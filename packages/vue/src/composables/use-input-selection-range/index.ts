import {
  type MaybeComputedElementRef,
  unrefElement,
  useEventListener,
} from "@vueuse/core";
import { computed, nextTick, reactive } from "vue";

export function useInputSelectionRange(
  target: MaybeComputedElementRef<HTMLInputElement | undefined>
) {
  const $target = computed(() => unrefElement(target));

  const result = reactive({
    start: null as number | null,
    end: null as number | null,
    direction: "none" as "none" | "forward" | "backward",
  });

  useEventListener($target, "keydown", () => {
    nextTick(() => {
      result.start = $target.value?.selectionStart ?? null;
      result.end = $target.value?.selectionEnd ?? null;
      result.direction = $target.value?.selectionDirection ?? "none";
    });
  });

  return result;
}
