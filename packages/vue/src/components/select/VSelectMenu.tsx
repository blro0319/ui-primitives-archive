import { watchImmediate } from "@vueuse/core";
import { isEqual } from "lodash-es";
import {
  computed,
  defineComponent,
  nextTick,
  type VNode,
  type VNodeNormalizedChildren,
} from "vue";
import { matchCompoundType } from "~/utils";
import { useVSelectContext } from "./context";
import type { VSelectOptionProps } from "./types";

export default defineComponent({
  name: "VSelectMenu",
  setup(_props, { slots }) {
    const { id, menuElement, menuOpened, items, activeItem } =
      useVSelectContext("<VSelectMenu>");
    const activeDescendant = computed(() => {
      if (!activeItem.value) return undefined;
      return id.value + "-option-" + activeItem.value.value;
    });

    watchImmediate(menuOpened, (opened, prevOpened) => {
      if (opened && !prevOpened) {
        nextTick(() => menuElement.value?.focus());
      }
    });

    return () => {
      const children = slots.default?.();
      if (children) {
        const options = filterOptions(children);
        if (!isEqual(options, items.value)) items.value = options;
      }

      return (
        <ul
          ref={menuElement}
          id={id.value + "-menu"}
          style={{ display: menuOpened.value ? undefined : "none" }}
          tabindex="0"
          role="listbox"
          aria-activedescendant={activeDescendant.value}
        >
          {slots.default?.()}
        </ul>
      );
    };
  },
});

function filterOptions(targets: VNode[] | VNodeNormalizedChildren) {
  if (!Array.isArray(targets)) return [];

  const options: VSelectOptionProps[] = [];
  targets.forEach((target) => {
    if (!target || typeof target !== "object") return;

    if (Array.isArray(target)) {
      options.push(...filterOptions(target));
      return;
    }

    if (matchCompoundType(target, "VSelectOption")) {
      options.push(target.props as VSelectOptionProps);
      return;
    }

    if (target.children?.length) {
      options.push(...filterOptions(target.children));
    }
  });

  return options;
}
