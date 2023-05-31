import type {
  Component,
  HTMLAttributes,
  NativeElements,
  ReservedProps,
} from "vue";

// ----- Component ----- //

export type VBindAttributes<
  Tag extends keyof NativeElements | unknown = unknown
> = (Tag extends keyof NativeElements
  ? NativeElements[Tag]
  : HTMLAttributes & ReservedProps) & {
  [key: `data-${string}`]: string;
};

export type VCompoundType = "VSelectOption" | "VTabsTrigger";

export type ComponentAs = string | Component;

// ----- Any/Maybe * ----- //

export type AnyFunction = (...args: any[]) => any;

export type MaybeArray<T> = T | T[];
export type MaybePromise<T> = T | PromiseLike<T>;
export type MaybeString<
  T extends string | number | bigint | boolean | null | undefined
> = T | `${T}`;

// ----- Object ----- //

export type Prettify<T> = { [K in keyof T]: T[K] } & {};

// ----- String ----- //

export type PascalCase<S extends string> = Capitalize<CamelCase<S>>;
export type CamelCase<S extends string> = Uncapitalize<
  CamelCaseInner<CamelCaseInner<CamelCaseInner<S, "-">, "_">, " ">
>;
type CamelCaseInner<
  S extends string,
  D extends string
> = S extends `${infer L}${D}${infer R}`
  ? `${L}${Capitalize<CamelCaseInner<R, D>>}`
  : S;

export type OptionalJoin<
  Tuple extends readonly string[],
  Separator extends string = " "
> = Tuple extends readonly []
  ? ""
  : Tuple extends readonly [infer Head]
  ? Head
  : `${Tuple[0]}${`${Separator}${OptionalJoin<Tail<Tuple>, Separator>}` | ""}`;

type Tail<T extends readonly string[]> = T extends readonly [
  T[0],
  ...infer Rest
]
  ? Rest
  : [];
