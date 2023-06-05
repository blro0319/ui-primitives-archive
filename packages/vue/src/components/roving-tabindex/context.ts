import { unrefElement } from "@vueuse/core";
import {
  type ComponentPublicInstance,
  computed,
  type MaybeRefOrGetter,
  nextTick,
  onMounted,
  onUpdated,
  ref,
  toValue,
} from "vue";
import { useId } from "~/composables";
import type { VBindAttributes } from "~/types";
import { createContext, createEventHooks } from "~/utils";
import type {
  VRovingTabindexChangeEvent,
  VRovingTabindexOrientation,
} from "./types";

const { setContext, useContext } = createContext(
  "<VRovingTabindex>",
  (options: SetVRovingTabindexContextOptions = {}) => {
    const hooks = createEventHooks<{
      change(event: VRovingTabindexChangeEvent): void;
    }>();

    const id = useId();

    const orientation = computed(() => {
      return toValue(options.orientation) || "horizontal";
    });
    const loop = computed(() => toValue(options.loop) || false);

    // ----- Root ----- //

    const root = ref<ComponentPublicInstance | HTMLElement>();
    const rootElement = computed(() => unrefElement(root.value));

    const rootBind = {
      ref: root,
      onKeydown: handleKeyDown,
    } satisfies VBindAttributes;

    function handleKeyDown(event: KeyboardEvent) {
      const prevKey = PREV_KEYS[orientation.value];
      const nextKey = NEXT_KEYS[orientation.value];

      switch (event.key) {
        case prevKey:
          event.preventDefault();
          event.stopPropagation();
          moveActiveItem("prev");
          break;
        case nextKey:
          event.preventDefault();
          event.stopPropagation();
          moveActiveItem("next");
          break;
        case "Home":
          event.preventDefault();
          event.stopPropagation();
          setActiveItemAt(0);
          break;
        case "End":
          event.preventDefault();
          event.stopPropagation();
          setActiveItemAt(items.value.size - 1);
          break;
      }
    }
    const PREV_KEYS = { horizontal: "ArrowLeft", vertical: "ArrowUp" };
    const NEXT_KEYS = { horizontal: "ArrowRight", vertical: "ArrowDown" };

    // ----- Items ----- //

    const items = ref<Set<HTMLElement>>(new Set());
    const activeItem = ref<HTMLElement>();

    onMounted(() => {
      nextTick(updateItems);
    });
    onUpdated(() => {
      nextTick(updateItems);
    });

    function updateItems() {
      if (!rootElement.value) return;
      const selector = `[data-v-roving-tabindex-item="${id.value}"]`;
      const children = rootElement.value.querySelectorAll(selector);
      items.value = new Set(Array.from(children) as HTMLElement[]);

      if (!activeItem.value && children.length > 0) {
        activeItem.value = children[0] as HTMLElement;
      }
    }

    function moveActiveItem(direction: "prev" | "next") {
      if (!activeItem.value) return;

      const itemArray = Array.from(items.value);
      const move = direction === "prev" ? -1 : 1;
      const nextIndex = itemArray.indexOf(activeItem.value) + move;

      if (nextIndex < 0) {
        if (loop.value) setActiveItemAt(itemArray.length - 1);
        else setActiveItemAt(0);
      } else if (nextIndex >= itemArray.length) {
        if (loop.value) setActiveItemAt(0);
        else setActiveItemAt(itemArray.length - 1);
      } else setActiveItemAt(nextIndex);

      if (activeItem.value.ariaDisabled === "true") moveActiveItem(direction);
    }
    function setActiveItemAt(index: number) {
      const target = Array.from(items.value).at(index);
      if (target) setActiveItem(target);
    }
    function setActiveItem(target: HTMLElement) {
      if (activeItem.value === target || !items.value.has(target)) return;
      const old = activeItem.value;
      activeItem.value = target;
      target.focus();
      hooks.trigger("change", { target, old });
    }

    return {
      hooks,
      id,
      orientation,
      loop,
      // Root
      root,
      rootBind,
      // Items
      items,
      activeItem,
      updateItems,
      moveActiveItem,
      setActiveItemAt,
      setActiveItem,
    };
  }
);

export const setVRovingTabindexContext = setContext;
export const useVRovingTabindexContext = useContext;

export interface SetVRovingTabindexContextOptions {
  orientation?: MaybeRefOrGetter<VRovingTabindexOrientation>;
  loop?: MaybeRefOrGetter<boolean>;
}
