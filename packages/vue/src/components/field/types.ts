import type { ComponentAs, OptionalJoin } from "~/types";

export interface VFieldProps {
  reportWhen?: "none" | OptionalJoin<StringUnionToTuple<VFieldReportTiming>>;
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

// ----- Description ----- //

export interface VFieldDescriptionProps {
  as?: ComponentAs;
  asChild?: boolean;
}

// ----- Error ----- //

export interface VFieldErrorProps {
  as?: ComponentAs;
  asChild?: boolean;
}
