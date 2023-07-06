<script setup lang="ts">
import { toRefs } from "vue";
import type { ComponentAs } from "~/types";
import { setVAccordionContext } from "./context";
import type { VAccordionProps } from "./types";

const props = withDefaults(defineProps<VAccordionProps>(), {
  as: (): ComponentAs => "div",
  expandMode: "single",
});

const { expandMode } = toRefs(props);
const { rootBind } = setVAccordionContext({ expandMode });
</script>

<template>
  <component :is="as" v-bind="rootBind">
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </component>
</template>
