# VBindAttributes

## 개요

```ts
type VBindAttributes<
  Tag extends keyof NativeElements | unknown
> = (Tag extends keyof NativeElements
  ? NativeElements[Tag]
  : HTMLAttributes & ReservedProps) & {
  [key: `data-${string}`]: string;
};
```
