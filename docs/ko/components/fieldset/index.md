<script setup lang="ts">
import Snippet from "./Snippet.vue";
</script>

# Fieldset

## 개요

<VComponentPreview>
  <Snippet />
</VComponentPreview>

::: code-group

<<< @/ko/components/fieldset/Snippet.vue#template [Template]
<<< @/ko/components/fieldset/Snippet.vue#script [Script]
<<< @/ko/components/fieldset/Snippet.vue#styles [Styles]

:::

## 구조

```vue-html
<VFieldset>
  <VFieldsetTitle />
  <VFieldsetDescription />
  <!-- 필드 -->
</VFieldset>
```

## `<VFieldset>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"fieldset"`

  [`<fieldset>` 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/fieldset)로 렌더링되어야 합니다.

`disabled`

: - 유형: `boolean`
  - 기본값: `false`

  필드셋 요소를 비활성화 하면 안의 모든 필드가 비활성화됩니다.

## `<VFieldsetTitle>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"div"`

## `<VFieldsetDescription>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"div"`
