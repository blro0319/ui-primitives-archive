import { createRule } from "~/validate";

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export function isEmail() {
  return createRule("isEmail", (value: string) => {
    return new RegExp(EMAIL_REGEX).test(value);
  });
}
