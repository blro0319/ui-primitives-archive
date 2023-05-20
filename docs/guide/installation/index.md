# Installation

## Vue

Install the package on the command line.

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

Now you can import Vue components and use them.

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

## Nuxt Module

If you are using [Nuxt framework](https://nuxt.com/), you can use a module for automatic import of components and composable.

First, install the package on the command line. `@blro/ui-primitives-vue` does not need to be installed.

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

Then add the module to the configuration file.

```ts
export default defineNuxtConfig({
  // ...
  modules: [
    // ...
    "@blro/ui-primitives-nuxt",
  ],
});
```
