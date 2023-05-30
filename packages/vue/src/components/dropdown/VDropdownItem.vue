<script setup lang="ts">
import { computed, nextTick } from "vue";
import { VRovingTabindexItem } from "~/components";
import type { VBindAttributes } from "~/types";
import { useVDropdownContext } from "./context";
import type { VDropdownItemProps } from "./types";

withDefaults(defineProps<VDropdownItemProps>(), {
  as: "button",
  asChild: false,
});

const { hideMenu } = useVDropdownContext("VDropdownMenu");

const bind = computed(() => {
  return {
    onClick(event) {
      nextTick(() => {
        if (!event.defaultPrevented) hideMenu();
      });
    },
    role: "menuitem",
  } satisfies VBindAttributes<"button">;
});
</script>

<template>
  <VRovingTabindexItem
    :as="as"
    :as-child="asChild"
    v-slot="slotBind"
    v-bind="bind"
  >
    <slot v-bind="{ ...slotBind, ...bind }" />
  </VRovingTabindexItem>
</template>
