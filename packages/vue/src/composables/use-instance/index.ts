import { getCurrentInstance } from "vue";

export function useInstance() {
  const instance = getCurrentInstance()?.proxy;
  if (process.env.NODE_ENV !== "production" && !instance) {
    throw new Error(ErrorMessages.MISSING_INSTANCE);
  }
  return instance!;
}

const ErrorMessages = {
  MISSING_INSTANCE:
    "Missing current instance. useInstance() must be called inside <script setup> or setup().",
} as const satisfies Record<string, string>;
