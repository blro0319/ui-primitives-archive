import { createContext } from "~/utils";

const { setContext, useContext } = createContext("<VDropdown>", () => {
  return {};
});

export const setVDropdownContext = setContext;
export const useVDropdownContext = useContext;
