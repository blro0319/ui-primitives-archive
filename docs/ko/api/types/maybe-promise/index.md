# MaybePromise

## 개요

값 혹은 `Promise`로 감싸진 값을 나타냅니다.

```ts
type MaybePromise<T> = T | Promise<T>;
```
