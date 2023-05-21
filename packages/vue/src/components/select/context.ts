import { onClickOutside } from "@vueuse/core";
import { clamp } from "lodash-es";
import { computed, type HTMLAttributes, onMounted, ref } from "vue";
import { useGlobalEscapeStack } from "~/composables";
import { createContext, createEventHooks, randomStr } from "~/utils";
import type { SetVSelectContextOptions, VSelectOptionProps } from "./types";
import { useSelectMenuShortcut } from "./composables/useMenuShortcut";

const { setContext, useContext } = createContext(
  "<VSelect>",
  (options: SetVSelectContextOptions) => {
    const hooks = createEventHooks<{
      showMenu(): void;
      hideMenu(): void;
    }>();

    const { value } = options;
    const multiple = computed(() => Array.isArray(value.value));

    const model = computed({
      get() {
        if (Array.isArray(value.value)) return value.value;
        return [value.value];
      },
      set(newValue) {
        if (multiple.value) value.value = newValue;
        else value.value = newValue.at(0);
      },
    });

    const id = ref("");
    onMounted(() => {
      id.value = "v-select-" + randomStr();
    });

    // ----- Triggers ----- //

    const triggerElement = ref<HTMLElement>();
    function focus(options?: FocusOptions) {
      triggerElement.value?.focus(options);
    }

    const triggerAttrs = computed(() => {
      return {
        role: "combobox",
        "aria-multiselectable": multiple.value ? "true" : "false",
        "aria-autocomplete": "none",
        "aria-controls": `${id.value}-menu`,
        "aria-expanded": menuOpened.value ? "true" : "false",
      } satisfies HTMLAttributes;
    });

    // ----- Menu ----- //

    const menuElement = ref<HTMLUListElement>();
    const menuOpened = ref(false);
    const escapeStack = useGlobalEscapeStack(() => {
      closeMenu();
      focus();
    });

    onClickOutside(menuElement, closeMenu, { ignore: [triggerElement] });
    useSelectMenuShortcut(menuElement);

    function toggleMenu() {
      if (menuOpened.value) closeMenu();
      else showMenu();
    }
    function showMenu() {
      escapeStack.create();
      menuOpened.value = true;
      setActiveIndex(firstSelectedIndex.value);
      hooks.trigger("showMenu");
    }
    function closeMenu() {
      escapeStack.revoke();
      menuOpened.value = false;
      hooks.trigger("hideMenu");
    }

    // ----- Items ----- //

    const items = ref<VSelectOptionProps[]>([]);
    const lastSelectedIndex = ref(-1);

    const selectedItems = computed(() => {
      return items.value.filter(({ value }) => model.value.includes(value));
    });
    const firstSelectedIndex = computed(() => {
      return items.value.findIndex(({ value }) => model.value.includes(value));
    });
    const allSelected = computed(() => {
      return selectedItems.value.length === items.value.length;
    });

    // ----- Controls ----- //

    const activeIndex = ref(0);
    const activeItem = computed(() => items.value.at(activeIndex.value));

    function setActiveIndex(index: number) {
      activeIndex.value = clamp(index, 0, items.value.length - 1);
    }
    function moveActiveIndex(delta: number) {
      setActiveIndex(activeIndex.value + delta);
    }

    function toggleOption(index: number) {
      const item = items.value.at(index);
      if (!item) return;

      if (!model.value.includes(item.value)) selectOption(index);
      else deselectOption(index);
    }
    function selectOption(index: number) {
      const item = items.value.at(index);
      if (!item) return;

      if (!multiple.value) model.value = [item.value];
      else model.value = model.value.concat([item.value]);

      lastSelectedIndex.value = index;
    }
    function selectOptionByRange(start: number, end: number) {
      if (!multiple.value) return;

      const newArray = [...model.value];
      items.value.slice(start, end).forEach(({ value }) => {
        if (!model.value.includes(value)) newArray.push(value);
      });
      model.value = newArray;
    }
    function selectAllOptions() {
      if (!multiple.value) return;

      model.value = items.value.map((item) => item.value);
      lastSelectedIndex.value = -1;
    }

    function deselectOption(index: number) {
      if (!multiple.value) return;
      const item = items.value.at(index);
      if (!item) return;

      model.value = model.value.filter((value) => value !== item.value);
      lastSelectedIndex.value = index;
    }
    function deselectAllOptions() {
      if (!multiple.value) return;

      model.value = [];
      lastSelectedIndex.value = -1;
    }

    return {
      hooks,
      model,
      multiple,
      id,
      // Triggers
      triggerElement,
      triggerAttrs,
      focus,
      // Menu
      menuElement,
      menuOpened,
      toggleMenu,
      showMenu,
      closeMenu,
      // Items
      items,
      lastSelectedIndex,
      selectedItems,
      firstSelectedIndex,
      allSelected,
      // Controls
      activeIndex,
      activeItem,
      setActiveIndex,
      moveActiveIndex,
      toggleOption,
      selectOption,
      selectOptionByRange,
      selectAllOptions,
      deselectOption,
      deselectAllOptions,
    };
  }
);

export const setVSelectContext = setContext;
export const useVSelectContext = useContext;
