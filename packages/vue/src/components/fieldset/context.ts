import { unrefElement } from "@vueuse/core";
import { type ComponentPublicInstance, computed, ref, toValue } from "vue";
import type { VBindAttributes } from "~/types";
import { createContext } from "~/utils";
import type { VFieldsetContextOptions } from "./types";

const { setContext, useContext } = createContext(
  "<VFieldset>",
  (options?: VFieldsetContextOptions) => {
    const disabled = computed(() => toValue(options?.disabled) ?? false);
    const legendText = ref("");

    function updateLegendText() {
      legendText.value = titleElement.value?.textContent ?? "";
    }

    const title = ref<ComponentPublicInstance | HTMLElement>();
    const titleElement = computed(() => unrefElement(title.value));

    const titleBind = computed(() => {
      return {
        "ref": title,
        "aria-hidden": true,
      } satisfies VBindAttributes;
    });

    return {
      disabled,
      legendText,
      updateLegendText,
      // Title
      title,
      titleElement,
      titleBind,
    };
  }
);

export const setVFieldsetContext = setContext;
export const useVFieldsetContext = useContext;
