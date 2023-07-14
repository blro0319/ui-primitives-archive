# Number Input

## 개요

## `<VNumberInput>`

### 속성

`modelValue` (필수)

: - 유형: `number`

`defaultValue`

: - 유형: `number`

`rules`

: - 유형: `Rule<string, number>[]`
  - 기본값: `[]`

  유효성 검사 규칙입니다. [유효성 검사](/guide/basic/validation/)에서 사용됩니다.

`validityMessages`

: - 유형: `Record<string, string>`
  - 기본값: `{}`

  유효성 검사 메시지입니다. [유효성 검사](/guide/basic/validation/)에서 사용됩니다.

`min`

: - 유형: `number`
  - 기본값: [`Number.MIN_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) (-9007조 1992억 5474만 991)

  입력할 수 있는 최소값입니다. 유효성 검사 규칙에는 포함되지 않습니다. `Number.MIN_SAFE_INTEGER`보다 작은 값으로 설정할 수 없습니다.

`max`

: - 유형: `number`
  - 기본값: [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (9007조 1992억 5474만 991)

  입력할 수 있는 최대값입니다. 유효성 검사 규칙에는 포함되지 않습니다. `Number.MAX_SAFE_INTEGER`보다 큰 값으로 설정할 수 없습니다.

`step`

: - 유형: `number`
  - 기본값: `0.001`

  입력할 수 있는 값의 간격입니다. 유효성 검사 규칙에는 포함되지 않습니다. `0.001`보다 작은 값으로 설정할 수 없습니다.

`controlStep`

: - 유형: `number`
  - 기본값: `undefined`

  위/아래 방향키를 눌렀을 때 변경되는 값의 간격입니다. 설정되지 않으면 `step` 속성의 값을 대신 사용합니다.

`disabled`

: - 유형: `boolean`
  - 기본값: `false`

  설정되면 입력을 비활성화합니다.

### 이벤트

`valid`

: ```ts
  function onValid(event: UseFieldValidateResult<Rule[]>): void;
  ```

  유효성 검사를 통과하면 발생합니다.

`invalid`

: ```ts
  function onInvalid(event: UseFieldValidateResult<Rule[]>): void;
  ```

  유효성 검사를 실패하면 발생합니다.
