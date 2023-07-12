# OptionalJoin

## 개요

```ts
type OptionalJoin<
  Tuple extends readonly string[],
  Separator extends string = " "
> = Tuple extends readonly []
  ? ""
  : Tuple extends readonly [infer Head]
    ? Head
    : `${Tuple[0]}${`${Separator}${OptionalJoin<Tail<Tuple>, Separator>}` | ""}`;

type Tail<
  T extends readonly string[]
> = T extends readonly [T[0], ...infer Rest]
  ? Rest
  : [];
```
