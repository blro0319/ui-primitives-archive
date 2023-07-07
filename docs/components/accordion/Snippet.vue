<!-- #region script -->
<script setup lang="ts">
import {
  VAccordion,
  VAccordionHeader,
  VAccordionItem,
  VAccordionPanel,
  VAccordionTrigger,
} from "@blro/ui-primitives-vue";

const data = [
  {
    title: "href",
    content:
      "하이퍼링크가 가리키는 URL. 링크는 HTTP 기반 URL일 필요는 없고, 브라우저가 지원하는 모든 URL 스킴을 사용할 수 있습니다.",
    initialOpen: true,
  },
  {
    title: "target",
    content:
      "링크한 URL을 표시할 위치. 가능한 값은 브라우징 맥락으로, 즉 탭, 창, <iframe>의 이름이나 특정 키워드입니다.",
    initialOpen: false,
  },
  {
    title: "rel",
    content:
      "하나의 스페이스로 구분하는, 연결한 URL과의 관계를 나타내는 링크 유형 목록.",
    initialOpen: false,
  },
] as const satisfies Readonly<
  { title: string; content: string; initialOpen: boolean }[]
>;
</script>
<!-- #endregion script -->
<!-- #region template -->
<template>
  <div class="snippet">
    <h2 class="title">&lt;a&gt; 요소의 속성</h2>
    <VAccordion class="accordion">
      <VAccordionItem
        v-for="{ content, title, initialOpen } in data"
        :open="initialOpen"
        v-slot="{ opened }"
      >
        <div class="accordion-item" :data-opened="opened">
          <VAccordionHeader class="accordion-header">
            <VAccordionTrigger class="accordion-trigger">
              {{ title }}
              <svg width="16" viewBox="0 0 16 16" class="arrow">
                <path d="M3 6L8 11L13 6" />
              </svg>
            </VAccordionTrigger>
          </VAccordionHeader>
          <VAccordionPanel class="accordion-panel">
            {{ content }}
          </VAccordionPanel>
        </div>
      </VAccordionItem>
    </VAccordion>
  </div>
</template>
<!-- #endregion template -->
<!-- #region styles -->
<style scoped>
/* 스타일 초기화 */
button,
div,
h2,
h3 {
  all: unset;
  box-sizing: border-box;
}

.snippet {
  width: 100%;
  max-width: 320px;
}

.title {
  display: block;
  margin-bottom: 16px;

  font-size: 20px;
  font-weight: bold;
}

.accordion {
  display: flex;
  flex-direction: column;

  border: 1px solid #e7e7e8;
  border-radius: 4px;
}

.accordion-item {
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: #ffffff;
}
.accordion-item:first-child {
  border-radius: 4px 4px 0 0;
}
.accordion-item:last-child {
  border-radius: 0 0 4px 4px;
}

.accordion-header {
  width: 100%;
}
.accordion-item:first-child > .accordion-header {
  border-radius: inherit;
}
.accordion-item[data-opened="false"]:last-child > .accordion-header {
  border-radius: inherit;
}
.accordion-item:not(:first-child) > .accordion-header {
  border-top: 1px solid #e7e7e8;
}

.accordion-trigger {
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 48px;
  padding: 0 16px;

  border-radius: inherit;

  font-weight: bold;

  transition: background-color 100ms;
}
.accordion-trigger:hover {
  background-color: rgba(0 0 0 / 2%);
}
.accordion-trigger:focus-visible {
  position: relative;
  z-index: 1;
  outline: 2px solid #3c3c43;
}
.accordion-trigger > .arrow {
  fill: none;
  stroke: currentColor;
  stroke-width: 1px;

  transition: transform 200ms;
}
.accordion-trigger[aria-expanded="true"] > .arrow {
  transform: rotate(180deg);
}

.accordion-panel {
  padding: 16px;

  border-top: 1px solid #e7e7e8;

  color: #565663;
  font-size: 14px;
}
.accordion-item:last-child > .accordion-panel {
  border-radius: inherit;
}
</style>
<!-- #endregion styles -->
