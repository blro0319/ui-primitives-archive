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

const { legendText } = setVFieldsetContext({ disabled });

const bind = computed(() => {
  return {
    disabled: disabled.value,
  } satisfies VBindAttributes<"fieldset">;
});
</script>

<template>
  <VContent :as="as" v-bind="bind">
    <legend
      v-if="legendText"
      :style="{
        overflow: 'hidden',
        position: 'absolute',
        width: '1px',
        height: '1px',
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        whiteSpace: 'nowrap',
      }"
      v-text="legendText"
    />
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </VContent>
</template>
