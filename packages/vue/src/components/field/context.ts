import { computed, type MaybeRefOrGetter, ref, toValue } from "vue";
import { setVContentContext } from "~/components";
import { useId } from "~/composables";
import type { VBindAttributes } from "~/types";
import { createContext, createEventHooks } from "~/utils";
import type {
  UseField,
  UseFieldValidateResult,
  UseFormSubmitEvent,
} from "~/validate";
import type { VFieldProps } from "./types";

const { setContext, useContext } = createContext(
  "<VField>",
  (options: VFieldContextOptions) => {
    const hooks = createEventHooks<{
      valid(event: UseFieldValidateResult<string>): void;
      invalid(event: UseFieldValidateResult<string>): void;
      reset(): void;
      submit(event: UseFormSubmitEvent): void;
      report(): void;
    }>();

    const reportWhen = computed(() => toValue(options.reportWhen) || "submit");
    const watchInputValue = computed(() => reportWhen.value.includes("change"));

    const id = useId("v-field");
    const inputId = useId("v-field-input");

    const isRequired = ref(false);
    const errors = ref<string[]>([]);
    const reportedErrors = ref<string[]>([]);

    const { rootAttrs } = setVContentContext();

    const inputBind = computed(() => {
      return {
        "id": inputId.value,
        "aria-required": isRequired.value ? "true" : undefined,
        "aria-describedby": rootAttrs.value["aria-describedby"],
        "aria-invalid": !!errors.value.length,
        "onBlur"() {
          if (reportWhen.value.includes("blur")) {
            validate()?.then(reportValidity);
          }
        },
      } satisfies VBindAttributes<"input">;
    });

    let field: UseField | undefined;
    function registerField(target: UseField) {
      if (field) return;
      field = target;

      field.$on("valid", (event) => {
        errors.value = [];
        hooks.trigger("valid", event);
        reportValidity();
      });
      field.$on("invalid", (event) => {
        errors.value = [...event.errors];
        hooks.trigger("invalid", event);
        if (watchInputValue.value) reportValidity();
      });
      field.$on("reset", () => {
        errors.value = [];
        hooks.trigger("reset");
        resetReportedValidity();
      });

      field.$on("submit", (event) => {
        hooks.trigger("submit", event);
        if (reportWhen.value.includes("submit")) reportValidity();
      });
    }

    async function validate() {
      return await field?.validate();
    }
    async function $validate() {
      return (await field?.$validate()) || false;
    }
    function reportValidity() {
      hooks.trigger("report");
      reportedErrors.value = [...errors.value];
    }
    function resetReportedValidity() {
      reportedErrors.value = [];
    }

    return {
      hooks,
      reportWhen,
      watchInputValue,
      id,
      inputId,
      isRequired,
      errors,
      reportedErrors,
      inputBind,
      validate,
      $validate,
      registerField,
      reportValidity,
      resetReportedValidity,
    };
  },
  null
);

export const setVFieldContext = setContext;
export const useVFieldContext = useContext;

interface VFieldContextOptions {
  reportWhen?: MaybeRefOrGetter<VFieldProps["reportWhen"]>;
}
