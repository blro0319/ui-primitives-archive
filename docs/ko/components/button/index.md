<script setup lang="ts">
import Snippet from "./Snippet.vue";
</script>

# Button

## 개요

버튼은 사용자가 다양한 이벤트를 발생시킬 수 있도록 하는 컴포넌트입니다. 링크는 자원을 가리키는 컴포넌트입니다. 자원은 페이지, 파일 등이 될 수 있습니다. UI Primitives는 버튼과 링크를 구분하지 않습니다. 대신 `href` 속성과 `to` 속성을 사용하여 버튼과 링크를 구분합니다.

> [ARIA 버튼 디자인 패턴](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
>
> [ARIA 링크 디자인 패턴](https://www.w3.org/WAI/ARIA/apg/patterns/link/)

<VComponentPreview>
  <Snippet />
</VComponentPreview>

::: code-group

<<< @/ko/components/button/Snippet.vue#template [Template]
<<< @/ko/components/button/Snippet.vue#script [Script]
<<< @/ko/components/button/Snippet.vue#styles [Styles]

:::

## `<VButton>`

### 속성

`href`

: - 유형: `string`

  [`<a>` 요소의 `href` 속성](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#attr-href)과 같습니다. 내부 라우트가 아닌 URL을 가리킬 때 사용합니다. 설정되면 `<a>` 요소로 렌더링합니다. 그리고 [`rel` 속성](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#attr-rel)을 `"noopener noreferrer"`로 설정합니다.

`to`

: - 유형: [`RouteLocationRaw`](https://router.vuejs.org/api/#Type-Aliases-RouteLocationRaw)

  내부 라우트를 가리킬 때 사용합니다. 설정되면 `<RouterLink>` 컴포넌트로 렌더링됩니다.

`target`

: - 유형: `string`
  - 기본값: `href` 속성이 설정되면 `"_blank"`, `to` 속성이 설정되면 `"_self"`

  [`<a>` 요소의 `target` 속성](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a#attr-target) 속성과 같습니다.

`type`

: - 유형: `"submit" | "reset" | "button"`
  - 기본값: `"button"`

  [`<button>` 요소의 `type` 속성](https://developer.mozilla.org/ko/docs/Web/HTML/Element/button#attr-type)과 같습니다. 대신 기본값이 `"button"`입니다. 링크로 사용될 때는 무시됩니다.

`disabled`

: - 유형: `boolean`
  - 기본값: `false`

  [`<button>` 요소의 `disabled` 속성](https://developer.mozilla.org/ko/docs/Web/HTML/Element/button#attr-disabled)과 같습니다. 링크로 사용될 때는 무시됩니다.

### 메소드

`focus`

: - 유형: `(options?: FocusOptions) => void`

  초점을 설정합니다. [`HTMLElement`의 `focus` 메소드](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus)와 같습니다.

`blur`

: - 유형: `() => void`

  초점을 해제합니다. [`HTMLElement`의 `blur` 메소드](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur)와 같습니다.

`click`

: - 유형: `() => void`

  클릭 이벤트를 발생시킵니다. [`HTMLElement`의 `click` 메소드](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/click)와 같습니다.
