import type { MaybeRefOrGetter } from "vue";
import type { ComponentAs, OptionalJoin } from "~/types";
import type { UseFieldValidateResult, UseFormSubmitEvent } from "~/validate";

// ----- Root ----- //

export interface VFieldProps {
  reportWhen?: "none" | OptionalJoin<StringUnionToTuple<VFieldReportTiming>>;
}
export interface VFieldEmits {
  (e: "valid", event: UseFieldValidateResult<string>): void;
  (e: "invalid", event: UseFieldValidateResult<string>): void;
  (e: "reset"): void;
  (e: "submit", event: UseFormSubmitEvent): void;
  (e: "report"): void;
}

export type VFieldReportTiming = "change" | "blur" | "submit";

// Keywords to tuple

export type StringUnionToTuple<Str extends string> = ObjectToTuple<
  StringUnionToObject<Str>
>;

type StringUnionToObject<Union extends string> = {
  [Key in Union]: StringUnionToObject<Exclude<Union, Key>>;
};
type ObjectToTuple<Obj> = {} extends Obj
  ? []
  : { [Key in keyof Obj]: [Key, ...ObjectToTuple<Obj[Key]>] }[keyof Obj];

export interface VFieldContextOptions {
  reportWhen?: MaybeRefOrGetter<VFieldProps["reportWhen"]>;
}

// ----- Label ----- //

export interface VFieldLabelProps {
  /**
   * @default
   * ```ts
   * "label"
   * ```
   */
  as?: ComponentAs;
}

// ----- Description ----- //

export interface VFieldDescriptionProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
}

// ----- Error ----- //

export interface VFieldErrorProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
}
