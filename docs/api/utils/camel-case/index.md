# camelCase

## 개요

문자열을 낙타 표기법으로 변환합니다.

```ts
function camelCase<T extends string>(string: T): CamelCase<T>;
```

> [`CamelCase`](/api/types/camel-case/)

## 사용법

```ts
camelCase("Hello world"); // "helloWorld"
camelCase("blue-rose"); // "blueRose"
```
