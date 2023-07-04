<script setup lang="ts">
import { setVPopoverContext } from "./context";
import type { VPopoverEmits } from "./types";

const emit = defineEmits<VPopoverEmits>();

const { hooks } = setVPopoverContext();

hooks.$on("show", () => emit("show"));
hooks.$on("hide", () => emit("hide"));
</script>

<template>
  <slot />
</template>
