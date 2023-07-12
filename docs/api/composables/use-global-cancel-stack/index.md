# useGlobalCancelStack

## 개요

`useGlobalEscapeStack` 컴포저블과 `useGlobalHistoryStack` 컴포저블을 함께 사용하는 컴포저블입니다.

```ts
function useGlobalCancelStack(
  handler: (event: PopStateEvent | KeyboardEvent) => void,
  options?: MaybeRefOrGetter<UseGlobalCancelStackOptions>
): {
  create(): void;
  revoke(): void;
};

interface UseGlobalCancelStackOptions {
  escape?: boolean;
  history?: boolean;
}
```
