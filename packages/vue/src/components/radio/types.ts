export interface VRadioProps {
  modelValue?: string;
  name?: string;
  value: string;
}
export interface VRadioEmits {
  (e: "update:modelValue", value: string): void;
}
