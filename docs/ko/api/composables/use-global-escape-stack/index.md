# useGlobalEscapeStack

## 개요

전역적으로 <kbd>ESC</kbd> 키를 누르면 실행되는 함수를 등록하고, 스택을 관리합니다. 마지막에 생성된 스택부터 실행됩니다.

```ts
function useGlobalEscapeStack(handler: (event: KeyboardEvent) => void): {
  create(): void;
  revoke(): void;
};
```
