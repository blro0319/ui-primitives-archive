# createEventHooks

## 개요

이벤트 후크들을 생성합니다. [VueUse의 `createEventHook`](https://vueuse.org/shared/createEventHook/)와 비슷하지만, 여러 후크를 한 번에 생성할 수 있습니다.

```ts
function createEventHooks<Hooks extend Record<string, AnyFunction>>(): {
  trigger<Hook extends keyof Hooks>(
    hook: Hook,
    ...args: Parameters<Hooks[Hook]>
  ): void;
  on<Hook extends keyof Hooks>(hook: Hook, listener: Hooks[Hook]): () => void;
  once<Hook extends keyof Hooks>(hook: Hook, listener: Hooks[Hook]): () => void;
  off<Hook extends keyof Hooks>(hook: Hook, listener: Hooks[Hook]): void;
  clear(): void;
  $on<Hook extends keyof Hooks>(hook: Hook, listener: Hooks[Hook]): () => void;
  $once<Hook extends keyof Hooks>(hook: Hook, listener: Hooks[Hook]): () => void;
};
```

> [`AnyFunction`](/api/types/any-function)
