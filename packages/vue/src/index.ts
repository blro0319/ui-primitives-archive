export * from "./components";
export {
  type UseGlobalCancelStackOptions,
  type UseGlobalHistoryStackRevokeOptions,
  type UseVInputOptions,
  useGlobalCancelStack,
  useGlobalEscapeStack,
  useGlobalHistoryStack,
  useVInput,
} from "./composables";
export { COMPONENTS } from "./constants";
export type { ComponentAs, VBindAttributes } from "./types";
export * from "./validate";

declare module "vue" {
  interface Events {
    // dialog events
    onCancel: Event;
    onClose: Event;
  }
}
