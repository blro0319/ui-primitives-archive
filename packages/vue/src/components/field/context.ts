import {
  computed,
  onMounted,
  type MaybeRefOrGetter,
  ref,
  toValue,
  watch,
} from "vue";
import {
  createContext,
  createEventHooks,
  randomStr,
  upperFirst,
} from "~/utils";
import type { UseField } from "~/validate";
import type { VFieldReportTiming } from "./types";

const { setContext, useContext } = createContext(
  "<VField>",
  (options: VFieldContextOptions) => {
    const hooks = createEventHooks<{
      inputChange(): void;
      inputBlur(): void;
      inputSubmit(): void;
    }>();

    const reportWhen = computed(() => toValue(options.reportWhen) || "submit");
    watch(reportWhen, (when) => {
      hooks.clear();
      if (when !== "none") hooks.on(`input${upperFirst(when)}`, reportValidity);
    });

    const id = ref("");
    onMounted(() => {
      id.value = `v-field-${randomStr()}`;
    });

    const isRequired = ref(false);
    const errors = ref<string[]>([]);
    const reportedErrors = ref<string[]>([]);

    let fieldRegistered = false;
    function registerField(field: UseField) {
      if (fieldRegistered) return;
      fieldRegistered = true;

      field.$on("valid", () => {
        errors.value = [];
      });
      field.$on("invalid", (event) => {
        errors.value = [...event.errors];
      });
      field.$on("reset", () => {
        errors.value = [];
        resetReportedValidity();
      });
    }

    function reportValidity() {
      reportedErrors.value = [...errors.value];
    }
    function resetReportedValidity() {
      reportedErrors.value = [];
    }

    return {
      id,
      isRequired,
      errors,
      reportedErrors,
      registerField,
      reportValidity,
      resetReportedValidity,
      hooks,
    };
  }
);

export const setVFieldContext = setContext;
export const useVFieldContext = useContext;

interface VFieldContextOptions {
  reportWhen?: MaybeRefOrGetter<VFieldReportTiming>;
}
