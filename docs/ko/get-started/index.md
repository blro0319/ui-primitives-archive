# 시작하기

## 설치

명령줄에서 패키지를 설치합니다.

::: code-group

```bash [npm]
npm install @blro/ui-primitives-vue
```

```bash [pnpm]
pnpm install @blro/ui-primitives-vue
```

```bash [yarn]
yarn add @blro/ui-primitives-vue
```

:::

이제 Vue 컴포넌트를 가져와 사용할 수 있습니다.

```vue
<script setup lang="ts">
import { VDialog } from "@blro/ui-primitives-vue";
</script>

<template>
  <VDialog>
    <!-- ... -->
  </VDialog>
</template>
```

### Nuxt 모듈

[Nuxt 프레임워크](https://nuxt.com/)를 사용하는 경우 컴포넌트와 컴포저블 자동 가져오기를 위한 모듈을 사용할 수 있습니다.

먼저 명령줄에서 패키지를 설치합니다. `@blro/ui-primitives-vue`는 설치하지 않아도 됩니다.

::: code-group

```bash [npm]
npm install @blro/ui-primitives-nuxt
```

```bash [pnpm]
pnpm install @blro/ui-primitives-nuxt
```

```bash [yarn]
yarn add @blro/ui-primitives-nuxt
```

:::

그런 다음 설정 파일에 모듈을 추가합니다.

```ts
export default defineNuxtConfig({
  // ...
  modules: [
    // ...
    "@blro/ui-primitives-nuxt",
  ],
});
```
