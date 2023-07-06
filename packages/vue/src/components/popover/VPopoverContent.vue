<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { VDialog } from "~/components";
import { useVPopoverContext } from "./context";

const { hooks, id, trigger, content } = useVPopoverContext();

// @ts-expect-error
onClickOutside(content, hide, { ignore: [trigger] });

hooks.$on("request-show", show);
hooks.$on("request-hide", hide);

async function show() {
  await content.value?.showModal();
  hooks.trigger("show");
}
function hide() {
  content.value?.close();
}

function handleClose() {
  hooks.trigger("hide");
}
</script>

<template>
  <VDialog
    ref="content"
    :id="id"
    class="v-popover-content"
    @close="handleClose"
    @cancel="handleClose"
  >
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </VDialog>
</template>

<style lang="scss" scoped>
:where(.v-popover-content)::backdrop {
  display: none;
}
</style>
