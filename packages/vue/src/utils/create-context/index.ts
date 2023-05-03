import { inject, type InjectionKey, provide } from "vue";

export function createContext<
  Context extends object,
  SetupArgs extends any[],
  Default extends (() => Context) | null | undefined = undefined
>(
  rootComponentName: string,
  setup: (...args: SetupArgs) => Context,
  injectionDefault?: Default
) {
  const injectionKey = Symbol(rootComponentName) as InjectionKey<Context>;

  type ContextReturn = Default extends undefined
    ? Context
    : Default extends null
    ? Context | null
    : Context;

  return {
    setContext(...args: SetupArgs) {
      const context = setup(...args);
      provide(injectionKey, context);
      return context;
    },
    createUseComposable(componentName: string = "<unknown>") {
      return (): ContextReturn => {
        if (injectionDefault === undefined) {
          const context = inject(injectionKey);
          if (!context) {
            const msg = `${componentName} component must used within ${rootComponentName} component.`;
            throw new Error(msg);
          }
          // @ts-expect-error
          return context;
        } else {
          // @ts-expect-error
          return inject(injectionKey, injectionDefault?.() || null);
        }
      };
    },
  };
}
