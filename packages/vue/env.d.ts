/// <reference types="vite/client" />

declare module "vue" {
  interface ComponentCustomOptions {
    vCompoundType?: string;
  }

  interface Events {
    // dialog events
    onCancel: Event;
    onClose: Event;
  }
}

export {};
