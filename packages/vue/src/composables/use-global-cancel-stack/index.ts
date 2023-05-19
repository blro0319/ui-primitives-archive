import type { MaybeRefOrGetter } from "@vueuse/core";
import { computed, toValue } from "vue";
import {
  useGlobalEscapeStack,
  useGlobalHistoryStack,
  type UseGlobalHistoryStackRevokeOptions,
} from "~/composables";

export function useGlobalCancelStack(
  handler: (event: PopStateEvent | KeyboardEvent) => void,
  options?: MaybeRefOrGetter<UseGlobalCancelStackOptions>
) {
  const resolvedOptions = computed(() => {
    const { escape = true, history = true } = toValue(options) || {};
    return { escape, history };
  });

  const escapeStack = useGlobalEscapeStack(_handler);
  const historyStack = useGlobalHistoryStack(_handler);

  function create() {
    if (resolvedOptions.value.escape) escapeStack.create();
    if (resolvedOptions.value.history) historyStack.create();
  }
  function revoke(options?: UseGlobalHistoryStackRevokeOptions) {
    if (resolvedOptions.value.escape) escapeStack.revoke();
    if (resolvedOptions.value.history) historyStack.revoke(options);
  }

  async function _handler(event: PopStateEvent | KeyboardEvent) {
    if (event instanceof PopStateEvent) escapeStack.revoke();
    else await historyStack.revoke({ historyBack: true });
    handler(event);
  }

  return { create, revoke };
}

export interface UseGlobalCancelStackOptions {
  /**
   * @default
   * ```ts
   * true
   * ```
   */
  escape?: boolean;
  /**
   * @default
   * ```ts
   * true
   * ```
   */
  history?: boolean;
}
