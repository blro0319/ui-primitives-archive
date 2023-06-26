import type { VCompoundType } from "~/types";

export * from "./components";
export * from "./composables";
export * from "./constants";
export * from "./types";
export * from "./utils";
export * from "./validate";

declare module "vue" {
  interface ComponentCustomOptions {
    vCompoundType?: VCompoundType;
  }
  interface Events {
    // dialog events
    onCancel: Event;
    onClose: Event;
  }
}
