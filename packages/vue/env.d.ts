/// <reference types="vite/client" />

declare module "vue" {
  interface Events {
    // dialog events
    onCancel: Event;
    onClose: Event;
  }
}

export {};
