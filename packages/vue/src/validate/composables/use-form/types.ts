export type UseFormSubmitEventHandler = (event: UseFormSubmitEvent) => void;
export type UseFormSubmitEvent =
  | { type: "valid" }
  | { type: "invalid"; order: number };
