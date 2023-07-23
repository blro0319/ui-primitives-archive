# Popover

## 개요

## 구조

```vue-html
<VPopover>
  <VPopoverTrigger />
  <VPopoverContent />
</VPopover>
```

## `<VPopover>`

### 이벤트

`show`

: ```ts
  function onShow(): void;
  ```

  팝오버가 열릴 때 발생합니다.

`close`

: ```ts
  function onClose(): void;
  ```

  팝오버가 닫힐 때 발생합니다.

## `<VPopoverTrigger>`

### 속성

`as`

: - 유형: [`ComponentAs`](/api/types/component-as/)
  - 기본값: [`VButton`](/components/button/)

## `<VPopoverContent>`
