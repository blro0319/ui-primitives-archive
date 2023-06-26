<script setup lang="ts">
import Snippet from "./Snippet.vue";
</script>

# Form

## 개요

<VComponentPreview>
  <Snippet />
</VComponentPreview>

::: code-group

<<< @/ko/components/form/Snippet.vue#template [Template]
<<< @/ko/components/form/Snippet.vue#script [Script]
<<< @/ko/components/form/Snippet.vue#styles [Styles]

:::

## 구조

```vue-html
<VForm>
  <VFormTitle />
  <VFormDescription />
  <!-- 필드 -->
</VForm>
```

## `<VForm>`

### 메서드

`submit`

: ```ts
  function submit(): Promise<void>;
  ```

  폼을 제출합니다. 성공하면 `submit` 이벤트가 발생합니다. 실패하면 `invalid` 이벤트가 발생합니다.

`reset`

: ```ts
  function reset(): void;
  ```

  폼을 초기화합니다.

### 이벤트

`submit`

: ```ts
  function onSubmit(): void;
  ```

  폼이 제출되었을 때 유효성 검증에 성공하면 발생합니다.

`invalid`

: ```ts
  function onInvalid(): void;
  ```

  폼이 제출되었을 때 유효성 검증에 실패하면 발생합니다.

## `<VFormTitle>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"div"`

## `<VFormDescription>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"div"`
