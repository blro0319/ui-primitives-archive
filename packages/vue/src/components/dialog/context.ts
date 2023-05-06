import { createContext } from "~/utils";
import type { VDialogContext } from "./types";

const { setContext, createUseComposable } = createContext(
  "<VDialog>",
  (context: VDialogContext) => context,
  null
);

export const setVDialogContext = setContext;
export const useVDialogContext = createUseComposable();
