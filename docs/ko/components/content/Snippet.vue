<!-- #region script -->
<script setup lang="ts">
import {
  VButton,
  VContent,
  VContentDescription,
  VContentTitle,
} from "@blro/ui-primitives-vue";
</script>
<!-- #endregion script -->
<!-- #region template -->
<template>
  <VContent
    :as="VButton"
    href="https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog"
    class="card"
  >
    <VContentTitle class="title">&lt;dialog&gt;: 대화 상자 요소</VContentTitle>
    <VContentDescription as="p" class="description">
      HTML &lt;dialog&gt; 요소는 닫을 수 있는 경고, 검사기, 창 등 대화 상자 및
      기타 다른 상호작용 가능한 컴포넌트를 나타냅니다.
    </VContentDescription>
  </VContent>
</template>
<!-- #endregion template -->
<!-- #region styles -->
<style lang="scss" scoped>
a,
div,
p {
  all: unset;
}

.card {
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  max-width: 280px;
  padding: 16px;

  border: 1px solid #e7e7e8;
  border-radius: 8px;

  transition: background-color 100ms;
}
.card:hover {
  background-color: rgba(0 0 0 / 2%);
  text-decoration: none;
}

.title {
  font-weight: bold;
}
.description {
  font-size: 14px;
}
</style>
<!-- #endregion styles -->
