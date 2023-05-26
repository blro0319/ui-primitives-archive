<script setup lang="ts">
import Snippet from "./Snippet.vue";
</script>

# Accordion

## 개요

아코디언은 세로로 쌓인 헤더와 패널 내용의 집합입니다. 패널의 내용은 헤더의 상호작용으로 숨기거나 표시할 수 있습니다.

> [ARIA 아코디언 디자인 패턴](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

<VComponentPreview>
  <Snippet />
</VComponentPreview>

::: code-group

<<< @/ko/components/accordion/Snippet.vue#template [Template]
<<< @/ko/components/accordion/Snippet.vue#script [Script]
<<< @/ko/components/accordion/Snippet.vue#styles [Styles]

:::

## 구조

```vue-html
<VAccordion>
  <VAccordionItem>
    <VAccordionHeader>
      <VAccordionTrigger />
    </VAccordionHeader>
    <VAccordionPanel />
  </VAccordionItem>
</VAccordion>
```

## `<VAccordion>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"div"`

`asChild`

: - 유형: `boolean`
  - 기본값: `false`

`expandMode`

: - 유형: `"single" | "multiple"`
  - 기본값: `"single"`

  `single`로 설정되면 최대 하나의 패널만 확장됩니다. `multiple`로 설정되면 여러 패널을 동시에 열 수 있습니다.

## `<VAccordionItem>`

### 속성

`open`

: - 유형: `boolean`
  - 기본값: `false`

  `true`로 설정되면 항목을 기본적으로 열어둡니다. `<VAccordion>`의 `expandMode`가 `single`로 설정되어 있으면 하나의 항목에만 설정해야 합니다.

### 슬롯 속성

`opened`

: - 유형: `boolean`

  항목이 열려있을 때 `true`를 넘겨줍니다. 아니면 `false`를 넘겨줍니다.

## `<VAccordionHeader>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"h3"`

  `role` 속성이 `heading`이고, `aria-level` 속성을 가진 요소로 설정해야 합니다. [`<h1>` ~ `<h6>`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements) 요소를 사용하는 것이 좋습니다.

`asChild`

: - 유형: `boolean`
  - 기본값: `false`

## `<VAccordionTrigger>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"button"`

  [`<button>` 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/button)처럼 클릭 가능한 요소로 설정해야 합니다.

`asChild`

: - 유형: `boolean`
  - 기본값: `false`

## `<VAccordionPanel>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"div"`

`asChild`

: - 유형: `boolean`
  - 기본값: `false`
