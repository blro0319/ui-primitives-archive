import { createContext, createEventHooks } from "~/utils";
import { createForm, type FormValidateResult, type UseField } from "~/validate";

const { setContext, useContext } = createContext(
  "setForm",
  () => {
    const hooks = createEventHooks<{
      valid(result: FormValidateResult): void;
      invalid(result: FormValidateResult): void;
    }>();

    const fields = new Map<UseField, UseFormContextInvalidHandler>();
    const form = createForm(() => Array.from(fields.keys()));

    function addField(
      field: UseField,
      onInvalid: UseFormContextInvalidHandler
    ) {
      fields.set(field, onInvalid);
      return () => deleteField(field);
    }
    function deleteField(field: UseField) {
      fields.delete(field);
    }

    hooks.$on("invalid", ({ invalidIndexes }) => {
      const handlers = Array.from(fields.values());
      invalidIndexes.forEach((index, order) => handlers[index]?.({ order }));
    });

    async function validate() {
      const result = await form.validate();
      hooks.trigger(result.valid ? "valid" : "invalid", result);
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

export const setFormContext = setContext;
export const useFormContext = useContext;

export interface UseFormContextInvalidEvent {
  order: number;
}

export type UseFormContextInvalidHandler = (
  result: UseFormContextInvalidEvent
) => void;
