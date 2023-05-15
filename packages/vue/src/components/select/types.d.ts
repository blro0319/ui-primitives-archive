import type { Ref } from "vue";
import type { MaybeArray } from "~/types";

export interface SetVSelectContextOptions {
  value: Ref<MaybeArray<VSelectOptionValue>>;
}

export interface VSelectProps {
  modelValue: MaybeArray<VSelectOptionValue>;
}
export interface VSelectEmits {
  (e: "update:modelValue", value: MaybeArray<VSelectOptionValue>): void;
}

export interface VSelectOptionProps {
  label: string;
  value: VSelectOptionValue;
  disabled?: boolean;
}
export type VSelectOptionValue = string | null | undefined;
