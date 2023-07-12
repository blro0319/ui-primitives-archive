import { camelCase as lodashCamelCase } from "lodash-es";
import type { CamelCase } from "~/types";

/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/utils/camel-case/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/utils/camel-case/)
 *
 * ---
 *
 * **English**
 *
 * Converts string to camel case.
 * Same as [lodash `camelCase`](https://lodash.com/docs/4.17.15#camelCase)
 * but returns [`CamelCase`](https://ui-primitives.blro.dev/api/types/camel-case/)
 * instead of `string`.
 *
 * ---
 *
 * **한국어**
 *
 * 문자열을 낙타 표기법으로 변환합니다.
 * [lodash의 `camelCase`](https://lodash.com/docs/4.17.15#camelCase)와
 * 같지만, 반환 유형이 `string`이 아닌
 * [`CamelCase`](https://ui-primitives.blro.dev/ko/api/types/camel-case/)입니다.
 *
 * ---
 *
 * @example
 * ```ts
 * camelCase("Hello world"); // "helloWorld"
 * ```
 */
export function camelCase<T extends string>(string: T) {
  return lodashCamelCase(string) as CamelCase<T>;
}
