import { ALPHABETS, NUMBERS } from "~/constants";
import { randomInt } from "~/utils";

const POOL = ALPHABETS + NUMBERS;

/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/utils/random-str/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/utils/random-str/)
 *
 * ---
 *
 * **English**
 *
 * Returns a random string of given length consisting of alphabets and numbers.
 *
 * ---
 *
 * **한국어**
 *
 * 알파벳 대소문자와 숫자로 이루어진 주어진 길이의 임의의 문자열을 반환합니다.
 */
export function randomStr(length: number = 6) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += POOL.charAt(randomInt(0, POOL.length - 1));
  }
  return result;
}
