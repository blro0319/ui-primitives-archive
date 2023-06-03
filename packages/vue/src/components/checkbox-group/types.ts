import type { ComponentAs } from "~/types";
import type { Rule } from "~/validate";

export interface VCheckboxGroupProps<
  Value extends any[] | Set<any>,
  RuleName extends string
> {
  /**
   * @default
   * ```ts
   * "fieldset"
   * ```
   */
  as?: ComponentAs;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  asChild?: boolean;
  modelValue: Value;
  defaultValue?: Value;
  /**
   * @default
   * ```ts
   * []
   * ```
   */
  rules?: Rule<RuleName, Value>[];
  /**
   * @default
   * ```ts
   * {}
   * ```
   */
  validityMessages?: Partial<Record<RuleName, string>>;
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  disabled?: boolean;
}
export interface VCheckboxGroupEmits<Value extends any[] | Set<any>> {
  (e: "update:modelValue", value: Value): boolean;
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
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  asChild?: boolean;
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
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  asChild?: boolean;
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
  /**
   * @default
   * ```ts
   * false
   * ```
   */
  asChild?: boolean;
}
