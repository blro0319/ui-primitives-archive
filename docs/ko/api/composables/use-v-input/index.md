# useVInput

## 개요

```ts
function useVInput<Value, RuleName extends string>(
  options: UseVInputOptions<Value, RuleName>
): {
  vFieldContext: ReturnType<typeof useVFieldContext>;
  field: ReturnType<typeof useField>;
  inputBind: ComputedRef<VBindAttributes<"input">>;
};

interface UseVInputOptions<Value, RuleName extends string> {
  value: Ref<Value>;
  defaultValue?: MaybeRefOrGetter<Value>;
  rules?: MaybeRefOrGetter<Rule<RuleName, Value>[]>;
  validityMessages?: MaybeRefOrGetter<Partial<Record<RuleName, string>>>;
  focus(options?: FocusOptions): void;
}
```
