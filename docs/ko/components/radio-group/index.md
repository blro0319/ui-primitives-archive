# Radio Group

## 개요

## 구조

```vue-html
<VRadioGroup>
  <VRadioGroupTitle />
  <VRadioGroupDescription />
  <!-- 라디오 필드 -->
</VRadioGroup>
```

## `<VRadioGroup>`

### 속성

`as`

: - 유형: [`ComponentAs`](/ko/api/types/component-as/)
  - 기본값: `"fieldset"`

  [`<fieldset>` 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/fieldset)요소로 렌더링되어야 합니다.

`modelValue`

: - 유형: `string | number | bigint | boolean | null | undefined`

## `<VRadioGroupTitle>`

### 속성

`as`

: - 유형: `string`
  - 기본값: `"legend"`

  [`<legend>` 요소](https://developer.mozilla.org/ko/docs/Web/HTML/Element/legend)요소로 렌더링되어야 합니다.

## `<VRadioGroupDescription>`

`as`

: - 유형: `string`
  - 기본값: `VFieldsetDescription`

  [`<VFieldsetDescription>` 컴포넌트](/ko/components/fieldset/#vfieldsetdescription)로 렌더링되어야 합니다.
