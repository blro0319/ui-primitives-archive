<script setup lang="ts">
import Snippet1 from "./snippets/1/Output.vue";
import Snippet3 from "./snippets/3/Output.vue";
</script>

# 나만의 컴포넌트 만들기

UI Primitives의 컴포넌트는 스타일이 없어 그대로 사용하기 어렵습니다. 대신 자주 사용되는 스타일의 컴포넌트를 만들어 사용할 수 있습니다.

## 단일 컴포넌트

단일 컴포넌트는 일반 요소처럼 컴포넌트를 사용할 수 있습니다. 이 예시에서는 [`VButton` 컴포넌트](/components/button/)를 사용한 구현을 보여줍니다.

<VComponentPreview>
  <Snippet1 />
</VComponentPreview>

::: code-group

<<< @/guide/basic/component/snippets/1/Output.vue
<<< @/guide/basic/component/snippets/1/MyButton.vue

:::

이제 `MyButton` 컴포넌트를 사용할 수 있습니다. 하지만 `VButton` 컴포넌트의 속성이 `MyButton` 컴포넌트 속성으로 드러나지 않습니다. 이 문제를 해결하기 위해 속성을 지정하고 전달해야 합니다.

::: code-group

<<< @/guide/basic/component/snippets/2/Vue3.vue#section [3.0 ~ 3.2]
<<< @/guide/basic/component/snippets/2/Vue3.3.vue#section [3.3 ~ 3.x]

:::

Vue 3.3 이상에서는 가져온 유형을 속성으로 사용할 수 있습니다. 그 이전 버전에서는 유형을 직접 구성해야 합니다.
