import type { MaybePromise } from "~/types";
import type { createField, createForm, useField } from "~/validate";

export type Form = ReturnType<typeof createForm>;

export type Field = ReturnType<typeof createField>;
export type FieldLike = Pick<Field, "validate">;

export type UseField = ReturnType<typeof useField>;

export interface Rule<Name extends string = string, Value = unknown> {
  name: Name;
  validator(value: Value): MaybePromise<boolean>;
}
