import type { VContentProps } from "~/components";
import type { Prettify } from "~/types";

export type VFieldProps = Prettify<
  VContentProps & {
    /**
     * @default
     * ```ts
     * "submit"
     * ```
     */
    reportWhen?: VFieldReportTiming;
  }
>;
export type VFieldReportTiming = "none" | "change" | "blur" | "submit";
