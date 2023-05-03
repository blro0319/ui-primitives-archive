export interface VDialogContext {
  close(): void;
  cancel(): Promise<void>;
}
