<script setup lang="ts">
import Snippet from "./Snippet.vue";
</script>

# Checkbox

## 개요

<VComponentPreview>
  <Snippet />
</VComponentPreview>

::: code-group

<<< @/ko/components/checkbox/Snippet.vue#template [Template]
<<< @/ko/components/checkbox/Snippet.vue#script [Script]
<<< @/ko/components/checkbox/Snippet.vue#styles [Styles]

:::

## `<VCheckbox>`

### 속성

`modelValue`

: - 유형: `any`

  바인딩 될 수 있는 값은 Vue의 체크박스 바인딩과 같습니다.

  > 참고:
  > - [기본 바인딩](https://v3.vuejs.org/guide/forms.html#checkboxes)
  > - [동적 바인딩](https://vuejs.org/guide/essentials/forms.html#checkbox-1)

`value`

: - 유형: `any`

  체크박스의 값입니다. [동적 바인딩](https://vuejs.org/guide/essentials/forms.html#checkbox-1)할 때 사용됩니다.

`trueValue`

: - 유형: `any`
  - 기본값: `true`

  체크박스가 선택되었을 때의 값입니다. [동적 바인딩](https://vuejs.org/guide/essentials/forms.html#checkbox-1)할 때 사용됩니다.

`falseValue`

: - 유형: `any`
  - 기본값: `false`

  체크박스가 선택되지 않았을 때의 값입니다. [동적 바인딩](https://vuejs.org/guide/essentials/forms.html#checkbox-1)할 때 사용됩니다.

`rules`

: - 유형: `Rule<string, any>[]`
  - 기본값: `[]`

  유효성 검사 규칙입니다. [유효성 검사](/ko/guide/basic/validation/)에서 사용됩니다.

  ::: warning

  `required` 규칙은 설정된 검증 함수 대신 체크박스의 선택 여부를 확인하는 함수를 사용합니다. 목록의 길이를 제한하려면 `minLength`나 `minSize` 규칙을 대신 사용할 수 있습니다.

  :::

`validityMessages`

: - 유형: `Record<string, string>`
  - 기본값: `{}`

  유효성 검사 메시지입니다. [유효성 검사](/ko/guide/basic/validation/)에서 사용됩니다.

`disabled`

: - 유형: `boolean`
  - 기본값: `false`

  설정되면 체크박스를 비활성화합니다.
