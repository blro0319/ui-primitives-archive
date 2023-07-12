# useGlobalHistoryStack

## 개요

기록 뒤로가기 시 실행되는 함수를 등록하고, 스택을 관리합니다. 마지막에 생성된 스택부터 실행됩니다. 주로 안드로이드 뒤로 가기를 위해 사용됩니다.

```ts
function useGlobalHistoryStack(handler: (event: PopStateEvent) => void): {
  create(): void;
  revoke(): void;
};
```
