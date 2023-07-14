import type { MaybePromise, Prettify } from "~/types";
import type { createField, createForm, useField } from "~/validate";

export type Form = ReturnType<typeof createForm>;

export type Field = ReturnType<typeof createField>;
export type FieldLike = Pick<Field, "validate">;

export type UseField = ReturnType<typeof useField>;

export interface Rule<
  Name extends string = string,
  Value = any,
  Options = any
> {
  name: Name;
  validator(value: Value): MaybePromise<boolean>;
  options?: Options;
}

export type RulesName<Rules extends Rule[]> = Rules[number]["name"];

export type ValidityMessages<Rules extends Rule[]> = Partial<
  Prettify<Record<RulesName<Rules>, string>>
>;
