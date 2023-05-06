import { ALPHABETS, NUMBERS } from "~/constants";
import { randomInt } from "~/utils";

const POOL = ALPHABETS + NUMBERS;

export function randomStr(length: number = 6) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += POOL.charAt(randomInt(0, POOL.length - 1));
  }
  return result;
}
