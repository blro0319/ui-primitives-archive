import { createContext, createEventHooks } from "~/utils";
import type { VTransitionHooks } from "./types";

const { setContext, useContext } = createContext(
  "<VTransition>",
  () => createEventHooks<VTransitionHooks>(),
  null
);

export const setVTransitionContext = setContext;
export const useVTransitionContext = useContext;
