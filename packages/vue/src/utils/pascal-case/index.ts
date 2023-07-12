import { camelCase, upperFirst } from "~/utils";
import type { PascalCase } from "~/types";

/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/utils/pascal-case/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/utils/pascal-case/)
 *
 * ---
 *
 * **English**
 *
 * Converts string to pascal case.
 * Same as [lodash `pascalCase`](https://lodash.com/docs/4.17.15#pascalCase)
 * but returns [`PascalCase`](https://ui-primitives.blro.dev/api/types/pascal-case/)
 * instead of `string`.
 *
 * ---
 *
 * **한국어**
 *
 * 문자열을 파스칼 표기법으로 변환합니다.
 * [lodash의 `pascalCase`](https://lodash.com/docs/4.17.15#pascalCase)와
 * 같지만, 반환 유형이 `string`이 아닌
 * [`PascalCase`](https://ui-primitives.blro.dev/ko/api/types/pascal-case/)입니다.
 *
 * ---
 *
 * @example
 * ```ts
 * pascalCase("Hello world"); // "HelloWorld"
 * ```
 */
export function pascalCase<T extends string>(string: T): PascalCase<T> {
  return upperFirst(camelCase(string));
}
