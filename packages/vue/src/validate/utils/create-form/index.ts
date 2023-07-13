import { computed, type MaybeRefOrGetter, toValue } from "vue";
import type { FieldLike, FieldValidateResult } from "~/validate";
import type { FormValidateResult } from "./types";

export * from "./types";

export function createForm(fields: MaybeRefOrGetter<FieldLike[]>) {
  const $fields = computed(() => toValue(fields));

  async function validate(): Promise<FormValidateResult> {
    const fieldsResults: FieldValidateResult<string>[] = [];
    const invalidFields: FieldLike[] = [];
    const invalidIndexes: number[] = [];

    const promises = $fields.value.map(async (field, index) => {
      const result = await field.validate();
      fieldsResults.push(result);
      if (!result.valid) {
        invalidFields.push(field);
        invalidIndexes.push(index);
      }
    });
    await Promise.all(promises);

    return {
      valid: invalidFields.length === 0,
      fieldsResults,
      invalidFields,
      invalidIndexes,
    };
  }
  async function $validate() {
    return (await validate()).valid;
  }

  return {
    fields: $fields,
    validate,
    $validate,
  };
}
