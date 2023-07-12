# CamelCase

## 개요

문자열을 카멜 표기법으로 변환합니다.

```ts
export type CamelCase<S extends string> = Uncapitalize<
  CamelCaseInner<CamelCaseInner<CamelCaseInner<S, "-">, "_">, " ">
>;
type CamelCaseInner<
  S extends string,
  D extends string
> = S extends `${infer L}${D}${infer R}`
  ? `${L}${Capitalize<CamelCaseInner<R, D>>}`
  : S;
```
