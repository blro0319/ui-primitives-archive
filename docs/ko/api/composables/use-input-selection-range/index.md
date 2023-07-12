# useInputSelectionRange

## 개요

```ts
function useInputSelectionRange(
  target: MaybeComputedElementRef<HTMLInputElement | undefined>
): Reactive<{
  start: number | null;
  end: number | null;
  direction: "none" | "forward" | "backward";
}>;
```
