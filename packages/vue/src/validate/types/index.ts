import type { MaybePromise } from "~/types";
import type { createField, createForm } from "~/validate";

export type Form = ReturnType<typeof createForm>;

export type Field = ReturnType<typeof createField>;
export type FieldLike = Pick<Field, "validate">;

export interface Rule<Name extends string = string, Value = unknown> {
  name: Name;
  validator(value: Value): MaybePromise<boolean>;
}
