export function useGlobalEscapeStack(handler: (event: KeyboardEvent) => void) {
  function create() {
    if (!useGlobalEscapeStack.initialized) addWindowHandler();
    useGlobalEscapeStack.stack.push(handler);
  }
  function revoke() {
    const index = useGlobalEscapeStack.stack.findIndex((h) => {
      return h === handler;
    });
    if (index === -1) return;
    useGlobalEscapeStack.stack.splice(index, 1);

    if (!useGlobalEscapeStack.stack.length) removeWindowHandler();
  }

  return { create, revoke };
}
useGlobalEscapeStack.initialized = false;
useGlobalEscapeStack.stack = [] as ((event: KeyboardEvent) => void)[];

function addWindowHandler() {
  window.addEventListener("keydown", handleKeyDown);
  useGlobalEscapeStack.initialized = true;
}
function removeWindowHandler() {
  window.removeEventListener("keydown", handleKeyDown);
  useGlobalEscapeStack.initialized = false;
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.key !== "Escape") return;

  const handler = useGlobalEscapeStack.stack.pop();
  handler?.(event);

  if (!useGlobalEscapeStack.stack.length) removeWindowHandler();
}
