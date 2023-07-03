import type { TransitionProps } from "vue";
import type { V_TRANSITION_EVENTS } from "./constants";

export interface VTransitionProps extends TransitionProps {}
export interface VTransitionEmits {
  (e: "before-enter", el: Element): void;
  (e: "enter", el: Element, done: () => void): void;
  (e: "after-enter", el: Element): void;
  (e: "enter-cancelled", el: Element): void;
  (e: "before-leave", el: Element): void;
  (e: "leave", el: Element, done: () => void): void;
  (e: "after-leave", el: Element): void;
  (e: "leave-cancelled", el: Element): void;
  (e: "before-appear", el: Element): void;
  (e: "appear", el: Element, done: () => void): void;
  (e: "after-appear", el: Element): void;
  (e: "appear-cancelled", el: Element): void;
}

export interface VTransitionEmitParameters {
  "before-enter": [el: Element];
  "enter": [el: Element, done: () => void];
  "after-enter": [el: Element];
  "enter-cancelled": [el: Element];
  "before-leave": [el: Element];
  "leave": [el: Element, done: () => void];
  "after-leave": [el: Element];
  "leave-cancelled": [el: Element];
  "before-appear": [el: Element];
  "appear": [el: Element, done: () => void];
  "after-appear": [el: Element];
  "appear-cancelled": [el: Element];
}

export type VTransitionEventName = (typeof V_TRANSITION_EVENTS)[number];

export type VTransitionHooks = {
  [K in VTransitionEventName]: (...args: VTransitionEmitParameters[K]) => void;
};
