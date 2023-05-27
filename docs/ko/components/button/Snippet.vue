<!-- #region script -->
<script setup lang="ts">
import { VButton } from "@blro/ui-primitives-vue";
</script>
<!-- #endregion script -->
<!-- #region template -->
<template>
  <div class="snippet">
    <VButton class="button">버튼</VButton>
    <VButton href="https://github.com/blro0319/ui-primitives" class="link">
      GitHub
    </VButton>
  </div>
</template>
<!-- #endregion template -->
<!-- #region styles -->
<style lang="scss" scoped>
/* 스타일 초기화 */
a,
button {
  all: unset;
  cursor: pointer;
  box-sizing: border-box;
}

.snippet {
  display: flex;
  align-items: center;
  gap: 16px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 0 16px;

  background-color: #10b981;
  border-radius: 8px;
  box-shadow: 0 0 0 0 rgba(16 185 129 / 0%);

  color: #ffffff;

  transition: background-color 100ms, box-shadow 250ms;
}
.button:hover,
.button:focus-visible {
  box-shadow: 0 0 0 4px rgba(16 185 129 / 25%);
}
.button:active {
  background-color: #0fad79;
}

.link {
  color: #007cf0;
}
.link:hover,
.link:focus {
  text-decoration: underline;
}
</style>
<!-- #endregion styles -->
