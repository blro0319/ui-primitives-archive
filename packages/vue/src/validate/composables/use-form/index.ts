import { createContext } from "~/utils";
import { createForm, type UseField } from "~/validate";

const { setContext, useContext } = createContext(
  "setForm",
  () => {
    const fields = new Map<UseField, UseFormSubmitEventHandler>();
    const form = createForm(() => Array.from(fields.keys()));

    function addField(field: UseField, onInvalid: UseFormSubmitEventHandler) {
      fields.set(field, onInvalid);
      return () => deleteField(field);
    }
    function deleteField(field: UseField) {
      fields.delete(field);
    }

    async function validate() {
      const result = await form.validate();

      const handlers = Array.from(fields.values());
      handlers.forEach((handler, index) => {
        if (result.valid) {
          handler({ type: "valid" });
        } else {
          const order = result.invalidIndexes.indexOf(index);
          if (order === -1) handler({ type: "valid" });
          else handler({ type: "invalid", order });
        }
      });

      return result;
    }
    async function $validate() {
      return (await validate()).valid;
    }

    function reset() {
      fields.forEach((_, { reset }) => reset());
    }

    return {
      addField,
      deleteField,
      validate,
      $validate,
      reset,
    };
  },
  null
);

export const setForm = setContext;
export const useForm = useContext;

export type UseFormSubmitEventHandler = (event: UseFormSubmitEvent) => void;
export type UseFormSubmitEvent =
  | { type: "valid" }
  | { type: "invalid"; order: number };
