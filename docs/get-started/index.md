# Get Started

## Installation

Install the package on the command line.

::: code-group

```bash [npm]
npm install @blro/ui-primitive-vue
```

```bash [pnpm]
pnpm install @blro/ui-primitive-vue
```

```bash [yarn]
yarn add @blro/ui-primitive-vue
```

:::

Now you can import Vue components and use them.

```vue
<script setup lang="ts">
import { VDialog } from "@blro/ui-primitive-vue";
</script>

<template>
  <VDialog>
    <!-- ... -->
  </VDialog>
</template>
```

### Nuxt Module

If you are using [Nuxt framework](https://nuxt.com/), you can use a module for automatic import of components and composable.

First, install the package on the command line. `@blro/ui-primitive-vue` does not need to be installed.

::: code-group

```bash [npm]
npm install @blro/ui-primitive-nuxt
```

```bash [pnpm]
pnpm install @blro/ui-primitive-nuxt
```

```bash [yarn]
yarn add @blro/ui-primitive-nuxt
```

:::

Then add the module to the configuration file.

```ts
export default defineNuxtConfig({
  // ...
  modules: [
    // ...
    "@blro/ui-primitive-nuxt",
  ],
});
```
