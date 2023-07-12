# Prettify

## 개요

복잡한 객체 유형을 하나의 객체 유형으로 변환합니다.

```ts
type Prettify<T> = { [K in keyof T]: T[K] } & {};
```
