# MaybeString

## 개요

값 또는 문자열화된 값을 나타냅니다. 문자열화 될 수 있는 유형만 사용할 수 있습니다.

```ts
type MaybeString<
  T extends string | number | bigint | boolean | null | undefined
> = T | `${T}`;
```
