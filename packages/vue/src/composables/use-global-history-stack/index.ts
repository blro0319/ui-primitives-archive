import { findLastIndex } from "lodash-es";
import type { MaybePromise } from "~/types";

export function useGlobalHistoryStack(handler: (event: PopStateEvent) => void) {
  function create() {
    if (!useGlobalHistoryStack.initialized) addWindowHandler();

    useGlobalHistoryStack.stack.push(handler);
    if (useGlobalHistoryStack.stack.length === 1) history.pushState(null, "");
  }
  function revoke(
    options?: UseGlobalHistoryStackRevokeOptions
  ): MaybePromise<void> {
    const index = findLastIndex(
      useGlobalHistoryStack.stack,
      (h) => h === handler
    );
    if (index === -1) return;
    useGlobalHistoryStack.stack.splice(index, 1);

    if (options?.historyBack) {
      useGlobalHistoryStack.isRevoke = true;
      return new Promise<void>((resolve) => {
        useGlobalHistoryStack.revokeResolve = resolve;
        history.back();
      });
    }

    if (!useGlobalHistoryStack.stack.length) removeWindowHandler();
  }

  return { create, revoke };
}
useGlobalHistoryStack.initialized = false;
useGlobalHistoryStack.isRevoke = false;
useGlobalHistoryStack.revokeResolve = <(() => void) | undefined>undefined;
useGlobalHistoryStack.stack = [] as ((event: PopStateEvent) => void)[];

function addWindowHandler() {
  window.addEventListener("popstate", handlePopState);
  useGlobalHistoryStack.initialized = true;
}
function removeWindowHandler() {
  window.removeEventListener("popstate", handlePopState);
  useGlobalHistoryStack.initialized = false;
}

function handlePopState(event: PopStateEvent) {
  if (useGlobalHistoryStack.isRevoke) {
    useGlobalHistoryStack.revokeResolve?.();
    useGlobalHistoryStack.isRevoke = false;
  } else {
    const handler = useGlobalHistoryStack.stack.pop();
    handler?.(event);
  }
  if (!useGlobalHistoryStack.stack.length) removeWindowHandler();
  if (useGlobalHistoryStack.stack.length) history.pushState(null, "");
}

export interface UseGlobalHistoryStackRevokeOptions {
  historyBack: boolean;
}
