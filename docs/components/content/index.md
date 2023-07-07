<script setup lang="ts">
import Snippet from "./Snippet.vue";
</script>

# Content

## 개요

컨텐츠는 제목과 설명을 `aria-labelledby` 속성과 `aria-describedby` 속성을 사용하여 연결하는 컴포넌트입니다.

<VComponentPreview>
  <Snippet />
</VComponentPreview>

::: code-group

<<< @/components/content/Snippet.vue#template [Template]
<<< @/components/content/Snippet.vue#script [Script]
<<< @/components/content/Snippet.vue#styles [Styles]

:::

## 구조

```vue-html
<VContent>
  <VContentTitle />
  <VContentDescription />
</VContent>
```

## `<VContent>`

### 속성

`as`

: - 유형: [`ComponentAs`](/api/types/component-as/)
  - 기본값: `"div"`

## `<VContentTitle>`

### 속성

`as`

: - 유형: [`ComponentAs`](/api/types/component-as/)
  - 기본값: `"div"`

## `<VContentDescription>`

### 속성

`as`

: - 유형: [`ComponentAs`](/api/types/component-as/)
  - 기본값: `"div"`
