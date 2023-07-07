# Text Input

## 개요

## `<VTextInput>`

### 속성

`modelValue` (필수)

: - 유형: `string`

`defaultValue`

: - 유형: `string`

`rules`

: - 유형: `Rule<string, string>[]`
  - 기본값: `[]`

  유효성 검사 규칙입니다. [유효성 검사](/ko/guide/validation/)에서 사용됩니다.

`validityMessages`

: - 유형: `Record<string, string>`
  - 기본값: `{}`

  유효성 검사 메시지입니다. [유효성 검사](/ko/guide/validation/)에서 사용됩니다.

`type`

: - 유형: `string`
  - 기본값: `"text"`

  입력의 유형입니다. [`<input> 요소`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/input)의 `type` 속성과 같지만 아래 유형만 사용할 수 있습니다.

  - `email`
  - `number`
  - `password`
  - `search`
  - `tel`
  - `text` (기본값)
  - `url`

  `number` 유형의 경우 [`<VNumberInput>` 컴포넌트](/ko/components/number-input/)를 사용하는 것이 좋습니다.

`disabled`

: - 유형: `boolean`
  - 기본값: `false`

  입력을 비활성화합니다.

`pattern`

: - 유형: `string | RegExp`
  - 기본값: `undefined`

  입력될 수 있는 문자열의 패턴입니다. 패턴과 일치하지 않으면 입력이 취소됩니다. 유효성 검사 규칙에는 포함되지 않습니다.
