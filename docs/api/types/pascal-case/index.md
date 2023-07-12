# PascalCase

## 개요

문자열을 파스칼 표기법으로 변환합니다.

```ts
type PascalCase<S extends string> = Capitalize<CamelCase<S>>;
```

> [`CamelCase`](/api/types/camel-case)
