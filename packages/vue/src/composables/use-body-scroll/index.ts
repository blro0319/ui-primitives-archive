import { useInstance } from "@/composables";

export function useBodyScroll() {
  const instance = useInstance();

  function disable() {
    const target = instance.$el;
    if (!(target instanceof HTMLElement)) return;

    if (!useBodyScroll.disableMap.size) setOverflowHidden();
    useBodyScroll.disableMap.set(target, true);

    function setOverflowHidden() {
      const scrollBarWidth = getScrollbarWidth();

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollBarWidth + "px";

      function getScrollbarWidth() {
        return window.innerWidth - document.body.clientWidth;
      }
    }
  }

  function enable() {
    const target = instance.$el;
    if (!(target instanceof HTMLElement)) return;
    useBodyScroll.disableMap.delete(target);
    resetOverflow();

    function resetOverflow() {
      if (useBodyScroll.disableMap.size) return;
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }

  function preventTouchMove(event: TouchEvent) {
    if (event.targetTouches.length !== 1) return;
    event.preventDefault();
  }

  return { disable, enable, preventTouchMove };
}
useBodyScroll.disableMap = new Map<HTMLElement, true>();
useBodyScroll.scrollTop = 0;
