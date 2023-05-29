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
function cancel() {
  dialog.value?.cancel();
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
      <div class="backdrop" @click.self="cancel()" />
      <div class="panel">
        안녕, 다이얼로그!
        <button class="button" @click="close()">닫기</button>
      </div>
    </VDialog>
  </div>
</template>
<!-- #endregion template -->
<!-- #region styles -->
<style scoped>
/* 스타일 초기화 */
button,
div {
  all: unset;
}

.snippet {
  display: flex;
  gap: 8px;
}

.dialog {
  padding: 0;

  background: none;
  border: none;
}
.backdrop {
  position: fixed;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.5);
}
.panel {
  position: relative;
  padding: 16px;
  background-color: #ffffff;
}
.dialog:not(:modal) > .backdrop {
  display: none;
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
