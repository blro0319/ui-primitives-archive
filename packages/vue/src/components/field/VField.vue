<script setup lang="ts">
import { toRefs } from "vue";
import { VContent } from "~/components";
import { setVFieldContext } from "./context";
import type { VFieldProps } from "./types";

const props = withDefaults(defineProps<VFieldProps>(), {
  reportWhen: "submit",
});

const { reportWhen } = toRefs(props);

setVFieldContext({ reportWhen });
</script>

<template>
  <VContent v-bind="$props">
    <slot />
  </VContent>
</template>
