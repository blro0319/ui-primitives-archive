<script setup lang="ts">
import Snippet from "./Snippet.vue";
</script>

# Field

## 개요

<VComponentPreview>
  <Snippet />
</VComponentPreview>

::: code-group

<<< @/components/field/Snippet.vue#template [Template]
<<< @/components/field/Snippet.vue#script [Script]
<<< @/components/field/Snippet.vue#styles [Styles]

:::

## 구조

```vue-html
<VField>
  <VFieldLabel />
  <VFieldDescription />
  <!-- Any Input -->
  <VFieldError />
</VField>
```

## `<VField>`

### 속성

`reportWhen`

: - 유형: `"none" | "blur" | "change" | "submit" | ("blur" | "change" | "submit")[]`
  - 기본값: `"submit"`

  오류를 사용자에게 보고할 시점을 설정합니다. 사용할 수 있는 값은 다음과 같습니다.

  - `blur`: 입력이 초점를 잃었을 때 오류를 보고합니다.
  - `change`: 입력이 변경되었을 때 오류를 보고합니다.
  - `submit`: 폼이 제출되었을 때 오류를 보고합니다.

### 메서드

`validate`

: ```ts
  function validate(): Promise<UseValidateResult<string> | undefined>;
  ```

  필드를 유효성 검사합니다. 성공하면 `valid` 이벤트가 발생합니다. 실패하면 `invalid` 이벤트가 발생합니다.

`$validate`

: ```ts
  function $validate(): Promise<boolean>;
  ```

  필드를 유효성 검사하고 성공 여부를 반환합니다. `(await validate()).valid` 구문과 동일합니다.

`reportValidity`

: ```ts
  function reportValidity(): void;
  ```

  필드의 오류를 보고합니다.

### 이벤트

`valid`

: ```ts
  function onValid(event: UseFieldValidateResult<Rule[]>): void;
  ```

  유효성 검증 후 결과가 유효할 때 발생합니다.

`invalid`

: ```ts
  function onInvalid(event: UseFieldValidateResult<Rule[]>): void;
  ```

  유효성 검증 후 결과가 유효하지 않을 때 발생합니다.

`reset`

: ```ts
  function onReset(): void;
  ```

  필드가 초기화되면 발생합니다.

`submit`

: ```ts
  function onSubmit(event: UseFormSubmitEvent): void;
  ```

  필드가 폼에 의해 제출되면 발생합니다.

`report`

: ```ts
  function onReport(): void;
  ```

  필드가 오류를 보고할 때 발생합니다.

## `<VFieldLabel>`

### 속성

`as`

: - 유형: [`ComponentAs`](/api/types/component-as/)
  - 기본값: `"label"`

  `<label>` 요소로 렌더링되어야 합니다.

## `<VFieldDescription>`

### 속성

`as`

: - 유형: [`ComponentAs`](/api/types/component-as/)
  - 기본값: `"div"`

## `<VFieldError>`

### 속성

`as`

: - 유형: [`ComponentAs`](/api/types/component-as/)
  - 기본값: `"div"`
