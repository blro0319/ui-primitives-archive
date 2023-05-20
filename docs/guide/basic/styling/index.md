<script setup lang="ts">
import Snippet1 from "./Snippet1.vue";
import Snippet2 from "./Snippet2.vue";
import Snippet3 from "./Snippet3.vue";
</script>

# Styling

스타일을 지정하는 방법은 기존 Vue 컴포넌트와 동일합니다. `class`와 `style` 속성을 사용하거나 SFC 스타일 블록을 사용할 수 있습니다.

이 예시에서는 [`VTooltip` 컴포넌트](/ko/components/tooltip)의 스타일을 지정합니다.

## 컴포넌트 배치

먼저 스타일을 입힐 컴포넌트를 배치합니다.

<VComponentPreview style="justify-content: flex-start; gap: 0; height: 90px;">
  <Snippet1 />
</VComponentPreview>

<<< @/ko/guide/basic/styling/Snippet1.vue

## 스타일 지정

그리고 `VTooltipTrigger` 컴포넌트와 `VTooltipContent` 컴포넌트 각각에 `class` 속성을 지정해 스타일을 입힙니다.

<VComponentPreview style="justify-content: flex-start; gap: 0; height: 116px;">
  <Snippet2 />
</VComponentPreview>

<<< @/ko/guide/basic/styling/Snippet2.vue{17-33}

## 외부 라이브러리

컴포넌트는 요소 별로 분리되어 있어 다른 라이브러리와 쉽게 통합할 수 있습니다. 이 예시는 [Floating UI](https://floating-ui.com/)를 이용해 `VTooltipContent` 요소의 위치를 조정합니다.

<VComponentPreview style="justify-content: flex-start; gap: 0;">
  <Snippet3 />
</VComponentPreview>

<<< @/ko/guide/basic/styling/Snippet3.vue{7-18,24-26}

## 주의 사항

`VTooltip` 컴포넌트와 같은 조합 컴포넌트는 최상위 요소가 실제로 렌더링되는 요소가 아닐 수 있습니다. `VTooltipTrigger`나 `VTooltipContent`처럼 실제로 렌더링되는 요소에 스타일을 지정해야 합니다.
