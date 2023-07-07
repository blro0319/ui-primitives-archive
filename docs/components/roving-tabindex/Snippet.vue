<!-- #region script -->
<script setup lang="ts">
import { VRovingTabindex, VRovingTabindexItem } from "@blro/ui-primitives-vue";
import { ref } from "vue";

const TABS = ["NPM", "PNPM", "Yarn"] as const;
const currentTab = ref<(typeof TABS)[number]>(TABS[0]);
</script>
<!-- #endregion script -->
<!-- #region template -->
<template>
  <div class="snippet">
    <VRovingTabindex class="list">
      <VRovingTabindexItem
        v-for="tab in TABS"
        class="item"
        :data-active="currentTab === tab"
        @click="currentTab = tab"
      >
        {{ tab }}
      </VRovingTabindexItem>
    </VRovingTabindex>
    <div class="panel">
      {{ currentTab }}
    </div>
  </div>
</template>
<!-- #endregion template -->
<!-- #region styles -->
<style scoped>
/* 스타일 초기화 */
button {
  all: unset;
}

.snippet {
  width: 100%;
  max-width: 420px;
}

.list {
  box-sizing: border-box;

  display: flex;

  width: 100%;
  height: 40px;

  border-bottom: 1px solid #c6c6c8;
}

.item {
  cursor: pointer;

  position: relative;

  display: flex;
  align-items: center;

  height: 100%;
  padding: 0 8px;

  border-radius: 4px 4px 0 0;

  transition: background-color 150ms;
}
.item[data-active="true"]::after {
  content: "";

  position: absolute;
  right: 0;
  bottom: -1px;
  left: 0;

  display: block;

  height: 4px;

  background-color: currentColor;
}
.item:hover,
.item:focus-visible {
  background-color: rgba(0 0 0 / 4%);
}
.item:active {
  background-color: rgba(0 0 0 / 8%);
}

.panel {
  padding: 16px;
}
</style>
<!-- #endregion styles -->
