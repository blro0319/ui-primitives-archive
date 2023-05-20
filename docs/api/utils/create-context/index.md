# createContext

제공(Provide)과 주입(Inject)를 사용한 컨텍스트를 생성할 때 사용합니다.

```ts
function createContext<
  Context extends object,
  SetupArgs extends any[],
  Default extends (() => Context) | null | undefined
>(
  providerName: string,
  setup: (...args: SetupArgs) => Context,
  injectionDefault?: Default
): {
  setContext(...args: SetupArgs): Context;
  useContext(): Default extends undefined
    ? Context
    : Default extends null
    ? Context | null
    : Context;
};
```
