<script setup lang="ts">
import Snippet from "./Snippet.vue";
</script>

# Dialog

## 개요

다이얼로그(모달)은 창 위에 떠 있는 작은 창입니다. 특히 모달 모드일 때 사용자가 다른 창을 조작하지 못하도록 차단합니다.

> [ARIA 다이얼로그 디자인 패턴](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

<VComponentPreview>
  <Snippet />
</VComponentPreview>

::: code-group

<<< @/ko/components/dialog/Snippet.vue#template [Template]
<<< @/ko/components/dialog/Snippet.vue#script [Script]
<<< @/ko/components/dialog/Snippet.vue#styles [Styles]

:::

## 구조

```vue-html
<VDialog>
  <VDialogTitle />
  <VDialogDescription />
</VDialog>
```

## `<VDialog>`

### 속성

`cancelTrigger`
: - 유형: `"all" | "escape" | "history"`
  - 기본값: `"all"`

  다이얼로그를 취소하는 방법을 지정합니다. `escape`로 설정되면 `ESC` 키를 눌렸을 때 다이얼로그가 취소됩니다. `history`로 설정되면 브라우저 뒤로 가기로 다이얼로그가 취소됩니다. 주로 화면을 크게 가려 페이지처럼 보이는 다이얼로그나, 안드로이드의 뒤로 가기 동작을 위해 사용합니다. `all`로 설정되면 `escape`와 `history`가 모두 적용됩니다.

  ::: warning `history` 주의 사항

  `history`는 VitePress처럼 전역에서 `popstate` 이벤트를 사용하는 경우 문제가 발생할 수 있습니다.

  :::

### 메서드

`show`

: ```ts
  function show(): void;
  ```

  다이얼로그를 비모달 모드로 엽니다. [`<dialog>` 요소의 `show` 메서드](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/show)와 같습니다.

`showModal`

: ```ts
  function showModal(): void;
  ```

  다이얼로그를 모달 모드로 엽니다. [`<dialog>` 요소의 `showModal` 메서드](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal)와 같습니다.

`close`

: ```ts
  function close(): void;
  ```

  다이얼로그를 닫습니다. [`<dialog>` 요소의 `close` 메서드](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close)와 같지만 매개변수를 받지 않습니다.

`cancel`

: ```ts
  function cancel(): void;
  ```

  다이얼로그를 취소합니다. `close` 메서드와 비슷하지만 `close` 이벤트 대신 `cancel` 이벤트를 발생시킵니다.

### 이벤트

`show`

: ```ts
  function onShow(): void;
  ```

  다이얼로그가 열릴 때 발생합니다.

`close`

: ```ts
  function onClose(): void;
  ```

  다이얼로그가 닫힐 때 발생합니다.

`cancel`

: ```ts
  function onCancel(event: Event): void;
  ```

  > [`Event` 객체](https://developer.mozilla.org/en-US/docs/Web/API/Event)

  다이얼로그가 취소될 때 발생합니다. 이벤트는 [`preventDefault` 메서드](https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault)나 [`.prevent` 수정자](https://vuejs.org/guide/essentials/event-handling.html#event-modifiers)로 취소될 수 있습니다.

## `<VDialogTitle>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"div"`

## `<VDialogDescription>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"div"`
