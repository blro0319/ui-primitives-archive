# createContext

## 개요

제공(Provide), 주입(Inject) 함수를 생성합니다. 두 번째 인자가 반환하는 객체가 제공됩니다.

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

## 사용법

첫 번째 인자로 제공자 이름을 넘겨줍니다. 경고를 출력할 때 사용됩니다.

```ts
const { setContext, useContext } = createContext("<MyCounter>", () => {
  const count = ref(0);

  return {
    count,
    increment() {
      count.value++;
    },
    decrement() {
      count.value--;
    },
  };
});

export const setCounterContext = setContext;
export const useCounterContext = useContext;
```

세 번째 인자로 기본 값을 전달하지 않으면 제공 범위 밖에서 주입하려고 할 때 오류가 발생합니다. 오류를 발생시키지 않으려면 기본 값을 제공하거나, `null`을 전달해야 합니다.

```ts{16}
const { setContext, useContext } = createContext(
  "<MyCounter>",
  () => {
    const count = ref(0);

    return {
      count,
      increment() {
        count.value++;
      },
      decrement() {
        count.value--;
      },
    };
  },
  null // 범위 밖에서 사용해도 오류가 발생하지 않습니다.
);
```

두 번째 인자의 파라미터는 `setContext` 함수의 파라미터로 전달됩니다.

```ts{3-5,20-21}
const { setContext, useContext } = createContext(
  "<MyCounter>",
  // 파라미터를 받아서 사용합니다.
  (initial = 0) => {
    const count = ref(initial);

    return {
      count,
      increment() {
        count.value++;
      },
      decrement() {
        count.value--;
      },
    };
  },
  null
);

// 파라미터를 전달합니다.
setContext(10);
```
