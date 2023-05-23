import type { Component } from "vue";

export type VCompoundType = "VSelectOption" | "VTabsTrigger";

export type ComponentAs = string | Component;

export type AnyFunction = (...args: any[]) => any;

export type MaybeArray<T> = T | T[];
export type MaybePromise<T> = T | PromiseLike<T>;

export type Prettify<T> = { [K in keyof T]: T[K] } & {};

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
