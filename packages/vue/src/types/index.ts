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

/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/types/component-as/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/types/component-as/)
 *
 * ---
 *
 * **English**
 *
 * Represents a tag name or a component.
 * Used in the `as` prop of a component.
 * Same as the first argument of the
 * [Vue `h()` function](https://vuejs.org/api/render-function.html#h).
 *
 * ---
 *
 * **한국어**
 *
 * 태그 이름 혹은 컴포넌트를 나타냅니다.
 * 컴포넌트의 `as` 속성에 사용됩니다.
 * [Vue `h()` 함수](https://vuejs.org/api/render-function.html#h)의
 * 첫 번째 인자와 같습니다.
 */
export type ComponentAs = string | Component;

// ----- Any/Maybe * ----- //

/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/types/any-function/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/types/any-function/)
 *
 * ---
 *
 * **English**
 *
 * Represents any function.
 *
 * ---
 *
 * **한국어**
 *
 * 임의의 함수를 나타냅니다.
 */
export type AnyFunction = (...args: any[]) => any;

/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/types/maybe-array/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/types/maybe-array/)
 *
 * ---
 *
 * **English**
 *
 * Represents a value or an array of the value.
 *
 * ---
 *
 * **한국어**
 *
 * 값 혹은 값의 배열을 나타냅니다.
 */
export type MaybeArray<T> = T | T[];
/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/types/maybe-promise/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/types/maybe-promise/)
 *
 * ---
 *
 * **English**
 *
 * Represents a value or a promise of the value.
 *
 * ---
 *
 * **한국어**
 *
 * 값 혹은 값을 반환하는 `Promise`를 나타냅니다.
 */
export type MaybePromise<T> = T | PromiseLike<T>;
/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/types/maybe-string/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/types/maybe-string/)
 *
 * ---
 *
 * **English**
 *
 * Represents a value or a stringified value.
 *
 * ---
 *
 * **한국어**
 *
 * 값 혹은 문자열화된 값을 나타냅니다.
 */
export type MaybeString<
  T extends string | number | bigint | boolean | null | undefined
> = T | `${T}`;

// ----- Object ----- //

/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/types/optional-keys/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/types/optional-keys/)
 *
 * ---
 *
 * **English**
 *
 * Converts complex object types to one object type.
 *
 * ---
 *
 * **한국어**
 *
 * 복잡한 객체 유형을 하나의 객체 유형으로 변환합니다.
 */
export type Prettify<T> = { [K in keyof T]: T[K] } & {};

// ----- String ----- //

/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/types/pascal-case/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/types/pascal-case/)
 *
 * ---
 *
 * **English**
 *
 * Converts a string to pascal case.
 *
 * ---
 *
 * **한국어**
 *
 * 문자열을 파스칼 표기볍으로 변환합니다.
 */
export type PascalCase<S extends string> = Capitalize<CamelCase<S>>;

/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/types/camel-case/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/types/camel-case/)
 *
 * ---
 *
 * **English**
 *
 * Converts a string to camel case.
 *
 * ---
 *
 * **한국어**
 *
 * 문자열을 카멜 표기법으로 변환합니다.
 */
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
