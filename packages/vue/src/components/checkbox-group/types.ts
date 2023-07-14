import type { MaybeRefOrGetter, Ref } from "vue";
import type { ComponentAs } from "~/types";
import type { Rule, ValidityMessages } from "~/validate";

export interface VCheckboxGroupProps<
  Value extends any[] | Set<any>,
  Rules extends Rule<string, Value>[]
> {
  /**
   * @default
   * ```ts
   * "fieldset"
   * ```
   */
  as?: ComponentAs;
  modelValue: Value;
  defaultValue?: Value;
  /**
   * @default
   * ```ts
   * []
   * ```
   */
  rules?: Rules;
  /**
   * @default
   * ```ts
   * {}
   * ```
   */
  validityMessages?: ValidityMessages<Rules>;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
  maxLength?: number;
}
export interface VCheckboxGroupEmits<Value extends any[] | Set<any>> {
  (e: "update:modelValue", value: Value): boolean;
}

export interface SetVCheckboxGroupContextOptions {
  value: Ref<any[] | Set<any>>;
  defaultValue?: MaybeRefOrGetter<any[] | Set<any>>;
  rules?: MaybeRefOrGetter<Rule<string, any[] | Set<any>>[]>;
  validityMessages?: MaybeRefOrGetter<ValidityMessages<Rule[]>>;
  maxLength?: MaybeRefOrGetter<number | null | undefined>;
}

// ----- Title ----- //

export interface VCheckboxGroupTitleProps {
  /**
   * @default
   * ```ts
   * "legend"
   * ```
   */
  as?: ComponentAs;
}

// ----- Description ----- //

export interface VCheckboxGroupDescriptionProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
}

// ----- Error ----- //

export interface VCheckboxGroupErrorProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
}
