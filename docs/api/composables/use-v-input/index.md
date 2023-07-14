# useVInput

## 개요

```ts
function useVInput<Value, Rules extends Rule<string, Value>[]>(
  options: UseVInputOptions<Value, Rules>
): {
  vFieldContext: ReturnType<typeof useVFieldContext>;
  field: ReturnType<typeof useField>;
  inputBind: ComputedRef<VBindAttributes<"input">>;
};

interface UseVInputOptions<Value, Rules extends Rule<string, Value>[]> {
  value: Ref<Value>;
  defaultValue?: MaybeRefOrGetter<Value>;
  rules?: MaybeRefOrGetter<Rules>;
  validityMessages?: MaybeRefOrGetter<ValidityMessages<Rules>>;
  focus(options?: FocusOptions): void;
}
```
