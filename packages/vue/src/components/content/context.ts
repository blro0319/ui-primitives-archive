import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { ref } from "vue";
import { createContext } from "~/utils";

const { setContext, useContext } = createContext(
  "<VContent>",
  () => {
    const labelledBy = ref<string>();
    const describedBy = ref<string[]>([]);

    const rootAttrs = computed(() => {
      return {
        "aria-labelledby": labelledBy.value,
        "aria-describedby": describedBy.value.join(" "),
      } satisfies HTMLAttributes;
    });

    function setLabel(id: string) {
      labelledBy.value = id;
    }
    function addDescription(id: string) {
      describedBy.value.push(id);
    }
    function removeDescription(id: string) {
      const index = describedBy.value.indexOf(id);
      if (index !== -1) describedBy.value.splice(index, 1);
    }

    return {
      labelledBy,
      describedBy,
      rootAttrs,
      setLabel,
      addDescription,
      removeDescription,
    };
  },
  null
);

export const setVContentContext = setContext;
export const useVContentContext = useContext;
