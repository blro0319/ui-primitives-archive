import type { MaybeRefOrGetter } from "vue";
import type { ComponentAs } from "~/types";

export interface VFieldsetProps {
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
  disabled?: boolean;
}

export interface VFieldsetTitleProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
}

export interface VFieldsetDescriptionProps {
  /**
   * @default
   * ```ts
   * "div"
   * ```
   */
  as?: ComponentAs;
}

export interface VFieldsetContextOptions {
  disabled?: MaybeRefOrGetter<boolean>;
}
