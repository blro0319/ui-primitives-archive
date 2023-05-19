export * from "./components";
export * from "./composables";
export * from "./types";
export * from "./utils";

export type VCompoundType = "VSelectOption" | "VTabsTrigger";
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
