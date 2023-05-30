<script setup lang="ts">
import { computed } from "vue";
import type { ComponentAs, VBindAttributes } from "~/types";
import { useVDropdownContext } from "./context";
import type { VDropdownTriggerProps } from "./types";

withDefaults(defineProps<VDropdownTriggerProps>(), {
  as: (): ComponentAs => "button",
  asChild: false,
});

const { hooks, trigger, triggerElement, toggleMenu, showMenu } =
  useVDropdownContext("VDropdownMenu");

hooks.$on("hideMenu", () => {
  triggerElement.value?.focus();
});

const bind = computed(() => {
  return {
    "ref": trigger,
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
    "aria-haspopup": "menu",
  } as VBindAttributes<"button">;
});
</script>

<template>
  <slot v-if="asChild" v-bind="bind" />
  <component v-else :is="as" v-bind="bind">
    <slot />
  </component>
</template>
