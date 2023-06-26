<script setup lang="ts">
import { computed } from "vue";
import type { ComponentAs, VBindAttributes } from "~/types";
import { useVDropdownContext } from "./context";
import type { VDropdownTriggerProps } from "./types";

withDefaults(defineProps<VDropdownTriggerProps>(), {
  as: (): ComponentAs => "button",
});

const {
  hooks,
  triggerId,
  menuId,
  visible,
  trigger,
  triggerElement,
  toggleMenu,
  showMenu,
} = useVDropdownContext("VDropdownMenu");

hooks.$on("hideMenu", () => {
  triggerElement.value?.focus();
});

const bind = computed(() => {
  return {
    "ref": trigger,
    "id": triggerId.value,
    "onClick"() {
      toggleMenu();
    },
    "onKeydown"(event) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        showMenu();
      } else if (event.key == "ArrowUp") {
        event.preventDefault();
        showMenu("bottom");
      }
    },
    "aria-controls": menuId.value,
    "aria-expanded": visible.value ? "true" : "false",
    "aria-haspopup": "menu",
  } as VBindAttributes<"button">;
});
</script>

<template>
  <component :is="as" v-bind="bind">
    <slot />
  </component>
</template>
