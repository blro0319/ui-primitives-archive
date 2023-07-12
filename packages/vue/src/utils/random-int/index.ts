/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/utils/random-int/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/utils/random-int/)
 *
 * ---
 *
 * **English**
 *
 * Returns a random integer between `min` and `max`.
 *
 * ---
 *
 * **한국어**
 *
 * `min`과 `max` 사이의 임의의 정수를 반환합니다.
 */
export function randomInt(
  min: number = 0,
  max: number = Number.MAX_SAFE_INTEGER
) {
  const minCeil = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - minCeil) + minCeil);
}
