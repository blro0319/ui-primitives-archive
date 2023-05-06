import { useGlobalEscapeStack, useGlobalHistoryStack } from "~/composables";
import type { UseGlobalHistoryStackRevokeOptions } from "~/composables/types";

export function useGlobalCancelStack(
  handler: (event: PopStateEvent | KeyboardEvent) => void
) {
  const escape = useGlobalEscapeStack(_handler);
  const history = useGlobalHistoryStack(_handler);

  function create() {
    escape.create();
    history.create();
  }
  function revoke(options?: UseGlobalHistoryStackRevokeOptions) {
    escape.revoke();
    history.revoke(options);
  }

  async function _handler(event: PopStateEvent | KeyboardEvent) {
    if (event instanceof PopStateEvent) escape.revoke();
    else await history.revoke({ historyBack: true });
    handler(event);
  }

  return { create, revoke };
}
