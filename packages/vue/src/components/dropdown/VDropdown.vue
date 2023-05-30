<script setup lang="ts">
import { setVDropdownContext } from "./context";
import type { VDropdownEmits } from "./types";

const emit = defineEmits<VDropdownEmits>();

const { hooks } = setVDropdownContext();
hooks.$on("showMenu", () => emit("show-menu"));
hooks.$on("hideMenu", () => emit("hide-menu"));
</script>

<template>
  <slot />
</template>
