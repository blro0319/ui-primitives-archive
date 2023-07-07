# Tabs

## 개요

## 구조

```vue-html
<VTabs>
  <VTabsList>
    <VTabsTrigger />
  </VTabsList>
  <VTabsPanel />
</VTabs>
```

## `<VTabs>`

### 속성

`modelValue` (필수)

: - 유형: `string`

  현재 선택된 탭 입니다. `<VTabsPanel>` 중 `value` 속성이 `modelValue` 값과 일치하는 요소만 표시됩니다.

`orientation`

: - 유형: `"horizontal" | "vertical"`
  - 기본값: `"horizontal"`

  탭 목록의 방향입니다. [`<VRovingTabindex>` 컴포넌트](/components/roving-tabindex/)의 `orientation` 속성과 같습니다.

`activationMode`

: - 유형: `"automatic" | "manual"`
  - 기본값: `"automatic"`

  탭의 선택 방식입니다. `automatic`으로 설정되면 `<VTabsTrigger>` 요소에 초점이 잡히면 탭이 선택됩니다. `manual`로 설정되면 요소를 클릭해야 탭이 선택됩니다.

## `<VTabsList>`

### 속성

`as`

: - 유형: [`ComponentAs`](/api/types/component-as/)
  - 기본값: `"div"`

`loop`

: - 유형: `boolean`
  - 기본값: `false`

  설정되면 탭 목록의 양 끝에서 초점을 이동할 때, 반대쪽 끝으로 이동합니다.

## `<VTabsTrigger>`

### 속성

`as`

: - 유형: [`ComponentAs`](/api/types/component-as/)
  - 기본값: `"div"`

`value` (필수)

: - 유형: `string`

  탭의 값입니다. 선택했을 때 `value` 속성이 같은 `<VTabsPanel>` 요소가 표시됩니다.

`disabled`

: - 유형: `boolean`
  - 기본값: `false`

  설정되면 비활성화되어 탭 목록에서 선택할 수 없습니다.

## `<VTabsPanel>`

### 속성

`as`

: - 유형: [`ComponentAs`](/api/types/component-as/)
  - 기본값: `"div"`

`value` (필수)

: - 유형: `string`

  탭의 값입니다. 선택된 탭을 구분하기 위해 사용됩니다.
