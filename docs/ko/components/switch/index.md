# Switch

## 개요

> [ARIA Switch 패턴](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)

## `<VSwitch>`

### 속성

`modelValue`

: - 유형: `any`

`trueValue`

: - 유형: `any`
  - 기본값: `true`

`falseValue`

: - 유형: `any`
  - 기본값: `false`

`rules`

: - 유형: `Rule<string, boolean>[]`
  - 기본값: `[]`

  유효성 검사 규칙입니다. [유효성 검사](/ko/guide/basic/validation/)에서 사용됩니다.

`validityMessages`

: - 유형: `Record<string, string>`
  - 기본값: `{}`

  유효성 검사 메시지입니다. [유효성 검사](/ko/guide/basic/validation/)에서 사용됩니다.

`disabled`

: - 유형: `boolean`
  - 기본값: `false`
