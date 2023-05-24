import { nextTick, ref } from "vue";
import { createContext, createEventHooks } from "~/utils";

const { setContext, useContext } = createContext("<VDropdown>", () => {
  const hooks = createEventHooks<{
    showMenu(): void;
    hideMenu(): void;
  }>();

  const visible = ref(false);
  const menuRendered = ref(false);

  function showMenu() {
    visible.value = true;
    nextTick(() => {
      menuRendered.value = true;
    });
  }
  function hideMenu() {
    visible.value = false;
  }

  return {
    hooks,
    visible,
    menuRendered,
    showMenu,
    hideMenu,
  };
});

export const setVDropdownContext = setContext;
export const useVDropdownContext = useContext;
