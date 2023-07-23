<script setup lang="ts">
import Snippet from "./Snippet.vue";
</script>

# Roving Tabindex

## 개요

<VComponentPreview>
  <Snippet />
</VComponentPreview>

::: code-group

<<< @/components/roving-tabindex/Snippet.vue#template [Template]
<<< @/components/roving-tabindex/Snippet.vue#script [Script]
<<< @/components/roving-tabindex/Snippet.vue#styles [Styles]

:::

## 구조

```vue-html
<VRovingTabindex>
  <VRovingTabindexItem />
</VRovingTabindex>
```

## `<VRovingTabindex>`

### 속성

`as`

: - 유형: [`ComponentAs`](/api/types/component-as/)
  - 기본값: `"div"`

`orientation`

: - 유형: `"horizontal" | "vertical"`
  - 기본값: `"horizontal"`

  인덱스 이동 방향입니다. `horizontal`로 설정하면 왼쪽/오른쪽 방향키로 탐색할 수 있습니다. `vertical`로 설정하면 위/아래 방향키로 탐색할 수 있습니다.

`loop`

: - 유형: `boolean`
  - 기본값: `false`

  `true`로 설정되면 인덱스가 끝에서 이동했을 때 반대쪽 끝으로 이동합니다.

### 메서드

`moveActiveItem`

: ```ts
  function moveActiveItem(direction: "prev" | "next"): void;
  ```

`setActiveItemAt`

: ```ts
  function setActiveItemAt(index: number): void;
  ```

`setActiveItem`

: ```ts
  function setActiveItem(target: HTMLElement): void;
  ```

### 이벤트

`change`

: ```ts
  function onChange(event: VRovingTabindexChangeEvent): void;

  interface VRovingTabindexChangeEvent {
    target: HTMLElement;
    old?: HTMLElement;
  }
  ```

  활성화된 항목이 변경되었을 때 발생합니다.

## `<VRovingTabindexItem>`

### 속성

`as`

: - 유형: [`ComponentAs`](/api/types/component-as/)
  - 기본값: [`VButton`](/components/button/)

  [`<button>` 요소](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)처럼 클릭 가능한 요소로 설정해야 합니다.

`disabled`

: - 유형: `boolean`
  - 기본값: `false`

  `true`로 설정되면 인덱스 이동에서 제외됩니다.
