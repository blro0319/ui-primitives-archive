import type {
  VContentTitleProps,
  VContentDescriptionProps,
} from "~/components";

export interface VFormEmits {
  (e: "submit"): void;
  (e: "invalid"): void;
}

export type VFormTitleProps = VContentTitleProps;
export type VFormDescriptionProps = VContentDescriptionProps;
