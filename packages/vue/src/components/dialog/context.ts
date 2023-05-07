import { createContext } from "~/utils";
import type { VDialogContext } from "./types";

const { setContext, useContext } = createContext(
  "<VDialog>",
  (context: VDialogContext) => context,
  null
);

export const setVDialogContext = setContext;
export const useVDialogContext = useContext;
