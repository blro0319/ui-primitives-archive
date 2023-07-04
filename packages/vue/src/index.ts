export * from "./components";
export * from "./composables";
export * from "./constants";
export * from "./types";
export * from "./validate";

declare module "vue" {
  interface Events {
    // dialog events
    onCancel: Event;
    onClose: Event;
  }
}
