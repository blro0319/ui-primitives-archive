# Progress

## 개요

> [ARIA 미터(진행 표시줄) 디자인 패턴](https://www.w3.org/WAI/ARIA/apg/patterns/meter/)

## `<VProgress>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"div"`

`value` (필수)

: - 유형: `number`

  진행률을 나타냅니다. `min` 속성 값과 `max` 속성 값 사이의 값이어야 합니다.

`min`

: - 유형: `number`
  - 기본값: `0`

  진행률의 최소값을 나타냅니다. `max` 속성 값보다 작아야 합니다.

`max`

: - 유형: `number`
  - 기본값: `1`

  진행률의 최대값을 나타냅니다. `min` 속성 값보다 커야 합니다.
