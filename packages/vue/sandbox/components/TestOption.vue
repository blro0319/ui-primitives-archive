<script lang="ts">
import { defineComponent } from "vue";
import { VSelectOption } from "~/components";

interface Props {
  label: string;
  value: string;
}

export default defineComponent({ vCompoundType: "VSelectOption" });
</script>

<script setup lang="ts">
defineProps<Props>();
</script>

<template>
  <VSelectOption v-bind="$props">
    {{ label }}
  </VSelectOption>
</template>
