import { computed, type MaybeRefOrGetter, ref, toValue } from "vue";
import { setVContentContext } from "~/components";
import { useId } from "~/composables";
import type { VBindAttributes } from "~/types";
import { createContext } from "~/utils";
import type { UseField } from "~/validate";
import type { VFieldProps } from "./types";

const { setContext, useContext } = createContext(
  "<VField>",
  (options: VFieldContextOptions) => {
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

      field.$on("valid", () => {
        errors.value = [];
        reportValidity();
      });
      field.$on("invalid", (event) => {
        errors.value = [...event.errors];
        if (watchInputValue.value) reportValidity();
      });
      field.$on("reset", () => {
        errors.value = [];
        resetReportedValidity();
      });

      field.$on("submit", () => {
        if (reportWhen.value.includes("submit")) reportValidity();
      });
    }

    function validate() {
      return field?.validate();
    }
    function $validate() {
      return field?.$validate();
    }
    function reportValidity() {
      reportedErrors.value = [...errors.value];
    }
    function resetReportedValidity() {
      reportedErrors.value = [];
    }

    return {
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
