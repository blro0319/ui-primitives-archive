<script setup lang="ts">
import { computed, toRefs } from "vue";
import { VContent } from "~/components";
import type { ComponentAs, VBindAttributes } from "~/types";
import { setVFieldsetContext } from "./context";
import type { VFieldsetProps } from "./types";

const props = withDefaults(defineProps<VFieldsetProps>(), {
  as: (): ComponentAs => "fieldset",
  disabled: false,
});

const { disabled } = toRefs(props);

setVFieldsetContext({ disabled });

const bind = computed(() => {
  return {
    disabled: disabled.value,
  } satisfies VBindAttributes<"fieldset">;
});
</script>

<template>
  <VContent :as="as" :as-child="asChild" v-bind="bind" v-slot="slotBind">
    <slot v-bind="{ ...slotBind, ...bind }" />
  </VContent>
</template>
