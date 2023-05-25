import type { ComponentAs } from "~/types";

export interface VFieldProps {
  reportWhen?: VFieldReportTiming;
}

export type VFieldReportTiming = "none" | "change" | "blur" | "submit";

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
