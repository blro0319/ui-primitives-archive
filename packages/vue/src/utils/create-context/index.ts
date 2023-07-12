import { inject, type InjectionKey, provide } from "vue";

/**
 * ---
 *
 * [English](https://ui-primitives.blro.dev/api/utils/create-context/) |
 * [한국어](https://ui-primitives.blro.dev/ko/api/utils/create-context/)
 *
 * ---
 *
 * **English**
 *
 * Creates provide, inject functions.
 * Throws error when trying to inject outside of provide scope if no default value is provided.
 *
 * ---
 *
 * **한국어**
 *
 * 제공, 주입 함수를 생성합니다.
 * 기본 값이 없으면 제공 범위 밖에서 주입하려고 할 때 오류가 발생합니다.
 *
 * ---
 *
 * @example
 * ```ts
 * const { setContext, useContext } = createContext("Counter", () => {
 *   const count = ref(0);
 *
 *   function increment() {
 *     count.value++;
 *   }
 *   function decrement() {
 *     count.value--;
 *   }
 *
 *   return {
 *     count,
 *     increment,
 *     decrement,
 *   };
 * });
 *
 * export const setCounterContext = setContext;
 * export const useCounterContext = useContext;
 * ```
 */
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
    useContext(componentName: string = "<unknown>"): ContextReturn {
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
    },
  };
}
