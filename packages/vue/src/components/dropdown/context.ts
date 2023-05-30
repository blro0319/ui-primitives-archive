import { onClickOutside, unrefElement } from "@vueuse/core";
import { type ComponentPublicInstance, computed, nextTick, ref } from "vue";
import type { VRovingTabindex } from "~/components";
import { useGlobalEscapeStack, useId } from "~/composables";
import { createContext, createEventHooks } from "~/utils";

const { setContext, useContext } = createContext("<VDropdown>", () => {
  const hooks = createEventHooks<{
    showMenu(focusAt: "top" | "bottom"): void;
    hideMenu(): void;
  }>();

  const triggerId = useId("v-dropdown-trigger");
  const menuId = useId("v-dropdown-menu");

  const visible = ref(false);

  const trigger = ref<ComponentPublicInstance>();
  const triggerElement = computed(() => unrefElement(trigger.value));

  const menu = ref<InstanceType<typeof VRovingTabindex>>();
  const menuElement = computed(() => {
    return unrefElement(menu.value as ComponentPublicInstance);
  });

  const escapeStack = useGlobalEscapeStack(hideMenu);
  onClickOutside(menuElement, hideMenu, { ignore: [triggerElement] });

  function toggleMenu(focusAt: "top" | "bottom" = "top") {
    if (visible.value) hideMenu();
    else showMenu(focusAt);
  }
  function showMenu(focusAt: "top" | "bottom" = "top") {
    if (visible.value) return;
    escapeStack.create();
    visible.value = true;
    nextTick(() => hooks.trigger("showMenu", focusAt));
  }
  function hideMenu() {
    if (!visible.value) return;
    escapeStack.revoke();
    visible.value = false;
    nextTick(() => hooks.trigger("hideMenu"));
  }

  return {
    hooks,
    triggerId,
    menuId,
    visible,
    trigger,
    triggerElement,
    menu,
    menuElement,
    toggleMenu,
    showMenu,
    hideMenu,
  };
});

export const setVDropdownContext = setContext;
export const useVDropdownContext = useContext;
