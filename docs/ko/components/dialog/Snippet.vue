<!-- #region script -->
<script setup lang="ts">
import {
  VDialog,
  VDialogDescription,
  VDialogTitle,
} from "@blro/ui-primitives-vue";
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
  <div class="snippet">
    <button class="button" @click="show()">열기</button>
    <button class="button" @click="showModal()">모달로 열기</button>
    <VDialog
      :transition="{ name: 'dialog' }"
      cancel-trigger="escape"
      ref="dialog"
      class="dialog"
    >
      <VDialogTitle as="h2" class="title">안녕, 다이얼로그!</VDialogTitle>
      <VDialogDescription as="p">
        다이얼로그는 모달이나 모달이 아닌 형태로 열 수 있습니다.
      </VDialogDescription>
      <button class="button" @click="close()">닫기</button>
    </VDialog>
  </div>
</template>
<!-- #endregion template -->
<!-- #region styles -->
<style scoped>
/* 스타일 초기화 */
button,
div,
h2,
p {
  all: unset;
}

.snippet {
  display: flex;
  gap: 8px;
}

.dialog {
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  padding: 16px;

  background-color: #ffffff;
  border: 1px solid #e7e7e8;
  border-radius: 16px;

  color: inherit;
}
.dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
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
  transform: translateY(16px) scale(90%);
}
.dialog-enter-from::backdrop,
.dialog-leave-to::backdrop {
  opacity: 0;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.button {
  cursor: pointer;

  display: flex;
  align-items: center;

  height: 40px;
  padding: 0 16px;

  background-color: #10b981;
  border-radius: 8px;
  box-shadow: 0 0 0 0 rgba(16 185 129 / 0%);

  color: #ffffff;

  transition: background-color 150ms, box-shadow 150ms;
}
.button:hover,
.button:focus-visible {
  box-shadow: 0 0 0 4px rgba(16 185 129 / 25%);
}
.button:active {
  background-color: #10a372;
}
</style>
<!-- #endregion styles -->
