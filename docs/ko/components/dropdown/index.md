<script setup lang="ts">
import Snippet from "./Snippet.vue";
</script>

# Dropdown

## 개요

<VComponentPreview>
  <Snippet />
</VComponentPreview>

::: code-group

<<< @/ko/components/dropdown/Snippet.vue#template [Template]
<<< @/ko/components/dropdown/Snippet.vue#script [Script]
<<< @/ko/components/dropdown/Snippet.vue#styles [Styles]

:::

## 구조

```vue-html
<VDropdown>
  <VDropdownTrigger />
  <VDropdownMenu>
    <VDropdownItem />
  </VDropdownMenu>
</VDropdown>
```

## `<VDropdown>`

### 이벤트

`show-menu`

: ```ts
  function onShowMenu(): void;
  ```

  드롭다운 메뉴가 열릴 때 발생합니다.

`hide-menu`

: ```ts
  function onHideMenu(): void;
  ```

  드롭다운 메뉴가 닫힐 때 발생합니다.

## `<VDropdownTrigger>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"button"`

  [`<button>` 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/button)처럼 클릭 가능한 요소로 설정해야 합니다.

## `<VDropdownMenu>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"div"`

`loop`

: - 유형: `boolean`
  - 기본값: `false`

  `true`로 설정되면 방향키로 탐색할 때 처음 요소에서 이전으로 가면 마지막 요소로, 마지막 요소에서 다음으로 가면 처음 요소로 초점이 이동합니다. [`<VRovingTabindex>` 컴포넌트](/ko/components/roving-tabindex)의 `loop` 속성과 같습니다.

## `<VDropdownItem>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"button"`

  [`<button>` 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/button)처럼 클릭 가능한 요소로 설정해야 합니다.
