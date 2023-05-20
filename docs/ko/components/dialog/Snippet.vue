<!-- #region script -->
<script setup lang="ts">
import { VDialog } from "@blro/ui-primitives-vue";
import { ref } from "vue";

const dialog = ref<InstanceType<typeof VDialog>>();

function show() {
  dialog.value?.show();
}
function showModal() {
  dialog.value?.showModal();
}
function close() {
  dialog.value?.close();
}
</script>
<!-- #endregion script -->
<!-- #region template -->
<template>
  <button class="button" @click="show()">열기</button>
  <button class="button" @click="showModal()">모달로 열기</button>
  <VDialog :transition="{ name: 'dialog' }" ref="dialog" class="dialog">
    안녕, 다이얼로그!
    <button class="button" @click="close()">닫기</button>
  </VDialog>
</template>
<!-- #endregion template -->
<!-- #region styles -->
<style lang="scss" scoped>
.dialog {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  background-color: var(--vp-c-bg-elv);
  border: var(--vp-c-divider);
  border-radius: 12px;
}
.dialog::backdrop {
  background-color: rgba(0 0 0 / 60%);
}

.dialog-enter-active,
.dialog-leave-active {
  transition-property: opacity, transform;
  transition-duration: 250ms;
}
.dialog-enter-active::backdrop,
.dialog-leave-active::backdrop {
  transition: opacity 250ms;
}
.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(96%);
}
.dialog-enter-from::backdrop,
.dialog-leave-to::backdrop {
  opacity: 0;
}

.button {
  padding: 0 20px;
  font-size: 1rem;

  background-color: var(--vp-button-alt-bg);
  border: 1px solid var(--vp-button-alt-border);
  border-radius: 20px;

  color: var(--vp-button-alt-text);
  font-size: 14px;
  line-height: 38px;

  transition-property: background-color, border-color, color;
  transition-duration: 250ms;
}
.button:hover {
  background-color: var(--vp-button-alt-hover-bg);
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
}
.button:active {
  background-color: var(--vp-button-alt-active-bg);
  border-color: var(--vp-button-alt-active-border);
  color: var(--vp-button-alt-active-text);
}
</style>
<!-- #endregion styles -->
