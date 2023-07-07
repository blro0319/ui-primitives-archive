# Tooltip

## 개요

> [ARIA 툴팁 디자인 패턴](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

## 구조

```vue-html
<VTooltip>
  <VTooltipTrigger />
  <VTooltipContent />
</VTooltip>
```

## `<VTooltip>`

### 속성

`enterDelay`

: - 유형: `number`

  툴팁 표시를 지연시킬 시간(ms)입니다.

`leaveDelay`

: - 유형: `number`

  툴팁 숨김을 지연시킬 시간(ms)입니다.

### 이벤트

`show`

: ```ts
  function onShow(): void;
  ```

  툴팁이 표시될 때 발생합니다.

`hide`

: ```ts
  function onHide(): void;
  ```

  툴팁이 숨겨질 때 발생합니다.

## `<VTooltipTrigger>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"button"`

## `<VTooltipContent>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"div"`
