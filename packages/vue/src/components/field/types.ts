import type { MaybeRefOrGetter } from "vue";
import type { ComponentAs } from "~/types";
import type {
  Rule,
  UseFieldValidateResult,
  UseFormSubmitEvent,
} from "~/validate";

export type VFieldReportTiming = "change" | "blur" | "submit";

// ----- Root ----- //

export interface VFieldProps {
  reportWhen?: "none" | VFieldReportTiming | VFieldReportTiming[];
}
export interface VFieldEmits {
  (e: "valid", event: UseFieldValidateResult<Rule[]>): void;
  (e: "invalid", event: UseFieldValidateResult<Rule[]>): void;
  (e: "reset"): void;
  (e: "submit", event: UseFormSubmitEvent): void;
  (e: "report"): void;
}

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
