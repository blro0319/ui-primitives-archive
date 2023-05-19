import { isEqual } from "lodash-es";
import {
  defineComponent,
  h,
  type HTMLAttributes,
  type PropType,
  toRefs,
} from "vue";
import { filterCompoundVNodes, type ComponentAs } from "~/index";
import { useVTabsContext } from "./context";
import type { VTabsOrientation, VTabsTriggerProps } from "./types";

export default defineComponent({
  name: "VTabsList",
  props: {
    as: {
      type: [String, Object] as PropType<ComponentAs>,
      default: "div",
    },
    loop: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const { as, loop } = toRefs(props);
    const {
      orientation,
      activationMode,
      triggers,
      triggerSelectMap,
      activeValue,
    } = useVTabsContext("<VTabsList>");

    function handleKeyDown(event: KeyboardEvent) {
      const key = event.key;

      if (!isTargetKey(key)) return;
      if (KEY_ORIENTATION_MAP[key] !== orientation.value) return;

      event.preventDefault();

      const values = triggers.value
        .filter(({ disabled }) => !disabled)
        .map(({ value }) => value);
      const currentIndex = values.indexOf(activeValue.value);
      if (currentIndex === -1) return;

      let nextIndex = currentIndex + KEY_DIR_MAP[key];
      console.log(nextIndex);
      if (nextIndex < 0) {
        nextIndex = loop.value ? values.length - 1 : 0;
      } else if (nextIndex >= values.length) {
        nextIndex = loop.value ? 0 : values.length - 1;
      }

      const selectFn = triggerSelectMap.get(values[nextIndex]!);
      selectFn?.(activationMode.value === "automatic");
    }

    return () => {
      const children = slots.default?.();
      if (children) {
        const nodes = filterCompoundVNodes(children, "VTabsTrigger");
        const propsArray = nodes.map(({ props }) => props as VTabsTriggerProps);
        if (!isEqual(propsArray, triggers.value)) triggers.value = propsArray;
      }

      const props = {
        role: "tablist",
        "aria-orientation": orientation.value,
        onKeydown: handleKeyDown,
      } satisfies HTMLAttributes;

      // [?] Why `as string` is required here?
      // expect-error: No overload matches [ts(2769)]
      return h(as.value as string, props, children);
    };
  },
});

function isTargetKey(key: string): key is keyof typeof KEY_DIR_MAP {
  return key in KEY_DIR_MAP;
}

const KEY_DIR_MAP = {
  ArrowLeft: -1,
  ArrowRight: 1,
  ArrowUp: -1,
  ArrowDown: 1,
} as const satisfies Record<string, -1 | 1>;
const KEY_ORIENTATION_MAP = {
  ArrowLeft: "horizontal",
  ArrowRight: "horizontal",
  ArrowUp: "vertical",
  ArrowDown: "vertical",
} as const as Record<string, VTabsOrientation>;
