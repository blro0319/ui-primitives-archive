export function useBodyScrollLock() {
  function disableBodyScroll() {
    if (typeof window === "undefined") return;
    if (!window.__useBodyScroll) {
      window.__useBodyScroll = {
        count: 0,
        originStyles: { overflow: "", paddingRight: "" },
      };
    }

    window.__useBodyScroll.count++;
    if (window.__useBodyScroll.count === 1) {
      window.__useBodyScroll.originStyles = {
        overflow: document.body.style.overflow,
        paddingRight: document.body.style.paddingRight,
      };

      document.body.style.overflow = "hidden";
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      window.__useBodyScroll.count--;

      if (window.__useBodyScroll.count === 0) {
        const { overflow, paddingRight } = window.__useBodyScroll.originStyles;
        document.body.style.overflow = overflow;
        document.body.style.paddingRight = paddingRight;
      }
    };
  }

  function preventTouchMove(event: TouchEvent) {
    if (event.targetTouches.length === 1) event.preventDefault();
  }

  return { disableBodyScroll, preventTouchMove };
}
