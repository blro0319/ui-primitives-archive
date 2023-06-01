import { onMounted, ref } from "vue";
import { randomStr } from "~/utils";

export function useId(prefix: string = "") {
  const id = ref("");
  onMounted(() => {
    id.value = prefix ? `${prefix}-${randomStr()}` : randomStr();
  });
  return id;
}
