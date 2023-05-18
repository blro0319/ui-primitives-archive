import { useGlobalEscapeStack, useGlobalHistoryStack } from "~/composables";
import type { UseGlobalHistoryStackRevokeOptions } from "~/composables/types";
import type { UseGlobalCancelStackOptions } from "./types";

export function useGlobalCancelStack(
  handler: (event: PopStateEvent | KeyboardEvent) => void,
  options: UseGlobalCancelStackOptions = {}
) {
  const { escape: useEscape = true, history: useHistory = true } = options;

  const escape = useEscape ? useGlobalEscapeStack(_handler) : null;
  const history = useHistory ? useGlobalHistoryStack(_handler) : null;

  function create() {
    escape?.create();
    history?.create();
  }
  function revoke(options?: UseGlobalHistoryStackRevokeOptions) {
    escape?.revoke();
    history?.revoke(options);
  }

  async function _handler(event: PopStateEvent | KeyboardEvent) {
    if (event instanceof PopStateEvent) escape?.revoke();
    else await history?.revoke({ historyBack: true });
    handler(event);
  }

  return { create, revoke };
}
