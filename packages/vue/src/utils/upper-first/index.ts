import { upperFirst as lodashUpperFirst } from "lodash-es";

/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/utils/upper-first/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/utils/upper-first/)
 *
 * ---
 *
 * **English**
 *
 * Converts the first character of `string` to upper case.
 * Same as [lodash `upperFirst`](https://lodash.com/docs/4.17.15#upperFirst)
 * but returns [`Capitalize`](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#capitalizestringtype)
 * instead of `string`.
 *
 * ---
 *
 * **한국어**
 *
 * 문자열의 첫 글자를 대문자로 변환합니다.
 * [lodash의 `upperFirst`](https://lodash.com/docs/4.17.15#upperFirst)와
 * 같지만, 반환 유형이 `string`이 아닌
 * [`Capitalize`](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#capitalizestringtype)입니다.
 */
export function upperFirst<T extends string>(string: T) {
  return lodashUpperFirst(string) as Capitalize<T>;
}
